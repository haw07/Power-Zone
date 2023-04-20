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
                gender = "F"
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
                gender = "M"
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
                gender = "F"
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
                gender = "F"
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
                gender = "M"
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
                gender = "M"
            },
            new User
            {
                Id = "7",
                UserName = "Joudy",
                lastName = "Ashkar",
                Email = "trainee01@powerzone.com",
                classes = new List<string> { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" },
                password = "joudy8",
                gender = "F"
            },
            new User
            {
                Id = "8",
                UserName = "Nour",
                lastName = "Obeid",
                Email = "trainee02@powerzone.com",
                classes = new List<string> { "14", "15", "16", "17", "18", "19", "20", "21", "22" },
                password = "Nour8",
                gender = "F"
            },
            new User
            {
                Id = "9",
                UserName = "Alex",
                lastName = "Smith",
                Email = "trainee03@powerzone.com",
                classes = new List<string> { "14" },
                password = "Alex9",
                gender = "M"
            }

        );
    }
}