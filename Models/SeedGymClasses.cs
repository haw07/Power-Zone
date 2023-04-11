using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace PowerZone.Models;

public class SeedGymClasses: IEntityTypeConfiguration<GymClass>{

    public void Configure(EntityTypeBuilder<GymClass> entity){
        // entity.HasData(
        //     new GymClass{},
        //     new GymClass{}
        // );
    }
}