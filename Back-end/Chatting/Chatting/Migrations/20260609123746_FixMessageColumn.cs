using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Chatting.Migrations
{
    /// <inheritdoc />
    public partial class FixMessageColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ConversationId",
                table: "Messages",
                newName: "ChatId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ChatId",
                table: "Messages",
                newName: "ConversationId");
        }
    }
}
