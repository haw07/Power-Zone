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
                Id = "1",
                imgURL = "https://img.freepik.com/premium-photo/portrait-happy-gym-trainer-holding-clipboard_107420-30393.jpg?w=2000",
                UserName = "James",
                lastName = "Rachel",
                Email = "coach01@powerzone.com",
                address = "123 Main St",
                role = "Coach",
                classes= new List<GymClass>{
                     new GymClass{
                        Id="9",
                        name= "body building",
                        CoachName= "James rachel",
                        day= "Wednesday",
                        StartTime= "16:00",
                        EndTime= "19:00",
                        },
                        new GymClass{
                        Id= "10",
                        name= "yoga",
                        CoachName= "James rachel",
                        day= "Wednesday",
                        StartTime= "20:30",
                        EndTime= "23:00",
                        }
                }
            },
            new User
            {
                Id = "2",
                imgURL = "https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=",
                UserName = "Adam",
                lastName = "Smith",
                Email = "coach02@powerzone.com",
                address = "24 Main Street",
                role = "Coach",
                classes= new List<GymClass>{
                    new GymClass{
                    Id="1",
                    name= "weight loose",
                    CoachName= "Adam Smith",
                    day = "Monday",
                    StartTime =  "10:00",
                    EndTime=  "14:00",
                },
                new GymClass{
                    Id="2",
                    name= "Karate",
                    CoachName= "Adam Smith",
                    day=  "Monday",
                    StartTime= "16:00",
                    EndTime= "18:00",
                },
                new GymClass{
                    Id = "3",
                    name= "yoga",
                    CoachName= "Adam Smith",
                    day= "Monday",
                    StartTime= "18:00",
                    EndTime= "20:00",
                },
                new GymClass{
                    Id ="4",
                    name= "boxing",
                    CoachName= "Adam Smith",
                    day= "Monday",
                    StartTime= "21:00",
                    EndTime= "23:00",
                },
                new GymClass{
                Id= "5",
                name= "Karate",
                CoachName= "Adam Smith",
                day= "Tuesday",
                StartTime= "14:00",
                EndTime= "17:00",
                },
                new GymClass{
                Id="6",
                name= "boxing",
                CoachName= "Adam Smith",
                day= "Tuesday",
                StartTime= "18:00",
                EndTime= "20:00",
                },
                new GymClass{
                Id="7",
                name = "yoga",
                CoachName=  "Adam Smith",
                day= "Tuesday",
                StartTime= "20:00",
                EndTime= "22:00",
                }
                }
            },
            new User
            {
                Id = "3",
                imgURL = "https://media.istockphoto.com/id/675213138/photo/smiling-trainer-holding-clipboard.jpg?s=612x612&w=0&k=20&c=irFL9mh56DGBruHtTJQtUfanzAOoQCw9CHPVEVqPKhc=",
                UserName = "Abbey",
                lastName = "Mcvay",
                Email = "coach03@powerzone.com",
                address = "123 Main S",
                role = "Coach",
                classes= new List<GymClass>{
                    new GymClass{
                    Id= "11",
                    name= "weight loose",
                    CoachName= "Abbey Mcvay",
                    day= "Thursday",
                    StartTime= "14:00",
                    EndTime= "17:00",
                    },
                    new GymClass{
                    Id= "12",
                    name= "boxing",
                    CoachName= "Abbey Mcvay",
                    day= "Thursday",
                    StartTime= "18:00",
                    EndTime= "22:00",
                    },
                    new GymClass{
                    Id= "13",
                    name= "body building",
                    CoachName= "Abbey Mcvay",
                    day= "Thursday",
                    StartTime= "18:00",
                    EndTime= "22:00",
                    }
                }
            },
            new User
            {
                Id = "4",
                imgURL = "https://media.istockphoto.com/id/635742500/photo/personal-trainer-with-clipboard-showing-thumb-up-in-gym.jpg?s=612x612&w=0&k=20&c=g3w-6fFlo47Crqwa5NJh9ZfQf5knWlGsSJY5AAwyAf0=",
                UserName = "Nicole",
                lastName = "Dahlberg",
                Email = "coach04@powerzone.com",
                address = "33 Street",
                role = "Coach",
                classes= new List<GymClass>{
                    new GymClass{
                    Id = "14",
                    name= "boxing",
                    CoachName= "Nicole Dahlberg",
                    day= "Friday",
                    StartTime= "10:00",
                    EndTime= "13:00",
                    },
                    new GymClass{
                    Id ="15",
                    name= "body building",
                    CoachName= "Nicole Dahlberg",
                    day= "Friday",
                    StartTime= "16:00",
                    EndTime= "19:00",
                    },
                    new GymClass{
                    Id= "16",
                    name= "weight loose",
                    CoachName= "Nicole Dahlberg",
                    day= "Friday",
                    StartTime= "22:00",
                    EndTime= "23:00",
                    }
                }
            },
            new User
            {
                Id = "5",
                imgURL = "https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=",
                UserName = "Jimmy",
                lastName = "Pratt",
                Email = "coach05@powerzone.com",
                address = "32 St",
                role = "Coach",
                classes= new List<GymClass>{
                    new GymClass{
                    Id ="17",
                    name ="yoga",
                    CoachName= "Jimmy Pratt",
                    day= "Saturday",
                    StartTime= "14:00",
                    EndTime= "15:30",
                    },
                    new GymClass{
                    Id = "18",
                    name= "boxing",
                    day= "Saturday",
                    CoachName= "Jimmy Pratt",
                    StartTime= "16:00",
                    EndTime= "17:00",
                    },
                    new GymClass{
                    Id = "19",
                    name = "boxing",
                    CoachName= "Jimmy Pratt",
                    day= "Saturday",
                    StartTime= "18:00",
                    EndTime= "22:00",
                    }
                }
            },
            new User
            {
                Id = "6",
                imgURL = "https://media.istockphoto.com/id/925188400/photo/happy-fitness-instructor-with-training-plan-in-a-health-club.jpg?s=612x612&w=0&k=20&c=XK4wm54qQ81iA3KZ25f4U5ByUS7UuofHE4NdQopsZAc=",
                UserName = "Mickeal",
                lastName = "Anderson",
                Email = "coach06@powerzone.com",
                address = "22 Main St",
                role = "Coach",
                classes= new List<GymClass>{
                    new GymClass{
                    Id= "20",
                    name= "body building",
                    CoachName= "Mickeal Anderson",
                    day= "Sunday",
                    StartTime= "10:00",
                    EndTime= "13:30",
                    },
                    new GymClass{
                    Id = "21",
                    name= "Karate",
                    CoachName= "Mickeal Anderson",
                    day= "Sunday",
                    StartTime= "16:00",
                    EndTime= "20:00",
                    },
                    new GymClass{
                    Id= "22",
                    name= "weight loose",
                    CoachName= "Mickeal Anderson",
                    day= "Sunday",
                    StartTime= "21:00",
                    EndTime= "23:00",
                    }
                }
            }
        );
    }
}