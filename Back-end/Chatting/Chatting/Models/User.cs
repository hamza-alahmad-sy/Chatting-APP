namespace Chatting.Models
{
    public class User
    {
        public int Id { get; set; }

        public string UserName { get; set; } = string.Empty;

        public string PasswordHash { get; set; } = string.Empty;

        public string? ProfileImagePath { get; set; }

        public bool IsOnline { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime? LastSeen { get; set; }
    }

}
