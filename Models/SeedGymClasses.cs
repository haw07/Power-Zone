using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace power_zone.Models;

public class SeedGymClasses : IEntityTypeConfiguration<GymClass>
{

    public void Configure(EntityTypeBuilder<GymClass> entity)
    {
        entity.HasData(
            new GymClass
            {
                Id = "1",
                name = "weight loose",
                CoachName = "Adam Smith",
                day = "Monday",
                StartTime = "10:00",
                EndTime = "14:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "2",
                name = "Karate",
                CoachName = "Adam Smith",
                day = "Monday",
                StartTime = "16:00",
                EndTime = "18:00",
                capacity = 6,
            },
            new GymClass
            {
                Id = "3",
                name = "weight loose",
                CoachName = "Adam Smith",
                day = "Monday",
                StartTime = "18:00",
                EndTime = "20:00",
                capacity = 1,
            },
            new GymClass
            {
                Id = "4",
                name = "weight loose",
                CoachName = "Adam Smith",
                day = "Monday",
                StartTime = "20:00",
                EndTime = "22:00",
                capacity = 0,
            },
            new GymClass
            {
                Id = "5",
                name = "Karate",
                CoachName = "Adam Smith",
                day = "Tuesday",
                StartTime = "14:00",
                EndTime = "16:00",
                capacity = 2,
            },
            new GymClass
            {
                Id = "6",
                name = "weight loose",
                CoachName = "Adam Smith",
                day = "Tuesday",
                StartTime = "18:00",
                EndTime = "20:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "7",
                name = "karate",
                CoachName = "Adam Smith",
                day = "Tuesday",
                StartTime = "20:00",
                EndTime = "22:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "8",
                name = "zumba",
                CoachName = "James Rachel",
                day = "Wednesday",
                StartTime = "10:00",
                EndTime = "14:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "9",
                name = "body building",
                CoachName = "James Rachel",
                day = "Wednesday",
                StartTime = "16:00",
                EndTime = "18:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "10",
                name = "body building",
                CoachName = "James Rachel",
                day = "Wednesday",
                StartTime = "20:30",
                EndTime = "22:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "11",
                name = "aerobics",
                CoachName = "Abbey Mcvay",
                day = "Thursday",
                StartTime = "14:00",
                EndTime = "16:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "12",
                name = "aerobics",
                CoachName = "Abbey Mcvay",
                day = "Thursday",
                StartTime = "18:00",
                EndTime = "20:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "13",
                name = "belly dance",
                CoachName = "Abbey Mcvay",
                day = "Thursday",
                StartTime = "20:00",
                EndTime = "22:00",
                capacity = 10,
            },
            new GymClass
            {
                Id = "14",
                name ="pilates",
                CoachName = "Nicole Dahlberg",
                day = "Friday",
                StartTime = "10:00",
                EndTime = "13:00",
                capacity = 12,
            },
            new GymClass
            {
                Id = "15",
                name = "pilates",
                CoachName = "Nicole Dahlberg",
                day = "Friday",
                StartTime = "16:00",
                EndTime = "18:00",
                capacity = 20,
            },
            new GymClass
            {
                Id = "16",
                name = "pilates",
                CoachName = "Nicole Dahlberg",
                day = "Friday",
                StartTime = "21:00",
                EndTime = "22:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "17",
                name = "yoga",
                CoachName = "Jimmy Pratt",
                day = "Saturday",
                StartTime = "14:00",
                EndTime = "15:30",
                capacity = 5,
            },
            new GymClass
            {
                Id = "18",
                name = "yoga",
                day = "Saturday",
                CoachName = "Jimmy Pratt",
                StartTime = "16:00",
                EndTime = "17:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "19",
                name = "Hiit/circuit",
                CoachName = "Jimmy Pratt",
                day = "Saturday",
                StartTime = "18:00",
                EndTime = "20:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "20",
                name = "kick boxing",
                CoachName = "Mickeal Anderson",
                day = "Sunday",
                StartTime = "10:00",
                EndTime = "13:30",
                capacity = 10,
            },
            new GymClass
            {
                Id = "21",
                name = "kick boxing",
                CoachName = "Mickeal Anderson",
                day = "Sunday",
                StartTime = "16:00",
                EndTime = "18:00",
                capacity = 6,
            },
            new GymClass
            {
                Id = "22",
                name = "kick boxing",
                CoachName = "Mickeal Anderson",
                day = "Sunday",
                StartTime = "21:00",
                EndTime = "22:00",
                capacity = 12,
            }

    );
    }
}