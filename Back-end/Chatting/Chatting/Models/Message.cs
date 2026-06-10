namespace Chatting.Models
{
    public class Message
    {
        public int Id { get; set; }

        public int ChatId { get; set; }

        public int SenderId { get; set; }

        public string? MessageText { get; set; }

        public string? FilePath { get; set; }

        public string MessageType { get; set; } = "Text";

        public DateTime CreatedAt { get; set; }
    }
}
