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
                    { "0", 0, "10e61111-d754-4db1-91b6-892ea5797683", "owner00@powerzone.com", false, false, null, null, null, null, null, false, "30160325-9230-41b1-874e-34f6acf5d022", false, "Power", "123 Main St", null, "F", 0f, null, "Zone", 0f, 0f, 0f, "010203", 0f, "Owner", null, 0, 0f },
                    { "1", 0, "b83dc320-f59f-4f1b-ad3a-b212157afbe7", "coach01@powerzone.com", false, false, null, null, null, null, null, false, "04dc10c8-7bab-472f-89ab-1393592a715e", false, "James", "123 Main St", "9,10", "F", 0f, "https://media.istockphoto.com/id/852401732/photo/happy-personal-trainer-working-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=6OZXbwAbJndJ8kvWuusRqjgBxomisfcm8LNtDH2eurM=", "Rachel", 0f, 0f, 0f, "james1", 0f, "Coach", "7", 0, 0f },
                    { "2", 0, "e532b1e9-21f7-4b44-8cc3-a91ac89664e4", "coach02@powerzone.com", false, false, null, null, null, null, null, false, "5a895b08-1345-4a52-af17-b93288bfd88a", false, "Adam", "24 Main Street", "1,2,3,4,5,6,7", "M", 0f, "https://media.istockphoto.com/id/475495254/photo/african-american-male-trainer-with-clipboard.jpg?b=1&s=170667a&w=0&k=20&c=-PZ1ID6ZRhrPWP2r0G7ftlMjGfbrG0aItOkjrkFMQL0=", "Smith", 0f, 0f, 0f, "adam2", 0f, "Coach", "7", 0, 0f },
                    { "3", 0, "cec15439-0433-4606-b08b-669fa379a534", "coach03@powerzone.com", false, false, null, null, null, null, null, false, "0f9f3628-fc14-4ff5-8660-4052d367058f", false, "Abbey", "123 Main S", "11,12,13", "F", 0f, "https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=CrAKXWaWFyHtcSaSOE8cLHFIvuibWRiKHPOxy7eXmso=", "Mcvay", 0f, 0f, 0f, "abbey3", 0f, "Coach", "7", 0, 0f },
                    { "4", 0, "4d66242b-3b47-44fc-9081-507b02cfbf22", "coach04@powerzone.com", false, false, null, null, null, null, null, false, "849f604c-6101-4c5d-8cd1-5dc81c06a2c1", false, "Nicole", "33 Street", "14,15,16", "F", 0f, "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg?w=900", "Dahlberg", 0f, 0f, 0f, "nicole4", 0f, "Coach", "8", 0, 0f },
                    { "5", 0, "69fe94c8-6ccb-464a-909e-2f22fa237f98", "coach05@powerzone.com", false, false, null, null, null, null, null, false, "66ea1c44-f18e-47b4-88fd-f929b8b58b8e", false, "Jimmy", "32 St", "17,18,19", "M", 0f, "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png", "Pratt", 0f, 0f, 0f, "jimmy5", 0f, "Coach", "8", 0, 0f },
                    { "6", 0, "744b977a-dcb5-40cd-afa4-5e0876d12547", "coach06@powerzone.com", false, false, null, null, null, null, null, false, "5246afa3-167b-47d3-97a5-fae03ef429cb", false, "Mickeal", "22 Main St", "20,21,22", "M", 0f, "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg", "Anderson", 0f, 0f, 0f, "mickeal6", 0f, "Coach", "8", 0, 0f },
                    { "7", 0, "c1454e15-67d5-4d4c-9a71-e9d407a86de3", "trainee01@powerzone.com", false, false, null, null, null, null, null, false, "c24a8ecf-bf38-4de5-9982-0b608adfff4c", false, "Joudy", "Kalifornia 33 Street", "1,2,3,4,5,6,7,8,9,10", "F", 0f, null, "Ashkar", 0f, 0f, 0f, "joudy8", 0f, "User", null, 0, 0f },
                    { "8", 0, "1d80d757-8bc9-49dd-9847-524a219330b3", "trainee02@powerzone.com", false, false, null, null, null, null, null, false, "96674da8-2786-4dce-9981-b7b158253da8", false, "Nour", "New York City, 33 Street", "14,15,16,17,18,19,20,21,22", "F", 0f, null, "Obeid", 0f, 0f, 0f, "Nour8", 0f, "User", null, 0, 0f },
                    { "9", 0, "eb898d2d-5b6c-4238-bb1a-5f536b4f234e", "trainee03@powerzone.com", false, false, null, null, null, null, null, false, "31be0255-6c09-4413-a1e8-3fd33ff685a9", false, "Alex", "New York City, 33 Street", "14", "M", 0f, null, "Smith", 0f, 0f, 0f, "Alex9", 0f, "User", null, 0, 0f }
                });

            migrationBuilder.InsertData(
                table: "GymClasses",
                columns: new[] { "Id", "CoachName", "EndTime", "StartTime", "capacity", "day", "name" },
                values: new object[,]
                {
                    { "1", "Adam Smith", "14:00", "10:00", 5, "Monday", "weight loose" },
                    { "10", "James Rachel", "22:00", "20:30", 5, "Wednesday", "body building" },
                    { "11", "Abbey Mcvay", "16:00", "14:00", 5, "Thursday", "karate" },
                    { "12", "Abbey Mcvay", "20:00", "18:00", 5, "Thursday", "yoga" },
                    { "13", "Abbey Mcvay", "22:00", "20:00", 10, "Thursday", "yoga" },
                    { "14", "Nicole Dahlberg", "13:00", "10:00", 12, "Friday", "boxing" },
                    { "15", "Nicole Dahlberg", "18:00", "16:00", 20, "Friday", "weight loose" },
                    { "16", "Nicole Dahlberg", "22:00", "21:00", 5, "Friday", "boxing" },
                    { "17", "Jimmy Pratt", "15:30", "14:00", 5, "Saturday", "yoga" },
                    { "18", "Jimmy Pratt", "17:00", "16:00", 5, "Saturday", "yoga" },
                    { "19", "Jimmy Pratt", "20:00", "18:00", 5, "Saturday", "body building" },
                    { "2", "Adam Smith", "18:00", "16:00", 6, "Monday", "weight loose" },
                    { "20", "Mickeal Anderson", "13:30", "10:00", 10, "Sunday", "boxing" },
                    { "21", "Mickeal Anderson", "18:00", "16:00", 6, "Sunday", "karate" },
                    { "22", "Mickeal Anderson", "22:00", "21:00", 12, "Sunday", "boxing" },
                    { "3", "Adam Smith", "20:00", "18:00", 1, "Monday", "weight loose" },
                    { "4", "Adam Smith", "22:00", "20:00", 0, "Monday", "weight loose" },
                    { "5", "Adam Smith", "16:00", "14:00", 2, "Tuesday", "Karate" },
                    { "6", "Adam Smith", "20:00", "18:00", 5, "Tuesday", "weight loose" },
                    { "7", "Adam Smith", "22:00", "20:00", 5, "Tuesday", "karate" },
                    { "8", "James Rachel", "14:00", "10:00", 5, "Wednesday", "body building" },
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
