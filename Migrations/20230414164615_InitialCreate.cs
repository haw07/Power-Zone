using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace power_zone.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
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
                    gender = table.Column<string>(type: "TEXT", nullable: true),
                    address = table.Column<string>(type: "TEXT", nullable: true),
                    imgURL = table.Column<string>(type: "TEXT", nullable: true),
                    progress = table.Column<float>(type: "REAL", nullable: false),
                    height = table.Column<float>(type: "REAL", nullable: false),
                    weight = table.Column<float>(type: "REAL", nullable: false),
                    max_squat = table.Column<float>(type: "REAL", nullable: false),
                    max_bench_press = table.Column<float>(type: "REAL", nullable: false),
                    max_deadlift = table.Column<float>(type: "REAL", nullable: false),
                    BMI = table.Column<float>(type: "REAL", nullable: false),
                    role = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<string>(type: "TEXT", nullable: true),
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
                    table.ForeignKey(
                        name: "FK_AspNetUsers_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    username = table.Column<string>(type: "TEXT", nullable: true),
                    date = table.Column<string>(type: "TEXT", nullable: true),
                    duration = table.Column<string>(type: "TEXT", nullable: true),
                    className = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.Id);
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
                    UserId = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GymClasses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GymClasses_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "BMI", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserId", "UserName", "address", "gender", "height", "imgURL", "lastName", "max_bench_press", "max_deadlift", "max_squat", "progress", "role", "weight" },
                values: new object[,]
                {
                    { "1391c825-ce71-476f-b11c-952abe049a50", 0, 0f, "44157cf9-04a0-46ea-b914-e3782b033435", "coach02@powerzone.com", false, false, null, null, null, null, null, false, "ed447bb8-5e07-484a-b227-5dcad682acd7", false, null, "Adam", "24 Main Street", null, 0f, "https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=", "Smith", 0f, 0f, 0f, 0f, "Coach", 0f },
                    { "4373195a-a25e-4977-9a9d-46737e5cd105", 0, 0f, "95dd1366-7842-47a2-bc30-5277ff2ed3a0", "coach03@powerzone.com", false, false, null, null, null, null, null, false, "8e349112-73d1-4867-9c49-97d0a9018da3", false, null, "Abbey", "123 Main S", null, 0f, "https://media.istockphoto.com/id/675213138/photo/smiling-trainer-holding-clipboard.jpg?s=612x612&w=0&k=20&c=irFL9mh56DGBruHtTJQtUfanzAOoQCw9CHPVEVqPKhc=", "Mcvay", 0f, 0f, 0f, 0f, "Coach", 0f },
                    { "52d31ae5-46a7-4cde-84be-5e43d766b096", 0, 0f, "469cdbe4-330c-4ef2-874c-e6e6c1342301", "coach04@powerzone.com", false, false, null, null, null, null, null, false, "657ffb08-64b8-4e06-9edf-816562a05107", false, null, "Nicole", "33 Street", null, 0f, "https://media.istockphoto.com/id/635742500/photo/personal-trainer-with-clipboard-showing-thumb-up-in-gym.jpg?s=612x612&w=0&k=20&c=g3w-6fFlo47Crqwa5NJh9ZfQf5knWlGsSJY5AAwyAf0=", "Dahlberg", 0f, 0f, 0f, 0f, "Coach", 0f },
                    { "5e46ae19-c68b-4e50-9fa6-7c412ccfd0c5", 0, 0f, "c6fa3f9d-4a39-41ef-890b-2961a3f9e07f", "coach01@powerzone.com", false, false, null, null, null, null, null, false, "4d92e08d-b1ca-4701-8b16-768b3351712a", false, null, "James", "123 Main St", null, 0f, "https://img.freepik.com/premium-photo/portrait-happy-gym-trainer-holding-clipboard_107420-30393.jpg?w=2000", "Rachel", 0f, 0f, 0f, 0f, "Coach", 0f },
                    { "7d88fb44-17d3-4121-b480-f3e803bfe3be", 0, 0f, "937a60f4-0bdd-4450-afa1-9541dd904bb1", "coach05@powerzone.com", false, false, null, null, null, null, null, false, "f9d1a13b-d293-4f86-b657-012d2928304e", false, null, "Jimmy", "32 St", null, 0f, "https://media.istockphoto.com/id/1018043738/photo/portrait-of-chinese-personal-trainer-in-gym.jpg?s=612x612&w=0&k=20&c=BpuYao5G3qr5SG7IUq15CESYHxunuvz66qfnDKJfX9s=", "Pratt", 0f, 0f, 0f, 0f, "Coach", 0f },
                    { "9c8a6337-f162-46a0-a644-c05b23669595", 0, 0f, "68aa5993-e890-456c-857b-f30690dd115f", "coach06@powerzone.com", false, false, null, null, null, null, null, false, "ddc4d113-0a5c-4545-a94f-492f49c5453b", false, null, "Mickeal", "22 Main St", null, 0f, "https://media.istockphoto.com/id/925188400/photo/happy-fitness-instructor-with-training-plan-in-a-health-club.jpg?s=612x612&w=0&k=20&c=XK4wm54qQ81iA3KZ25f4U5ByUS7UuofHE4NdQopsZAc=", "Anderson", 0f, 0f, 0f, 0f, "Coach", 0f }
                });

            migrationBuilder.InsertData(
                table: "GymClasses",
                columns: new[] { "Id", "CoachName", "EndTime", "StartTime", "UserId", "day", "name" },
                values: new object[,]
                {
                    { "1", "Adam Smith", "14:00", "10:00", null, "Monday", "weight loose" },
                    { "10", "James rachel", "23:00", "20:30", null, "Wednesday", "yoga" },
                    { "11", "Abbey Mcvay", "17:00", "14:00", null, "Thursday", "weight loose" },
                    { "12", "Abbey Mcvay", "22:00", "18:00", null, "Thursday", "boxing" },
                    { "13", "Abbey Mcvay", "22:00", "18:00", null, "Thursday", "body building" },
                    { "14", "Nicole Dahlberg", "13:00", "10:00", null, "Friday", "boxing" },
                    { "15", "Nicole Dahlberg", "19:00", "16:00", null, "Friday", "body building" },
                    { "16", "Nicole Dahlberg", "23:00", "22:00", null, "Friday", "weight loose" },
                    { "17", "Jimmy Pratt", "15:30", "14:00", null, "Saturday", "yoga" },
                    { "18", "Jimmy Pratt", "17:00", "16:00", null, "Saturday", "boxing" },
                    { "19", "Jimmy Pratt", "22:00", "18:00", null, "Saturday", "boxing" },
                    { "2", "Adam Smith", "18:00", "16:00", null, "Monday", "Karate" },
                    { "20", "Mickeal Anderson", "13:30", "10:00", null, "Sunday", "body building" },
                    { "21", "Mickeal Anderson", "20:00", "16:00", null, "Sunday", "Karate" },
                    { "22", "Mickeal Anderson", "23:00", "21:00", null, "Sunday", "weight loose" },
                    { "3", "Adam Smith", "20:00", "18:00", null, "Monday", "yoga" },
                    { "4", "Adam Smith", "23:00", "21:00", null, "Monday", "boxing" },
                    { "5", "Adam Smith", "17:00", "14:00", null, "Tuesday", "Karate" },
                    { "6", "Adam Smith", "20:00", "18:00", null, "Tuesday", "boxing" },
                    { "7", "Adam Smith", "22:00", "20:00", null, "Tuesday", "yoga" },
                    { "8", "James rachel", "15:00", "10:00", null, "Wednesday", "weight loose" },
                    { "9", "James rachel", "19:00", "16:00", null, "Wednesday", "body building" }
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
                name: "IX_AspNetUsers_UserId",
                table: "AspNetUsers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GymClasses_UserId",
                table: "GymClasses",
                column: "UserId");
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
