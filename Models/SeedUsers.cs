using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace power_zone.Models;

public class SeedUsers : IEntityTypeConfiguration<User>
{

    public void Configure(EntityTypeBuilder<User> entity)
    {
        entity.HasData(
            new User
            {
                imgURL = "https://img.freepik.com/premium-photo/portrait-happy-gym-trainer-holding-clipboard_107420-30393.jpg?w=2000",
                UserName = "James",
                lastName = "Rachel",
                Email = "coach01@powerzone.com",
                address = "123 Main St",
                role = "Coach"
            },
            new User
            {
                imgURL = "https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=",
                UserName = "Adam",
                lastName = "Smith",
                Email = "coach02@powerzone.com",
                address = "24 Main Street",
                role = "Coach"
            },
            new User
            {
                imgURL = "https://media.istockphoto.com/id/675213138/photo/smiling-trainer-holding-clipboard.jpg?s=612x612&w=0&k=20&c=irFL9mh56DGBruHtTJQtUfanzAOoQCw9CHPVEVqPKhc=",
                UserName = "Abbey",
                lastName = "Mcvay",
                Email = "coach03@powerzone.com",
                address = "123 Main S",
                role = "Coach"
            },
            new User
            {
                imgURL = "https://media.istockphoto.com/id/635742500/photo/personal-trainer-with-clipboard-showing-thumb-up-in-gym.jpg?s=612x612&w=0&k=20&c=g3w-6fFlo47Crqwa5NJh9ZfQf5knWlGsSJY5AAwyAf0=",
                UserName = "Nicole",
                lastName = "Dahlberg",
                Email = "coach04@powerzone.com",
                address = "33 Street",
                role = "Coach"
            },
            new User
            {
                imgURL = "https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=",
                UserName = "Jimmy",
                lastName = "Pratt",
                Email = "coach05@powerzone.com",
                address = "32 St",
                role = "Coach"
            },
            new User
            {
                imgURL = "https://media.istockphoto.com/id/925188400/photo/happy-fitness-instructor-with-training-plan-in-a-health-club.jpg?s=612x612&w=0&k=20&c=XK4wm54qQ81iA3KZ25f4U5ByUS7UuofHE4NdQopsZAc=",
                UserName = "Mickeal",
                lastName = "Anderson",
                Email = "coach06@powerzone.com",
                address = "22 Main St",
                role = "Coach"
            }
        );
    }
}