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
                name = "yoga",
                CoachName = "Adam Smith",
                day = "Monday",
                StartTime = "18:00",
                EndTime = "20:00",
                capacity = 1,
            },
            new GymClass
            {
                Id = "4",
                name = "boxing",
                CoachName = "Adam Smith",
                day = "Monday",
                StartTime = "21:00",
                EndTime = "23:00",
                capacity = 0,
            },
            new GymClass
            {
                Id = "5",
                name = "Karate",
                CoachName = "Adam Smith",
                day = "Tuesday",
                StartTime = "14:00",
                EndTime = "17:00",
                capacity = 2,
            },
            new GymClass
            {
                Id = "6",
                name = "boxing",
                CoachName = "Adam Smith",
                day = "Tuesday",
                StartTime = "18:00",
                EndTime = "20:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "7",
                name = "yoga",
                CoachName = "Adam Smith",
                day = "Tuesday",
                StartTime = "20:00",
                EndTime = "22:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "8",
                name = "weight loose",
                CoachName = "James Rachel",
                day = "Wednesday",
                StartTime = "10:00",
                EndTime = "15:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "9",
                name = "body building",
                CoachName = "James Rachel",
                day = "Wednesday",
                StartTime = "16:00",
                EndTime = "19:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "10",
                name = "yoga",
                CoachName = "James Rachel",
                day = "Wednesday",
                StartTime = "20:30",
                EndTime = "23:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "11",
                name = "weight loose",
                CoachName = "Abbey Mcvay",
                day = "Thursday",
                StartTime = "14:00",
                EndTime = "17:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "12",
                name = "boxing",
                CoachName = "Abbey Mcvay",
                day = "Thursday",
                StartTime = "18:00",
                EndTime = "22:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "13",
                name = "body building",
                CoachName = "Abbey Mcvay",
                day = "Thursday",
                StartTime = "18:00",
                EndTime = "22:00",
                capacity = 10,
            },
            new GymClass
            {
                Id = "14",
                name = "boxing",
                CoachName = "Nicole Dahlberg",
                day = "Friday",
                StartTime = "10:00",
                EndTime = "13:00",
                capacity = 12,
            },
            new GymClass
            {
                Id = "15",
                name = "body building",
                CoachName = "Nicole Dahlberg",
                day = "Friday",
                StartTime = "16:00",
                EndTime = "19:00",
                capacity = 20,
            },
            new GymClass
            {
                Id = "16",
                name = "weight loose",
                CoachName = "Nicole Dahlberg",
                day = "Friday",
                StartTime = "22:00",
                EndTime = "23:00",
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
                name = "boxing",
                day = "Saturday",
                CoachName = "Jimmy Pratt",
                StartTime = "16:00",
                EndTime = "17:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "19",
                name = "boxing",
                CoachName = "Jimmy Pratt",
                day = "Saturday",
                StartTime = "18:00",
                EndTime = "22:00",
                capacity = 5,
            },
            new GymClass
            {
                Id = "20",
                name = "body building",
                CoachName = "Mickeal Anderson",
                day = "Sunday",
                StartTime = "10:00",
                EndTime = "13:30",
                capacity = 10,
            },
            new GymClass
            {
                Id = "21",
                name = "Karate",
                CoachName = "Mickeal Anderson",
                day = "Sunday",
                StartTime = "16:00",
                EndTime = "20:00",
                capacity = 6,
            },
            new GymClass
            {
                Id = "22",
                name = "weight loose",
                CoachName = "Mickeal Anderson",
                day = "Sunday",
                StartTime = "21:00",
                EndTime = "23:00",
                capacity = 12,
            }

    );
    }
}