using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using power_zone.Data;
using power_zone.Models;

namespace PowerZone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoachController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CoachController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Coach
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Coach>>> GetCoaches()
        {
          if (_context.Coaches == null)
          {
              return NotFound();
          }
            return await _context.Coaches.ToListAsync();
        }

        // GET: api/Coach/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Coach>> GetCoach(int id)
        {
          if (_context.Coaches == null)
          {
              return NotFound();
          }
            var coach = await _context.Coaches.FindAsync(id);

            if (coach == null)
            {
                return NotFound();
            }

            return coach;
        }

        // PUT: api/Coach/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCoach(string id, Coach coach)
        {
            if (id != coach.Id)
            {
                return BadRequest();
            }

            _context.Entry(coach).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoachExists(id))
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

        // POST: api/Coach
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Coach>> PostCoach(Coach coach)
        {
          if (_context.Coaches == null)
          {
              return Problem("Entity set 'AppDbContext.Coaches'  is null.");
          }
            _context.Coaches.Add(coach);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCoach", new { id = coach.Id }, coach);
        }

        // DELETE: api/Coach/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCoach(int id)
        {
            if (_context.Coaches == null)
            {
                return NotFound();
            }
            var coach = await _context.Coaches.FindAsync(id);
            if (coach == null)
            {
                return NotFound();
            }

            _context.Coaches.Remove(coach);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CoachExists(string id)
        {
            return (_context.Coaches?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
