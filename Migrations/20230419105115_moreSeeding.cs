using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace power_zone.Migrations
{
    /// <inheritdoc />
    public partial class moreSeeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "3b8a8ad1-00c1-445a-9a45-242faad309fc", "ab93050c-77bf-4a19-9cc5-bc79b0468669", "james1" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "ba8aafa6-99aa-48f5-a10e-c1a68486494b", "752c01b7-f179-4db2-bfdd-83b30263ebda", "adam2" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "535ac01f-2315-4dcd-b825-553a303ff952", "c986f5a2-39a8-4d7a-bc3b-70279715d1eb", "abbey3" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "cbec3c2b-cefe-4214-aaa6-1da8df80b66e", "065bbe62-5f23-4a6c-b1d2-a9efdf399f12", "nicole4" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "090c3480-b215-485b-a875-eb9da80f625c", "49793f62-b11a-43cf-ab60-a5d88d03cbad", "jimmy5" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "cc509b99-55aa-41eb-a3f0-70e7c1981dbd", "77172b88-67ca-4644-8260-f218cf7d42c5", "mickeal6" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "7",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "2459c9e5-232b-48e7-b957-b4e57d4c2dcf", "bbe95360-2d8d-42a0-acba-17597453b132", "joudy8" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "5b066e50-5064-4fe0-9202-462294c4d14e", "ae90876d-a018-44e8-bb06-d630b62928ac", "Nour8" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "118dfeb4-45c5-4ede-999b-6d041982d12d", "6760771e-ebd5-412e-a891-f0688527c123", "Alex9" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "dd0babe5-88cf-4592-901b-402e198bbee9", "04e3bad8-2479-4a49-aca9-30b2ed375ea9", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "b04feae6-b2cd-4e6e-b304-1a6ef0bbaba0", "037c3ec1-e6e6-492d-ab7f-6a5aed734a90", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "2cab7d26-ab67-423e-b142-2f258290455f", "0f04ddab-45e2-44c6-b619-82226f4d57a5", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "d0ede575-8ac5-4b3f-8113-6d40a818b6d0", "cc7a8d8a-ab1f-4976-9eb4-5c7bd0b2c8bf", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "50ee0102-f975-4220-bd86-1fd222d44ce9", "50135075-5d64-4401-b053-ef1feeadbd57", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "ce386b39-3b38-441c-9755-949dd3e7add2", "f5c1b330-6e9d-4d3d-9ddf-9825720ed08b", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "7",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "294a0ba4-bace-4255-90b8-75617bcf6e75", "08c3d67c-8de7-43f5-ab42-de8e4ebbd3d3", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "6ec41908-3425-4756-97d5-d0e60117435d", "14281159-8b92-42ac-a71a-53e090fa8bed", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "password" },
                values: new object[] { "f72980e9-2377-4b17-aeeb-c82c10e1263e", "6fd72981-119e-45e5-91ff-38e2ab51587a", null });
        }
    }
}
