namespace Chatting.DTOs
{
    public class SendMessageDto
    {
        public int ChatId { get; set; }
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }

        public string? MessageText { get; set; }

        public string? FilePath { get; set; }

        public string MessageType { get; set; } = "Text";
    }
}
