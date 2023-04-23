using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace power_zone.Migrations
{
    /// <inheritdoc />
    public partial class fixedSeeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "27e8c2ae-30a5-4df1-95c1-0a70a6cd4055", "66d09a7f-59d0-40f1-9b9e-77b7668128ab" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "b1a12970-ae15-4005-8e51-1f500e39ba48", "14eb0825-9f44-4e59-9d35-1a3cc12e23f4" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "f7fbf1ab-c5b3-4ef3-a701-abc683ff195d", "5e5c059e-4410-497e-a43a-0e086b8a59c9" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "9792cb5a-8125-412d-bcca-4a3ac4dab7be", "452bc6d0-0a14-45ac-a9aa-fe8f395440e7" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "imgURL" },
                values: new object[] { "0d5012ab-3069-48f0-934e-a68a1b0628f2", "d30d4417-5258-4b4c-a3c2-65125e7ab515", "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg?w=900" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "455683f6-9bd0-4a89-89b6-9cc0d399c0cb", "13da9891-33b4-43b3-81fd-cc4bd8d4eddc" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "51e4ff73-2a03-4fd3-93de-ef75a7728bbd", "bbaf1313-1e56-477f-b07f-ca00ffe30d51" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "7",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "3df8a884-2daa-4c1b-b124-0145e8a22337", "27534ed2-2d41-4977-a612-8c915c4a8010" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "86946025-ee34-4786-b715-6afac904b22f", "e1f9d864-16e1-475b-b5ab-525b15a96ee3" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "f25a73f6-8632-4f68-8fe7-1cb59b5db59a", "b1c45df6-557c-472f-984e-944a94e9d41c" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "a85ff42e-d636-4418-a5a5-a966bd7303c0", "ee3cdb8a-b7e8-45c9-b90d-671cdcdf3ef2" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "0fbcb473-82b0-41ce-aa98-bc542b5a3050", "3074d69f-7134-40fe-a475-db325b8aab13" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "c5ae2efb-7f16-426f-af52-e7ebcd623ddb", "87111818-1475-459a-bcb3-201227b07517" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "f429d738-3162-478d-b73c-d332251258b1", "d91e0008-067e-4a82-9a57-ec6943d3e087" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "imgURL" },
                values: new object[] { "e57ee029-bf27-4d77-afd1-38f02c93d0be", "288f1f8c-b6b0-4635-bdf1-e1549b1522b1", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fyoung-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_20203864.htm&psig=AOvVaw0fR5XeA3TLBTRNOvNyOTqV&ust=1682289247307000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCpgPvFvv4CFQAAAAAdAAAAABAE" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "5267035f-8d9a-4206-946d-5f9b5c526283", "388a3115-6221-408f-964c-4c3fb9f3a6c1" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "8f85d48f-8688-4ba5-baad-afd4bd7d92b2", "735a3a11-582e-42c9-b05c-60d6d71242fe" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "7",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "58062d75-7c0f-4daf-8d8a-5c0b7c0b62fd", "b718961f-1d1f-433c-9ccc-bcb9da69a326" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "1dfd5416-9743-4c49-874e-b9db2cbc1f8d", "f4537dd1-a044-401a-841a-717a73749231" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "26de7adf-716e-4e7f-83c9-f598fd5c2b6f", "2bf7d77a-e709-45f2-bf0d-c5f247d840f7" });
        }
    }
}
