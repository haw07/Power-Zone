using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PowerZone.Migrations
{
    /// <inheritdoc />
    public partial class Completedataseeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "password",
                table: "Coaches",
                newName: "role");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Coaches",
                newName: "lastName");

            migrationBuilder.RenameColumn(
                name: "imgURL",
                table: "Coaches",
                newName: "img");

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "GymClasses",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "Coaches",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "firstName",
                table: "Coaches",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "Bookings",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "imgURL",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "address", "imgURL" },
                values: new object[] { "900d243b-9ed9-408b-816c-71c1c405fc7e", "79d3c2c8-8043-4a30-88c8-5493a1128f05", null, null });

            migrationBuilder.InsertData(
                table: "Coaches",
                columns: new[] { "Id", "email", "firstName", "img", "lastName", "role" },
                values: new object[,]
                {
                    { "1", "coach01@powerzone.com", "James", "https://img.freepik.com/premium-photo/portrait-happy-gym-trainer-holding-clipboard_107420-30393.jpg?w=2000", "Rachel", "Gym Trainer" },
                    { "2", "coach02@powerzone.com", "Adam", "https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=", "Smith", "Gym Trainer" },
                    { "3", "coach03@powerzone.com", "Abbey", "https://media.istockphoto.com/id/675213138/photo/smiling-trainer-holding-clipboard.jpg?s=612x612&w=0&k=20&c=irFL9mh56DGBruHtTJQtUfanzAOoQCw9CHPVEVqPKhc=", "Mcvay", "Gym Trainer" },
                    { "4", "coach04@powerzone.com", "Nicole", "https://media.istockphoto.com/id/635742500/photo/personal-trainer-with-clipboard-showing-thumb-up-in-gym.jpg?s=612x612&w=0&k=20&c=g3w-6fFlo47Crqwa5NJh9ZfQf5knWlGsSJY5AAwyAf0=", "Dahlberg", "Gym Trainer" },
                    { "5", "coach05@powerzone.com", "Jimmy", "https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=", "Pratt", "Gym Trainer" },
                    { "6", "coach06@powerzone.com", "Mickeal", "https://media.istockphoto.com/id/925188400/photo/happy-fitness-instructor-with-training-plan-in-a-health-club.jpg?s=612x612&w=0&k=20&c=XK4wm54qQ81iA3KZ25f4U5ByUS7UuofHE4NdQopsZAc=", "Anderson", "Gym Trainer" }
                });

            migrationBuilder.InsertData(
                table: "GymClasses",
                columns: new[] { "Id", "CoachName", "EndTime", "StartTime", "day", "name" },
                values: new object[,]
                {
                    { "1", "Adam Smith", "14:00", "10:00", "Monday", "weight loose" },
                    { "10", "James rachel", "23:00", "20:30", "Wednesday", "yoga" },
                    { "11", "Abbey Mcvay", "17:00", "14:00", "Thursday", "weight loose" },
                    { "12", "Abbey Mcvay", "22:00", "18:00", "Thursday", "fitness" },
                    { "13", "Abbey Mcvay", "22:00", "18:00", "Thursday", "fitness" },
                    { "14", "Nicole Dahlberg", "13:00", "10:00", "Friday", "cardio" },
                    { "15", "Nicole Dahlberg", "19:00", "16:00", "Friday", "body building" },
                    { "16", "Nicole Dahlberg", "23:00", "22:00", "Friday", "weight loose" },
                    { "17", "Jimmy Pratt", "15:30", "14:00", "Saturday", "yoga" },
                    { "18", "Jimmy Pratt", "17:00", "16:00", "Saturday", "boxing" },
                    { "19", "Jimmy Pratt", "22:00", "18:00", "Saturday", "boxing" },
                    { "2", "Adam Smith", "18:00", "16:00", "Monday", "cardio" },
                    { "20", "Mickeal Anderson", "13:30", "10:00", "Sunday", "cardio" },
                    { "21", "Mickeal Anderson", "20:00", "16:00", "Sunday", "Karate" },
                    { "22", "Mickeal Anderson", "23:00", "21:00", "Sunday", "weight loose" },
                    { "3", "Adam Smith", "20:00", "18:00", "Monday", "yoga" },
                    { "4", "Adam Smith", "23:00", "21:00", "Monday", "cardio" },
                    { "5", "Adam Smith", "17:00", "14:00", "Tuesday", "cardio" },
                    { "6", "Adam Smith", "20:00", "18:00", "Tuesday", "boxing" },
                    { "7", "Adam Smith", "22:00", "20:00", "Tuesday", "yoga" },
                    { "8", "James rachel", "15:00", "10:00", "Wednesday", "weight loose" },
                    { "9", "James rachel", "19:00", "16:00", "Wednesday", "body building" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Coaches",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "Coaches",
                keyColumn: "Id",
                keyValue: "2");

            migrationBuilder.DeleteData(
                table: "Coaches",
                keyColumn: "Id",
                keyValue: "3");

            migrationBuilder.DeleteData(
                table: "Coaches",
                keyColumn: "Id",
                keyValue: "4");

            migrationBuilder.DeleteData(
                table: "Coaches",
                keyColumn: "Id",
                keyValue: "5");

            migrationBuilder.DeleteData(
                table: "Coaches",
                keyColumn: "Id",
                keyValue: "6");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "10");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "11");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "12");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "13");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "14");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "15");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "16");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "17");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "18");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "19");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "2");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "20");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "21");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "22");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "3");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "4");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "5");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "6");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "7");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "8");

            migrationBuilder.DeleteData(
                table: "GymClasses",
                keyColumn: "Id",
                keyValue: "9");

            migrationBuilder.DropColumn(
                name: "firstName",
                table: "Coaches");

            migrationBuilder.DropColumn(
                name: "address",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "imgURL",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "role",
                table: "Coaches",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "lastName",
                table: "Coaches",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "img",
                table: "Coaches",
                newName: "imgURL");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "GymClasses",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Coaches",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Bookings",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "de2c2c69-5730-4c07-8bad-d16a0c0605eb", "e6ca5eb0-c814-458e-9303-83b5cd4890b8" });
        }
    }
}
