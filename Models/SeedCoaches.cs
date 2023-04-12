using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace PowerZone.Models;

public class SeedCoaches: IEntityTypeConfiguration<Coach>{

    public void Configure(EntityTypeBuilder<Coach> entity){
        entity.HasData(
            new Coach{
                Id= "1",
                img= "https://img.freepik.com/premium-photo/portrait-happy-gym-trainer-holding-clipboard_107420-30393.jpg?w=2000",
                firstName= "James",
                lastName= "Rachel",
                role= "Gym Trainer",
                email= "coach01@powerzone.com",
            },
            new Coach{
                Id= "2",
                img= "https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=",
                firstName= "Adam",
                lastName= "Smith",
                role= "Gym Trainer",
                email= "coach02@powerzone.com",
            },
            new Coach{
                Id= "3",
                img= "https://media.istockphoto.com/id/675213138/photo/smiling-trainer-holding-clipboard.jpg?s=612x612&w=0&k=20&c=irFL9mh56DGBruHtTJQtUfanzAOoQCw9CHPVEVqPKhc=",
                firstName= "Abbey",
                lastName= "Mcvay",
                role= "Gym Trainer",
                email= "coach03@powerzone.com",
            },
            new Coach{
                Id= "4",
                img= "https://media.istockphoto.com/id/635742500/photo/personal-trainer-with-clipboard-showing-thumb-up-in-gym.jpg?s=612x612&w=0&k=20&c=g3w-6fFlo47Crqwa5NJh9ZfQf5knWlGsSJY5AAwyAf0=",
                firstName= "Nicole",
                lastName= "Dahlberg",
                role= "Gym Trainer",
                email= "coach04@powerzone.com",
            },
            new Coach{
                Id= "5",
                img= "https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=",
                firstName= "Jimmy",
                lastName= "Pratt",
                role= "Gym Trainer",
                email= "coach05@powerzone.com",
            },
            new Coach{
                Id= "6",
                img= "https://media.istockphoto.com/id/925188400/photo/happy-fitness-instructor-with-training-plan-in-a-health-club.jpg?s=612x612&w=0&k=20&c=XK4wm54qQ81iA3KZ25f4U5ByUS7UuofHE4NdQopsZAc=",
                firstName= "Mickeal",
                lastName= "Anderson",
                role= "Gym Trainer",
                email= "coach06@powerzone.com",
            }
    );}
}