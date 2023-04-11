using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace PowerZone.Models;

public class SeedUsers: IEntityTypeConfiguration<User>{

    public void Configure(EntityTypeBuilder<User> entity){
        entity.HasData(
            new User{Id="1", UserName="Joudy", PasswordHash="123", gender="F",lastName="Al Ashkar" }
        );
    }
}