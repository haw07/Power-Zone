using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace PowerZone.Models;

public class SeedCoaches: IEntityTypeConfiguration<Coach>{

    public void Configure(EntityTypeBuilder<Coach> entity){
        // entity.HasData(
        //     new Coach{},
        // );
    }
}