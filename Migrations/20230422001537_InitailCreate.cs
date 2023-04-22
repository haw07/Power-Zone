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
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "address", "classes", "gender", "height", "lastName", "max_bench_press", "max_deadlift", "max_squat", "password", "progress", "role", "trainees", "verificationPin", "weight" },
                values: new object[,]
                {
                    { "0", 0, "f2946a8f-fb18-4b7a-b9b9-b6aad12b206b", "owner00@powerzone.com", false, false, null, null, null, null, null, false, "8f13620e-8388-423b-9b07-1d7a78fce8eb", false, "Power", "123 Main St", null, "F", 0f, "Zone", 0f, 0f, 0f, "010203", 0f, "Owner", null, 0, 0f },
                    { "1", 0, "fbb0d0b3-151c-44b3-881e-7186f24d0887", "coach01@powerzone.com", false, false, null, null, null, null, null, false, "d34e2b69-d02a-4b6f-8410-26ae05816492", false, "James", "123 Main St", "9,10", "F", 0f, "Rachel", 0f, 0f, 0f, "james1", 0f, "Coach", "7", 0, 0f },
                    { "2", 0, "4a51eabf-7bbe-4a79-aecd-123e1816adda", "coach02@powerzone.com", false, false, null, null, null, null, null, false, "b1c32d7a-19ee-4f5e-a0e7-9ddab446347e", false, "Adam", "24 Main Street", "1,2,3,4,5,6,7", "M", 0f, "Smith", 0f, 0f, 0f, "adam2", 0f, "Coach", "7", 0, 0f },
                    { "3", 0, "08021701-4e04-4335-af64-58f20eba8d95", "coach03@powerzone.com", false, false, null, null, null, null, null, false, "2ce0401e-7113-43c0-9af2-19aa2f9bc78f", false, "Abbey", "123 Main S", "11,12,13", "F", 0f, "Mcvay", 0f, 0f, 0f, "abbey3", 0f, "Coach", "7", 0, 0f },
                    { "4", 0, "1b4fc407-06c3-483a-ab1b-b4362037ddb6", "coach04@powerzone.com", false, false, null, null, null, null, null, false, "246a5974-af70-42bd-81a1-9612c84593c4", false, "Nicole", "33 Street", "14,15,16", "F", 0f, "Dahlberg", 0f, 0f, 0f, "nicole4", 0f, "Coach", "8", 0, 0f },
                    { "5", 0, "1cb0f34a-2a11-4da3-829a-4cea134a8ccb", "coach05@powerzone.com", false, false, null, null, null, null, null, false, "b87c3123-b437-4031-ae09-9826f5245d5b", false, "Jimmy", "32 St", "17,18,19", "M", 0f, "Pratt", 0f, 0f, 0f, "jimmy5", 0f, "Coach", "8", 0, 0f },
                    { "6", 0, "628c5031-b7a8-4f70-a677-5576a06d8733", "coach06@powerzone.com", false, false, null, null, null, null, null, false, "2c198fe3-70d2-4475-aa1e-280c659691a3", false, "Mickeal", "22 Main St", "20,21,22", "M", 0f, "Anderson", 0f, 0f, 0f, "mickeal6", 0f, "Coach", "8", 0, 0f },
                    { "7", 0, "5a20dc9f-9413-4c28-af89-2f83d3740ca6", "trainee01@powerzone.com", false, false, null, null, null, null, null, false, "4860f57c-63e2-4fef-ba0f-433d3f22ce2f", false, "Joudy", "Kalifornia 33 Street", "1,2,3,4,5,6,7,8,9,10", "F", 0f, "Ashkar", 0f, 0f, 0f, "joudy8", 0f, "User", null, 0, 0f },
                    { "8", 0, "2c9af6f3-3d42-47ed-adac-b697fee09e27", "trainee02@powerzone.com", false, false, null, null, null, null, null, false, "759b10ad-e98e-4501-accd-c39fb0f78652", false, "Nour", "New York City, 33 Street", "14,15,16,17,18,19,20,21,22", "F", 0f, "Obeid", 0f, 0f, 0f, "Nour8", 0f, "User", null, 0, 0f },
                    { "9", 0, "0748e297-ade2-4317-a8c2-3a7ec0f34b71", "trainee03@powerzone.com", false, false, null, null, null, null, null, false, "6f875574-749b-4fff-8362-afa17686d469", false, "Alex", "New York City, 33 Street", "14", "M", 0f, "Smith", 0f, 0f, 0f, "Alex9", 0f, "User", null, 0, 0f }
                });

            migrationBuilder.InsertData(
                table: "GymClasses",
                columns: new[] { "Id", "CoachName", "EndTime", "StartTime", "capacity", "day", "name" },
                values: new object[,]
                {
                    { "1", "Adam Smith", "14:00", "10:00", 5, "Monday", "weight loose" },
                    { "10", "James Rachel", "22:00", "20:30", 5, "Wednesday", "yoga" },
                    { "11", "Abbey Mcvay", "16:00", "14:00", 5, "Thursday", "weight loose" },
                    { "12", "Abbey Mcvay", "20:00", "18:00", 5, "Thursday", "boxing" },
                    { "13", "Abbey Mcvay", "22:00", "20:00", 10, "Thursday", "body building" },
                    { "14", "Nicole Dahlberg", "13:00", "10:00", 12, "Friday", "boxing" },
                    { "15", "Nicole Dahlberg", "18:00", "16:00", 20, "Friday", "body building" },
                    { "16", "Nicole Dahlberg", "22:00", "21:00", 5, "Friday", "weight loose" },
                    { "17", "Jimmy Pratt", "15:30", "14:00", 5, "Saturday", "yoga" },
                    { "18", "Jimmy Pratt", "17:00", "16:00", 5, "Saturday", "boxing" },
                    { "19", "Jimmy Pratt", "20:00", "18:00", 5, "Saturday", "boxing" },
                    { "2", "Adam Smith", "18:00", "16:00", 6, "Monday", "Karate" },
                    { "20", "Mickeal Anderson", "13:30", "10:00", 10, "Sunday", "body building" },
                    { "21", "Mickeal Anderson", "18:00", "16:00", 6, "Sunday", "Karate" },
                    { "22", "Mickeal Anderson", "22:00", "21:00", 12, "Sunday", "weight loose" },
                    { "3", "Adam Smith", "20:00", "18:00", 1, "Monday", "yoga" },
                    { "4", "Adam Smith", "22:00", "20:00", 0, "Monday", "boxing" },
                    { "5", "Adam Smith", "16:00", "14:00", 2, "Tuesday", "Karate" },
                    { "6", "Adam Smith", "20:00", "18:00", 5, "Tuesday", "boxing" },
                    { "7", "Adam Smith", "22:00", "20:00", 5, "Tuesday", "yoga" },
                    { "8", "James Rachel", "14:00", "10:00", 5, "Wednesday", "weight loose" },
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
