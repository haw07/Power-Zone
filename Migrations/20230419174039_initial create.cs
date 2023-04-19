using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace power_zone.Migrations
{
    /// <inheritdoc />
    public partial class initialcreate : Migration
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
                    imgURL = table.Column<string>(type: "TEXT", nullable: true),
                    password = table.Column<string>(type: "TEXT", nullable: true),
                    progress = table.Column<float>(type: "REAL", nullable: false),
                    height = table.Column<float>(type: "REAL", nullable: false),
                    weight = table.Column<float>(type: "REAL", nullable: false),
                    max_squat = table.Column<float>(type: "REAL", nullable: false),
                    max_bench_press = table.Column<float>(type: "REAL", nullable: false),
                    max_deadlift = table.Column<float>(type: "REAL", nullable: false),
                    BMI = table.Column<float>(type: "REAL", nullable: false),
                    classes = table.Column<string>(type: "TEXT", nullable: true),
                    role = table.Column<string>(type: "TEXT", nullable: true),
                    trainees = table.Column<string>(type: "TEXT", nullable: true),
                    verificationPin = table.Column<int>(type: "INTEGER", nullable: false),
                    gender = table.Column<string>(type: "TEXT", nullable: true),
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
                    StartTime = table.Column<string>(type: "TEXT", nullable: true),
                    EndTime = table.Column<string>(type: "TEXT", nullable: true),
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
                columns: new[] { "Id", "AccessFailedCount", "BMI", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "address", "classes", "gender", "height", "imgURL", "lastName", "max_bench_press", "max_deadlift", "max_squat", "password", "progress", "role", "trainees", "verificationPin", "weight" },
                values: new object[,]
                {
                    { "1", 0, 0f, "00b9cde8-53e3-4803-8326-c8f1d60292fa", "coach01@powerzone.com", false, false, null, null, null, null, null, false, "466ccbae-6d63-473a-8201-99765d8466a3", false, "James", "123 Main St", "9,10", "F", 0f, "https://img.freepik.com/premium-photo/portrait-happy-gym-trainer-holding-clipboard_107420-30393.jpg?w=2000", "Rachel", 0f, 0f, 0f, "james1", 0f, "Coach", "7", 0, 0f },
                    { "2", 0, 0f, "151678d3-092f-4b1a-a36c-fb7daac08887", "coach02@powerzone.com", false, false, null, null, null, null, null, false, "18fe7167-be18-4e66-9f3a-96a2b1f921a5", false, "Adam", "24 Main Street", "1,2,3,4,5,6,7", "M", 0f, "https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=", "Smith", 0f, 0f, 0f, "adam2", 0f, "Coach", "7", 0, 0f },
                    { "3", 0, 0f, "89d3f0f3-76b0-4270-80c6-41eaaf353353", "coach03@powerzone.com", false, false, null, null, null, null, null, false, "df2888bd-f1fc-4b72-bafa-07ab9ab7e543", false, "Abbey", "123 Main S", "11,12,13", "F", 0f, "https://media.istockphoto.com/id/675213138/photo/smiling-trainer-holding-clipboard.jpg?s=612x612&w=0&k=20&c=irFL9mh56DGBruHtTJQtUfanzAOoQCw9CHPVEVqPKhc=", "Mcvay", 0f, 0f, 0f, "abbey3", 0f, "Coach", "7", 0, 0f },
                    { "4", 0, 0f, "c64f43fd-f8b4-40fb-85d7-c59ff609faae", "coach04@powerzone.com", false, false, null, null, null, null, null, false, "40ba14b5-4a91-42d6-8940-847a147633e7", false, "Nicole", "33 Street", "14,15,16", "F", 0f, "https://media.istockphoto.com/id/635742500/photo/personal-trainer-with-clipboard-showing-thumb-up-in-gym.jpg?s=612x612&w=0&k=20&c=g3w-6fFlo47Crqwa5NJh9ZfQf5knWlGsSJY5AAwyAf0=", "Dahlberg", 0f, 0f, 0f, "nicole4", 0f, "Coach", "8", 0, 0f },
                    { "5", 0, 0f, "e0874681-9fb7-4787-965a-f92ace3dd50c", "coach05@powerzone.com", false, false, null, null, null, null, null, false, "79ac6638-fd53-45e3-a3cc-d75bec6a1929", false, "Jimmy", "32 St", "17,18,19", "M", 0f, "https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=", "Pratt", 0f, 0f, 0f, "jimmy5", 0f, "Coach", "8", 0, 0f },
                    { "6", 0, 0f, "e41d0370-d611-4ea5-b7b6-9b58587978ec", "coach06@powerzone.com", false, false, null, null, null, null, null, false, "9c9bca56-1121-47a9-a478-d5a2c8a1ff7b", false, "Mickeal", "22 Main St", "20,21,22", "M", 0f, "https://media.istockphoto.com/id/925188400/photo/happy-fitness-instructor-with-training-plan-in-a-health-club.jpg?s=612x612&w=0&k=20&c=XK4wm54qQ81iA3KZ25f4U5ByUS7UuofHE4NdQopsZAc=", "Anderson", 0f, 0f, 0f, "mickeal6", 0f, "Coach", "8", 0, 0f },
                    { "7", 0, 0f, "aa715026-8c01-45eb-91fb-111950f41f53", "trainee01@powerzone.com", false, false, null, null, null, null, null, false, "537c445f-37c4-4e2e-b51e-48a167fdcb6f", false, "Joudy", null, "1,2,3,4,5,6,7,8,9,10", "F", 0f, null, "Ashkar", 0f, 0f, 0f, "joudy8", 0f, null, null, 0, 0f },
                    { "8", 0, 0f, "ce15139e-03e4-4e07-b535-6ea4e3862820", "trainee02@powerzone.com", false, false, null, null, null, null, null, false, "dba2759d-ef4f-44a5-9454-5fc48be71d5d", false, "Nour", null, "14,15,16,17,18,19,20,21,22", "F", 0f, null, "Obeid", 0f, 0f, 0f, "Nour8", 0f, null, null, 0, 0f },
                    { "9", 0, 0f, "c1007f4e-a9b7-4c63-874d-8494e2972279", "trainee03@powerzone.com", false, false, null, null, null, null, null, false, "91251c12-304a-49ef-904f-69c8a4072b16", false, "Alex", null, "14", "M", 0f, null, "Smith", 0f, 0f, 0f, "Alex9", 0f, null, null, 0, 0f }
                });

            migrationBuilder.InsertData(
                table: "GymClasses",
                columns: new[] { "Id", "CoachName", "EndTime", "StartTime", "capacity", "day", "name" },
                values: new object[,]
                {
                    { "1", "Adam Smith", "14:00", "10:00", 5, "Monday", "weight loose" },
                    { "10", "James Rachel", "23:00", "20:30", 5, "Wednesday", "yoga" },
                    { "11", "Abbey Mcvay", "17:00", "14:00", 5, "Thursday", "weight loose" },
                    { "12", "Abbey Mcvay", "22:00", "18:00", 5, "Thursday", "boxing" },
                    { "13", "Abbey Mcvay", "22:00", "18:00", 10, "Thursday", "body building" },
                    { "14", "Nicole Dahlberg", "13:00", "10:00", 12, "Friday", "boxing" },
                    { "15", "Nicole Dahlberg", "19:00", "16:00", 20, "Friday", "body building" },
                    { "16", "Nicole Dahlberg", "23:00", "22:00", 5, "Friday", "weight loose" },
                    { "17", "Jimmy Pratt", "15:30", "14:00", 5, "Saturday", "yoga" },
                    { "18", "Jimmy Pratt", "17:00", "16:00", 5, "Saturday", "boxing" },
                    { "19", "Jimmy Pratt", "22:00", "18:00", 5, "Saturday", "boxing" },
                    { "2", "Adam Smith", "18:00", "16:00", 6, "Monday", "Karate" },
                    { "20", "Mickeal Anderson", "13:30", "10:00", 10, "Sunday", "body building" },
                    { "21", "Mickeal Anderson", "20:00", "16:00", 6, "Sunday", "Karate" },
                    { "22", "Mickeal Anderson", "23:00", "21:00", 12, "Sunday", "weight loose" },
                    { "3", "Adam Smith", "20:00", "18:00", 1, "Monday", "yoga" },
                    { "4", "Adam Smith", "23:00", "21:00", 0, "Monday", "boxing" },
                    { "5", "Adam Smith", "17:00", "14:00", 2, "Tuesday", "Karate" },
                    { "6", "Adam Smith", "20:00", "18:00", 5, "Tuesday", "boxing" },
                    { "7", "Adam Smith", "22:00", "20:00", 5, "Tuesday", "yoga" },
                    { "8", "James Rachel", "15:00", "10:00", 5, "Wednesday", "weight loose" },
                    { "9", "James Rachel", "19:00", "16:00", 5, "Wednesday", "body building" }
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
