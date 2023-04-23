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
                Id = "0",
                UserName = "Power",
                lastName = "Zone",
                Email = "owner00@powerzone.com",
                address = "123 Main St",
                role = "Owner",
                password = "010203",
                gender = "F"
            },
            new User
            {
                Id = "1",
                UserName = "James",
                lastName = "Rachel",
                Email = "coach01@powerzone.com",
                address = "123 Main St",
                role = "Coach",
                classes = new List<string> { "9", "10" },
                trainees = new List<string> { "7" },
                password = "james1",
                gender = "F", 
                imgURL = "https://media.istockphoto.com/id/852401732/photo/happy-personal-trainer-working-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=6OZXbwAbJndJ8kvWuusRqjgBxomisfcm8LNtDH2eurM="
            },
            new User
            {
                Id = "2",
                UserName = "Adam",
                lastName = "Smith",
                Email = "coach02@powerzone.com",
                address = "24 Main Street",
                role = "Coach",
                classes = new List<string> { "1", "2", "3", "4", "5", "6", "7" },
                trainees = new List<string> { "7" },
                password = "adam2",
                gender = "M",
                imgURL= "https://media.istockphoto.com/id/475495254/photo/african-american-male-trainer-with-clipboard.jpg?b=1&s=170667a&w=0&k=20&c=-PZ1ID6ZRhrPWP2r0G7ftlMjGfbrG0aItOkjrkFMQL0="
            },
            new User
            {
                Id = "3",
                UserName = "Abbey",
                lastName = "Mcvay",
                Email = "coach03@powerzone.com",
                address = "123 Main S",
                role = "Coach",
                classes = new List<string> { "11", "12", "13" },
                trainees = new List<string> { "7" },
                password = "abbey3",
                gender = "F",
                imgURL="https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=CrAKXWaWFyHtcSaSOE8cLHFIvuibWRiKHPOxy7eXmso="
            },
            new User
            {
                Id = "4",
                UserName = "Nicole",
                lastName = "Dahlberg",
                Email = "coach04@powerzone.com",
                address = "33 Street",
                role = "Coach",
                classes = new List<string> { "14", "15", "16" },
                trainees = new List<string> { "8" },
                password = "nicole4",
                gender = "F",
                imgURL="https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg?w=900"
            },
            new User
            {
                Id = "5",
                UserName = "Jimmy",
                lastName = "Pratt",
                Email = "coach05@powerzone.com",
                address = "32 St",
                role = "Coach",
                classes = new List<string> { "17", "18", "19" },
                trainees = new List<string> { "8" },
                password = "jimmy5",
                gender = "M",
                imgURL="https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png"
            },
            new User
            {
                Id = "6",
                UserName = "Mickeal",
                lastName = "Anderson",
                Email = "coach06@powerzone.com",
                address = "22 Main St",
                role = "Coach",
                classes = new List<string> { "20", "21", "22" },
                trainees = new List<string> { "8" },
                password = "mickeal6",
                gender = "M",
                imgURL="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg"
            },
            new User
            {
                Id = "7",
                UserName = "Joudy",
                lastName = "Ashkar",
                Email = "trainee01@powerzone.com",
                classes = new List<string> { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" },
                password = "joudy8",
                role = "User",
                gender = "F",
                address = "Kalifornia 33 Street",
            },
            new User
            {
                Id = "8",
                UserName = "Nour",
                lastName = "Obeid",
                Email = "trainee02@powerzone.com",
                classes = new List<string> { "14", "15", "16", "17", "18", "19", "20", "21", "22" },
                password = "Nour8",
                role = "User",
                gender = "F",
                address = "New York City, 33 Street",
            },
            new User
            {
                Id = "9",
                UserName = "Alex",
                lastName = "Smith",
                Email = "trainee03@powerzone.com",
                classes = new List<string> { "14" },
                password = "Alex9",
                role = "User",
                gender = "M",
                address = "New York City, 33 Street",
            }

        );
    }
}