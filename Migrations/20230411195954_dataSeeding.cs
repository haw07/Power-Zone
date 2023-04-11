using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PowerZone.Migrations
{
    /// <inheritdoc />
    public partial class dataSeeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "gender", "lastName" },
                values: new object[] { "1", 0, "de2c2c69-5730-4c07-8bad-d16a0c0605eb", null, false, false, null, null, null, "123", null, false, "e6ca5eb0-c814-458e-9303-83b5cd4890b8", false, "Joudy", "F", "Al Ashkar" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1");
        }
    }
}
