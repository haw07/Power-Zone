using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace power_zone.Migrations
{
    /// <inheritdoc />
    public partial class InitailCreate : Migration
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
                    { "0", 0, "70431557-8cfa-4cfe-b5a5-126cedcf2a39", "owner00@powerzone.com", false, false, null, null, null, null, null, false, "f2e5b892-53f8-4679-a49c-2e2fb7b55751", false, "Power", "123 Main St", null, "F", 0f, null, "Zone", 0f, 0f, 0f, "010203", 0f, "Owner", null, 0, 0f },
                    { "1", 0, "1ff457a7-5210-474f-b898-ff17eabf5562", "coach01@powerzone.com", false, false, null, null, null, null, null, false, "ac994fb7-11a6-4d56-b48e-746485d4bc80", false, "James", "123 Main St", "9,10", "F", 0f, "https://media.istockphoto.com/id/852401732/photo/happy-personal-trainer-working-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=6OZXbwAbJndJ8kvWuusRqjgBxomisfcm8LNtDH2eurM=", "Rachel", 0f, 0f, 0f, "james1", 0f, "Coach", "7", 0, 0f },
                    { "2", 0, "60296578-eb23-470c-a6cd-a368a091fb22", "coach02@powerzone.com", false, false, null, null, null, null, null, false, "7f627342-e1bf-4899-9d74-867b07a2851d", false, "Adam", "24 Main Street", "1,2,3,4,5,6,7", "M", 0f, "https://media.istockphoto.com/id/475495254/photo/african-american-male-trainer-with-clipboard.jpg?b=1&s=170667a&w=0&k=20&c=-PZ1ID6ZRhrPWP2r0G7ftlMjGfbrG0aItOkjrkFMQL0=", "Smith", 0f, 0f, 0f, "adam2", 0f, "Coach", "7", 0, 0f },
                    { "3", 0, "48dfb6f9-0d15-4faf-b8f3-51fc7ba0ef64", "coach03@powerzone.com", false, false, null, null, null, null, null, false, "caddcc25-d57b-4240-8750-b797fc5437e2", false, "Abbey", "123 Main S", "11,12,13", "F", 0f, "https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=CrAKXWaWFyHtcSaSOE8cLHFIvuibWRiKHPOxy7eXmso=", "Mcvay", 0f, 0f, 0f, "abbey3", 0f, "Coach", "7", 0, 0f },
                    { "4", 0, "b40973dc-6082-46c9-b889-5ae7117d4b6f", "coach04@powerzone.com", false, false, null, null, null, null, null, false, "4dc8d5f0-4cf5-49d8-af95-5420e4af3213", false, "Nicole", "33 Street", "14,15,16", "F", 0f, "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg?w=900", "Dahlberg", 0f, 0f, 0f, "nicole4", 0f, "Coach", "8", 0, 0f },
                    { "5", 0, "e83506ce-aab8-45d0-b5f8-8f73a84faf30", "coach05@powerzone.com", false, false, null, null, null, null, null, false, "3f1b0c96-5fa8-4f24-b490-987cb11fa606", false, "Jimmy", "32 St", "17,18,19", "M", 0f, "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png", "Pratt", 0f, 0f, 0f, "jimmy5", 0f, "Coach", "8", 0, 0f },
                    { "6", 0, "bbec1422-16af-4391-bf92-d06b36bf7726", "coach06@powerzone.com", false, false, null, null, null, null, null, false, "7bce2947-043b-405b-8ee1-5707b3cfb485", false, "Mickeal", "22 Main St", "20,21,22", "M", 0f, "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg", "Anderson", 0f, 0f, 0f, "mickeal6", 0f, "Coach", "8", 0, 0f },
                    { "7", 0, "e45578b9-1b79-4ab3-bfdb-91ae3be4c0bb", "trainee01@powerzone.com", false, false, null, null, null, null, null, false, "0d62dc26-fa6a-42c8-ad66-9852015ccc07", false, "Joudy", "Kalifornia 33 Street", "1,2,3,4,5,6,7,8,9,10", "F", 0f, null, "Ashkar", 0f, 0f, 0f, "joudy8", 0f, "User", null, 0, 0f },
                    { "8", 0, "9e15956a-2a12-4a43-9658-9adcc5ce4996", "trainee02@powerzone.com", false, false, null, null, null, null, null, false, "f7d76856-ed5a-4598-86ac-7330d8f2bb84", false, "Nour", "New York City, 33 Street", "14,15,16,17,18,19,20,21,22", "F", 0f, null, "Obeid", 0f, 0f, 0f, "Nour8", 0f, "User", null, 0, 0f },
                    { "9", 0, "c36cbcd1-da14-4228-befd-5fdce9847916", "trainee03@powerzone.com", false, false, null, null, null, null, null, false, "790c12de-b984-4aec-aded-0a1b51e03dc5", false, "Alex", "New York City, 33 Street", "14", "M", 0f, null, "Smith", 0f, 0f, 0f, "Alex9", 0f, "User", null, 0, 0f }
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
