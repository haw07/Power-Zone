using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using power_zone.Data;
using power_zone.Models;
using SendGrid;
using SendGrid.Helpers.Mail;


namespace PowerZone.Controllers
{
    [Route("api/Account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly AppDbContext _context;
        private UserManager<User> userManager;
        private SignInManager<User> signInManager;

        public AccountController(AppDbContext context, UserManager<User> userMngr, SignInManager<User> signInMngr)
        {
            _context = context;
            userManager = userMngr;
            signInManager = signInMngr;
        }

        // GET: api/Account
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            return await _context.Users.ToListAsync();
        }

        // GET: api/Account/GetUser/user23@gmail.com
        [HttpGet("GetUser/{email}")]
        public async Task<ActionResult<User>> GetUser(string email)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await userManager.FindByEmailAsync(email);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Account/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // To update a user entity in the database
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(string id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Account
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //To create users (for sign up)
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            if (_context.Users == null)
            {
                return Problem("Entity set 'AppDbContext.Users'  is null.");
            }
            var result = await userManager.CreateAsync(user);
            if (result.Succeeded)
            {
                await signInManager.SignInAsync(user, isPersistent: false);
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserExists(user.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Account/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            // _context.Users.Remove(user);
            await userManager.DeleteAsync(user);
            // await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool UserExists(string id)
        {
            return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        // POST: api/Account/login
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<bool> LogIn(string email, string password)
        {
            var user =await _context.Users.Where(u=>u.Email ==email).FirstOrDefaultAsync();
            if(user != null){

                var result = await signInManager.PasswordSignInAsync(
                user.Email, user.password,
                isPersistent: false,
                lockoutOnFailure: false);

                if (result.Succeeded)
                {
                    return true;
                }
                else return false;
            }
            return false;

        }
        //POST:api/Account/resetpassword
        [HttpPost("resetpassword")]
        public async Task<IActionResult> ResetPassword([FromBody] User user, string token, string newPassword)
        {
            if (user == null)
            {
                return BadRequest("Invalid user");
            }

            var resetPasswordResult = await userManager.ResetPasswordAsync(user, token, newPassword);
            if (!resetPasswordResult.Succeeded)
            {
                return BadRequest("Failed to reset password");
            }

            return Ok();
        }
        // GET:api/Account/user25aa@gmail.com
        [HttpGet("{email}")]
        public IEnumerable<GymClass> GetGymClasses(string email)
        {
            return _context.Users.Where(u => u.Email == email).SelectMany(u => u.classes).ToList();

        }
        // GET:api/Account/Coach/user25aa@gmail.com
        [HttpGet("Coach/{email}")]
        public IEnumerable<User> GetTrainees(string email)
        {
            return _context.Users.Where(u => u.Email == email).SelectMany(u => u.trainees).ToList();

        }
        //POST:api/Account/signout
        [HttpPost("signout")]
        public async Task<IActionResult> signout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }
        // GET:api/Account/getTrainers 
        [HttpGet("getTrainers")]
        public IEnumerable<User> GetTrainers()
        {
            return _context.Users.Where(u => u.role == "Coach").ToList();
        }

        //GET: api/Account/changeFirstName/James
        [HttpGet("changeFirstName/{newName}")]
        public async Task<IActionResult> changeFirstName(string email, string newName){
            var user = await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.UserName = newName;
            await _context.SaveChangesAsync();
            return Ok();
        }

        //GET: api/Account/changeLastName/James
        [HttpGet("changeLastName/{newName}")]
        public async Task<IActionResult> changeLastName(string email, string newName){
            var user = await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.lastName = newName;
            await _context.SaveChangesAsync();
            return Ok();
        }

        //GET: api/Account/changeEmail/James@gmail.com
        [HttpGet("changeEmail/{newEmail}")]
        public async Task<IActionResult> changeEmail(string email, string newEmail){
            var user = await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.Email = newEmail;
            await _context.SaveChangesAsync();
            return Ok();
        }
        
        //GET: api/Account/changePhone/797338
        [HttpGet("changePhone/{newPhone}")]
        public async Task<IActionResult> changePhone(string email, string newPhone){
            var user =await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.PhoneNumber = newPhone;
           await _context.SaveChangesAsync();
            return Ok();
        }

        //GET: api/Account/changeAddress/132 main str
        [HttpGet("changeAddress/{newAddress}")]
        public async Task<IActionResult> changeAddress(string email, string newAddress){
            var user =await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.address = newAddress;
            await _context.SaveChangesAsync();
            return Ok();
        }
        
        //GET: api/Account/changeProgress/75.5
        [HttpGet("changeProgress/{newProgress}")]
        public async Task<IActionResult> changeProgress(string email, float newProgress){
            var user =await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.progress = newProgress;
            await _context.SaveChangesAsync();
            return Ok();
        }

        //GET: api/Account/changeMaxSquat/75.5
        [HttpGet("changeMaxSquat/{newNumber}")]
        public async Task<IActionResult> changeMaxSquat(string email, float newNumber){
            var user =await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.max_squat = newNumber;
            await _context.SaveChangesAsync();
            return Ok();
        }
        //GET: api/Account/changeMaxBenchPress/75.5
        [HttpGet("changeMaxBenchPress/{newNumber}")]
        public async Task<IActionResult> changeMaxBenchPress(string email, float newNumber){
            var user =await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.max_bench_press = newNumber;
           await _context.SaveChangesAsync();
           return Ok();
        }
        //GET: api/Account/changeMaxDeadLift/75.5
        [HttpGet("changeMaxDeadLift/{newNumber}")]
        public async Task<IActionResult> changeMaxDeadLift(string email, float newNumber){
            var user = await _context.Users.Where(u => u.Email ==email).FirstOrDefaultAsync();
            user.max_deadlift = newNumber;
            await _context.SaveChangesAsync();
            return Ok();
        }
        //GET: api/Account/register
        [HttpGet("register")]
        public async Task<IActionResult> register(string email, string coachName, string className){
            var user =await _context.Users.Where(u=>u.Email==email).FirstOrDefaultAsync();
            var gymclass = await _context.GymClasses.Where(g=>g.name==className).FirstOrDefaultAsync();
            user.classes.Append(gymclass);
            var coach = await _context.Users.Where(u=>u.UserName==coachName).FirstOrDefaultAsync();
            coach.trainees.Append(user);
            await _context.SaveChangesAsync();
            return Ok();
        }

        


    }
}