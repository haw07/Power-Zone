using power_zone.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace power_zone.Data;

public class AppDbContext : IdentityDbContext<User>
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Booking> Bookings { get; set; } = null!;
    public DbSet<GymClass> GymClasses { get; set; } = null!;


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfiguration(new SeedGymClasses());
        modelBuilder.ApplyConfiguration(new SeedUsers());

        var stringListConverter = new ValueConverter<List<string>?, string>(
                v => string.Join(',', v ?? new List<string>()),
                v => v.Split(',', System.StringSplitOptions.RemoveEmptyEntries).ToList());

            modelBuilder.Entity<User>()
                .Property(u => u.classes)
                .HasConversion(stringListConverter);

            modelBuilder.Entity<User>()
                .Property(u => u.trainees)
                .HasConversion(stringListConverter);

        
    }


}
