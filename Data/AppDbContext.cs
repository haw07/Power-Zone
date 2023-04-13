using power_zone.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace power_zone.Data;

public class AppDbContext : IdentityDbContext<User>
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Booking> Bookings { get; set; } = null!;
    public DbSet<Coach> Coaches{get;set;} = null!;
    public DbSet<GymClass> GymClasses{get;set;}= null!;


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfiguration(new SeedCoaches());
        modelBuilder.ApplyConfiguration(new SeedGymClasses());
        modelBuilder.ApplyConfiguration(new SeedUsers());
    }
    

}

