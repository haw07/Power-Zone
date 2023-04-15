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
            var user = await _context.Users.Where(u =>u.Email==email).FirstOrDefaultAsync();

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
        public async Task<bool> LogIn([FromForm] string email, [FromForm]string password)
        {
            var user =await _context.Users.Where(u=>u.Email ==email).FirstOrDefaultAsync();
            if(user != null){

                if (user.password==password)
                {
                    return true;
                }
                else return false;
            }
            return false;

        }
        //POST:api/Account/resetpassword
        [HttpPost("resetpassword")]
        public async Task<IActionResult> ResetPassword(string email, int token, string newPassword)
        {
            var user = await _context.Users.Where(u=>u.Email==email).FirstOrDefaultAsync();
            if (user == null)
            {
                return BadRequest("Invalid user");
            }

            if(token==user.verificationPin){
                user.password=newPassword;
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest("wrong pin");
        }
        // GET:api/Account/user25aa@gmail.com
        [HttpGet("{email}")]
        public IEnumerable<GymClass> GetGymClasses(string email)
        {
            var user = _context.Users.Where(u => u.Email == email).FirstOrDefault();
            IEnumerable<GymClass> classes =Enumerable.Empty<GymClass>();
            if(user!=null){
                if(user.classes!=null) {
                    foreach(var c in user.classes){
                        var gymclass= _context.GymClasses.Where(u=>u.Id==c).FirstOrDefault();
                        if(gymclass!=null) classes= classes.Append(gymclass);
                    }
                }
            }
            return classes;

        }
        // GET:api/Account/Coach/user25aa@gmail.com
        [HttpGet("Coach/{email}")]
        public IEnumerable<User> GetTrainees(string email)
        {   var user = _context.Users.Where(u => u.Email == email).FirstOrDefault();
            IEnumerable<User> trainees =Enumerable.Empty<User>();
            if(user!=null){
                if(user.trainees!=null) {
                    foreach(var c in user.trainees){
                        var trainee= _context.Users.Where(u=>u.Id==c).FirstOrDefault();
                        if(trainee!=null) trainees = trainees.Append(trainee);
                    }
                }
            }
            return trainees;

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

        //POST: api/Account/changeFirstName/James
        [HttpPost("changeFirstName/{email}/{newName}")]
        public async Task<IActionResult> changeFirstName(string email, string newName)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.UserName = newName;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }

        //POST: api/Account/changeLastName/user@gmail.com/James
        [HttpPost("changeLastName/{email}/{newName}")]
        public async Task<IActionResult> changeLastName(string email, string newName)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.lastName = newName;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }

        //POST: api/Account/changeEmail/user@gmail.com/James@gmail.com
        [HttpPost("changeEmail/{email}/{newEmail}")]
        public async Task<IActionResult> changeEmail(string email, string newEmail)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.Email = newEmail;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }

        //POST: api/Account/changePhone/user@gmail.com/797338
        [HttpPost("changePhone/{email}/{newPhone}")]
        public async Task<IActionResult> changePhone(string email, string newPhone)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.PhoneNumber = newPhone;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }

        //POST: api/Account/changeAddress/user@gmail.com/132 main str
        [HttpPost("changeAddress/{email}/{newAddress}")]
        public async Task<IActionResult> changeAddress(string email, string newAddress)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.address = newAddress;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }

        //POST: api/Account/changeProgress/user@gmail.com/75.5
        [HttpPost("changeProgress/{email}/{newProgress}")]
        public async Task<IActionResult> changeProgress(string email, float newProgress)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.progress = newProgress;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }

        //POST: api/Account/changeMaxSquat/user@gmail.com/75.5
        [HttpPost("changeMaxSquat/{email}/{newNumber}")]
        public async Task<IActionResult> changeMaxSquat(string email, float newNumber)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.max_squat = newNumber;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }
        //POST: api/Account/changeMaxBenchPress/user@gmail.com/75.5
        [HttpPost("changeMaxBenchPress/{email}/{newNumber}")]
        public async Task<IActionResult> changeMaxBenchPress(string email, float newNumber)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.max_bench_press = newNumber;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }
        //POST: api/Account/changeMaxDeadLift/user@gmail.com/75.5
        [HttpPost("changeMaxDeadLift/{email}/{newNumber}")]
        public async Task<IActionResult> changeMaxDeadLift(string email, float newNumber)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user != null)
            {
                user.max_deadlift = newNumber;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }
        //POST: api/Account/register
        [HttpPost("register")]
        public async Task<IActionResult> register([FromForm] string email,[FromForm] string coachName, [FromForm] string className)
        {
            var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            var gymclass = await _context.GymClasses.Where(g => (g.name == className && g.CoachName==coachName)).FirstOrDefaultAsync();
            var coach = await _context.Users.Where(u => (u.UserName+" "+u.lastName) == coachName).FirstOrDefaultAsync();
            if(gymclass!=null && user!=null && coach!=null){
                
                if(user.classes!=null) {
                    if(user.classes.Contains(gymclass.Id)) return BadRequest("already registered");
                    var newgymclasslist= new List<string>();
                    newgymclasslist = newgymclasslist.Concat(user.classes).ToList();
                    newgymclasslist.Add(gymclass.Id);
                    user.classes = newgymclasslist;

                    await _context.SaveChangesAsync();
                    
                }
                else {
                    var newgymclasslist = new List<string>();
                    newgymclasslist.Add(gymclass.Id);
                    user.classes = newgymclasslist;
                    
                    await _context.SaveChangesAsync();
                }
                if (coach.trainees !=null) {
                    if(coach.trainees.Contains(user.Id)) return BadRequest("already registered");
                    var newtraineelist= new List<string>();
                    newtraineelist = newtraineelist.Concat(coach.trainees).ToList();
                    newtraineelist.Add(user.Id);
                    coach.trainees = newtraineelist;
                    await _context.SaveChangesAsync();
                }
                else{
                    var newtraineelist = new List<string>(); 
                    newtraineelist.Add(user.Id);
                    coach.trainees= newtraineelist;
                    await _context.SaveChangesAsync();
                }
                return Ok();
            }
            return BadRequest();   
        }




    }
}