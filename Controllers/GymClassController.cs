using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using power_zone.Data;
using power_zone.Models;

namespace power_zone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GymClassController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GymClassController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/GymClass
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GymClass>>> GetGymClasses()
        {
          if (_context.GymClasses == null)
          {
              return NotFound();
          }
            return await _context.GymClasses.ToListAsync();
        }

        // GET: api/GymClass/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GymClass>> GetGymClass(int id)
        {
          if (_context.GymClasses == null)
          {
              return NotFound();
          }
            var gymClass = await _context.GymClasses.FindAsync(id);

            if (gymClass == null)
            {
                return NotFound();
            }

            return gymClass;
        }

        // PUT: api/GymClass/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGymClass(string id, GymClass gymClass)
        {
            if (id != gymClass.Id)
            {
                return BadRequest();
            }

            _context.Entry(gymClass).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GymClassExists(id))
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

        // POST: api/GymClass
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GymClass>> PostGymClass(GymClass gymClass)
        {
          if (_context.GymClasses == null)
          {
              return Problem("Entity set 'AppDbContext.GymClasses'  is null.");
          }
            _context.GymClasses.Add(gymClass);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGymClass", new { id = gymClass.Id }, gymClass);
        }

        // DELETE: api/GymClass/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGymClass(int id)
        {
            if (_context.GymClasses == null)
            {
                return NotFound();
            }
            var gymClass = await _context.GymClasses.FindAsync(id);
            if (gymClass == null)
            {
                return NotFound();
            }

            _context.GymClasses.Remove(gymClass);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GymClassExists(string id)
        {
            return (_context.GymClasses?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
