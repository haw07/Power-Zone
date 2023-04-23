using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace power_zone.Migrations
{
    /// <inheritdoc />
    public partial class initialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    lastName = table.Column<string>(type: "TEXT", nullable: true),
                    address = table.Column<string>(type: "TEXT", nullable: true),
                    password = table.Column<string>(type: "TEXT", nullable: true),
                    progress = table.Column<float>(type: "REAL", nullable: false),
                    height = table.Column<float>(type: "REAL", nullable: false),
                    weight = table.Column<float>(type: "REAL", nullable: false),
                    max_squat = table.Column<float>(type: "REAL", nullable: false),
                    max_bench_press = table.Column<float>(type: "REAL", nullable: false),
                    max_deadlift = table.Column<float>(type: "REAL", nullable: false),
                    classes = table.Column<string>(type: "TEXT", nullable: true),
                    role = table.Column<string>(type: "TEXT", nullable: true),
                    trainees = table.Column<string>(type: "TEXT", nullable: true),
                    verificationPin = table.Column<int>(type: "INTEGER", nullable: false),
                    gender = table.Column<string>(type: "TEXT", nullable: true),
                    imgURL = table.Column<string>(type: "TEXT", nullable: true),
                    UserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: true),
                    SecurityStamp = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    userName = table.Column<string>(type: "TEXT", nullable: true),
                    coachName = table.Column<string>(type: "TEXT", nullable: true),
                    day = table.Column<string>(type: "TEXT", nullable: true),
                    startTime = table.Column<string>(type: "TEXT", nullable: true),
                    endTime = table.Column<string>(type: "TEXT", nullable: true),
                    className = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GymClasses",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    name = table.Column<string>(type: "TEXT", nullable: true),
                    CoachName = table.Column<string>(type: "TEXT", nullable: true),
                    StartTime = table.Column<string>(type: "TEXT", nullable: false),
                    EndTime = table.Column<string>(type: "TEXT", nullable: false),
                    day = table.Column<string>(type: "TEXT", nullable: true),
                    capacity = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GymClasses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoleId = table.Column<string>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderKey = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    RoleId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Value = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "address", "classes", "gender", "height", "imgURL", "lastName", "max_bench_press", "max_deadlift", "max_squat", "password", "progress", "role", "trainees", "verificationPin", "weight" },
                values: new object[,]
                {
                    { "0", 0, "a85ff42e-d636-4418-a5a5-a966bd7303c0", "owner00@powerzone.com", false, false, null, null, null, null, null, false, "ee3cdb8a-b7e8-45c9-b90d-671cdcdf3ef2", false, "Power", "123 Main St", null, "F", 0f, null, "Zone", 0f, 0f, 0f, "010203", 0f, "Owner", null, 0, 0f },
                    { "1", 0, "0fbcb473-82b0-41ce-aa98-bc542b5a3050", "coach01@powerzone.com", false, false, null, null, null, null, null, false, "3074d69f-7134-40fe-a475-db325b8aab13", false, "James", "123 Main St", "9,10", "F", 0f, "https://media.istockphoto.com/id/852401732/photo/happy-personal-trainer-working-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=6OZXbwAbJndJ8kvWuusRqjgBxomisfcm8LNtDH2eurM=", "Rachel", 0f, 0f, 0f, "james1", 0f, "Coach", "7", 0, 0f },
                    { "2", 0, "c5ae2efb-7f16-426f-af52-e7ebcd623ddb", "coach02@powerzone.com", false, false, null, null, null, null, null, false, "87111818-1475-459a-bcb3-201227b07517", false, "Adam", "24 Main Street", "1,2,3,4,5,6,7", "M", 0f, "https://media.istockphoto.com/id/475495254/photo/african-american-male-trainer-with-clipboard.jpg?b=1&s=170667a&w=0&k=20&c=-PZ1ID6ZRhrPWP2r0G7ftlMjGfbrG0aItOkjrkFMQL0=", "Smith", 0f, 0f, 0f, "adam2", 0f, "Coach", "7", 0, 0f },
                    { "3", 0, "f429d738-3162-478d-b73c-d332251258b1", "coach03@powerzone.com", false, false, null, null, null, null, null, false, "d91e0008-067e-4a82-9a57-ec6943d3e087", false, "Abbey", "123 Main S", "11,12,13", "F", 0f, "https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=CrAKXWaWFyHtcSaSOE8cLHFIvuibWRiKHPOxy7eXmso=", "Mcvay", 0f, 0f, 0f, "abbey3", 0f, "Coach", "7", 0, 0f },
                    { "4", 0, "e57ee029-bf27-4d77-afd1-38f02c93d0be", "coach04@powerzone.com", false, false, null, null, null, null, null, false, "288f1f8c-b6b0-4635-bdf1-e1549b1522b1", false, "Nicole", "33 Street", "14,15,16", "F", 0f, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fyoung-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_20203864.htm&psig=AOvVaw0fR5XeA3TLBTRNOvNyOTqV&ust=1682289247307000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCpgPvFvv4CFQAAAAAdAAAAABAE", "Dahlberg", 0f, 0f, 0f, "nicole4", 0f, "Coach", "8", 0, 0f },
                    { "5", 0, "5267035f-8d9a-4206-946d-5f9b5c526283", "coach05@powerzone.com", false, false, null, null, null, null, null, false, "388a3115-6221-408f-964c-4c3fb9f3a6c1", false, "Jimmy", "32 St", "17,18,19", "M", 0f, "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png", "Pratt", 0f, 0f, 0f, "jimmy5", 0f, "Coach", "8", 0, 0f },
                    { "6", 0, "8f85d48f-8688-4ba5-baad-afd4bd7d92b2", "coach06@powerzone.com", false, false, null, null, null, null, null, false, "735a3a11-582e-42c9-b05c-60d6d71242fe", false, "Mickeal", "22 Main St", "20,21,22", "M", 0f, "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg", "Anderson", 0f, 0f, 0f, "mickeal6", 0f, "Coach", "8", 0, 0f },
                    { "7", 0, "58062d75-7c0f-4daf-8d8a-5c0b7c0b62fd", "trainee01@powerzone.com", false, false, null, null, null, null, null, false, "b718961f-1d1f-433c-9ccc-bcb9da69a326", false, "Joudy", "Kalifornia 33 Street", "1,2,3,4,5,6,7,8,9,10", "F", 0f, null, "Ashkar", 0f, 0f, 0f, "joudy8", 0f, "User", null, 0, 0f },
                    { "8", 0, "1dfd5416-9743-4c49-874e-b9db2cbc1f8d", "trainee02@powerzone.com", false, false, null, null, null, null, null, false, "f4537dd1-a044-401a-841a-717a73749231", false, "Nour", "New York City, 33 Street", "14,15,16,17,18,19,20,21,22", "F", 0f, null, "Obeid", 0f, 0f, 0f, "Nour8", 0f, "User", null, 0, 0f },
                    { "9", 0, "26de7adf-716e-4e7f-83c9-f598fd5c2b6f", "trainee03@powerzone.com", false, false, null, null, null, null, null, false, "2bf7d77a-e709-45f2-bf0d-c5f247d840f7", false, "Alex", "New York City, 33 Street", "14", "M", 0f, null, "Smith", 0f, 0f, 0f, "Alex9", 0f, "User", null, 0, 0f }
                });

            migrationBuilder.InsertData(
                table: "GymClasses",
                columns: new[] { "Id", "CoachName", "EndTime", "StartTime", "capacity", "day", "name" },
                values: new object[,]
                {
                    { "1", "Adam Smith", "14:00", "10:00", 5, "Monday", "weight loose" },
                    { "10", "James Rachel", "22:00", "20:30", 5, "Wednesday", "body building" },
                    { "11", "Abbey Mcvay", "16:00", "14:00", 5, "Thursday", "aerobics" },
                    { "12", "Abbey Mcvay", "20:00", "18:00", 5, "Thursday", "aerobics" },
                    { "13", "Abbey Mcvay", "22:00", "20:00", 10, "Thursday", "belly dance" },
                    { "14", "Nicole Dahlberg", "13:00", "10:00", 12, "Friday", "pilates" },
                    { "15", "Nicole Dahlberg", "18:00", "16:00", 20, "Friday", "pilates" },
                    { "16", "Nicole Dahlberg", "22:00", "21:00", 5, "Friday", "pilates" },
                    { "17", "Jimmy Pratt", "15:30", "14:00", 5, "Saturday", "yoga" },
                    { "18", "Jimmy Pratt", "17:00", "16:00", 5, "Saturday", "yoga" },
                    { "19", "Jimmy Pratt", "20:00", "18:00", 5, "Saturday", "Hiit/circuit" },
                    { "2", "Adam Smith", "18:00", "16:00", 6, "Monday", "Karate" },
                    { "20", "Mickeal Anderson", "13:30", "10:00", 10, "Sunday", "kick boxing" },
                    { "21", "Mickeal Anderson", "18:00", "16:00", 6, "Sunday", "kick boxing" },
                    { "22", "Mickeal Anderson", "22:00", "21:00", 12, "Sunday", "kick boxing" },
                    { "3", "Adam Smith", "20:00", "18:00", 1, "Monday", "weight loose" },
                    { "4", "Adam Smith", "22:00", "20:00", 0, "Monday", "weight loose" },
                    { "5", "Adam Smith", "16:00", "14:00", 2, "Tuesday", "Karate" },
                    { "6", "Adam Smith", "20:00", "18:00", 5, "Tuesday", "weight loose" },
                    { "7", "Adam Smith", "22:00", "20:00", 5, "Tuesday", "karate" },
                    { "8", "James Rachel", "14:00", "10:00", 5, "Wednesday", "zumba" },
                    { "9", "James Rachel", "18:00", "16:00", 5, "Wednesday", "body building" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Bookings");

            migrationBuilder.DropTable(
                name: "GymClasses");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
