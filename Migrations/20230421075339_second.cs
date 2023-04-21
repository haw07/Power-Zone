using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace power_zone.Migrations
{
    /// <inheritdoc />
    public partial class second : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "0a60d70c-82e8-4546-9b93-b52f24ccdde2", "73b03345-737b-49f2-9d8c-7584b0108844" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "39f2141b-e402-4894-be11-30d23b9ac3a9", "894cba02-ff79-4db5-84c8-e8507811efb6" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "edee86a2-d5aa-4bc5-81ce-1f4a1d808301", "ae29a267-b7f9-4cc1-aa9f-eeb6a53ac054" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "543aeadc-f9e2-4191-8ab3-93f3bd57face", "f3bb7bcb-0e8f-4e80-8265-2f97376a860e" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "e9d27f27-b4a1-4533-b935-ea124fd86981", "f6a629b2-accd-4e28-adbc-89abfbd7d826" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "946aefd5-ab11-4b33-88d2-a29cfb8fdfc9", "8795d25d-26c8-4f9b-9106-adc720c318d2" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "7c123b04-3d94-455f-b9c6-0845ae0b06e5", "e79cd178-5cf1-41e8-858d-fff41fa77413" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "7",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "address" },
                values: new object[] { "3d880b9f-ebd6-474b-a568-aada16625164", "7a0c6c33-ae96-4d06-8617-0e123ee30599", "Kalifornia 33 Street" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "address" },
                values: new object[] { "e63ef6c5-0b20-406c-ba2e-c78913e68189", "41fc6d61-b2f1-48b3-bbda-e12fb994a29b", "New York City, 33 Street" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "address" },
                values: new object[] { "72bb9e94-7643-4605-a6c7-645d8f55525f", "c5f9f082-fc97-46c7-8082-a4eadc5be4b2", "New York City, 33 Street" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "b3ed59d9-e8be-4401-9c42-c1f7e3ffaa34", "91ef9c8a-5d50-40eb-abbf-113434780bed" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "5dad28fe-33f0-4202-a810-64eaaed552f7", "0918bb3f-1c8f-4776-9175-d2fc1c8ae95c" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "2b2f4023-3f6a-4022-9f07-1de043e67640", "a18c6130-bfbf-44b9-ad5f-cd890eddf235" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "dd71e854-a471-4690-804d-b4172dcca5db", "89fed349-8c62-4783-ae73-28b9b05ce142" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "eff906a9-7f3a-41ea-8ad2-f2084ba6ebee", "c087da23-80e9-48a3-82ca-b4b055673951" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "c19d6d21-79b3-4b77-9959-213545e18684", "67b251d3-611d-4a70-aa12-b4ea4563b466" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp" },
                values: new object[] { "776d9d87-0519-43b2-864b-0ec1cbe1e6ef", "5fed390f-57af-4372-957a-08955208768a" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "7",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "address" },
                values: new object[] { "15606ed7-f486-4ccb-b00b-9a199bb17e5a", "bffa8112-2142-4f19-b73d-3c4618ba8e5f", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "address" },
                values: new object[] { "095da0a7-f461-45b3-af38-e93e55ff123e", "9e67e815-c1ad-4649-8077-6e51903f2eb0", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9",
                columns: new[] { "ConcurrencyStamp", "SecurityStamp", "address" },
                values: new object[] { "5f64318e-3720-4a9c-bb01-bfe6b91716af", "c49b719d-12ce-4bc5-bbaf-0d8f27928007", null });
        }
    }
}
