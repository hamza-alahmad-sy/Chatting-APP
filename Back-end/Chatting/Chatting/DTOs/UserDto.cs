namespace Chatting.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public bool IsOnline { get; set; }
        public DateTime? LastSeen { get; set; }
        public string? ProfileImagePath { get; set; }
    }
}