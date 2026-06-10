using Chatting.Data;
using Chatting.DTOs;
using Chatting.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace Chatting.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ChatsController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost("get-or-create")]
        public async Task<IActionResult> GetOrCreate(GetOrCreateConversationDto dto)
        {
            // نرتب IDs حتى لا تتكرر المحادثة
            var user1 = Math.Min(dto.UserId1, dto.UserId2);
            var user2 = Math.Max(dto.UserId1, dto.UserId2);

            var chat = await _context.Conversations
                .FirstOrDefaultAsync(c =>
                    c.User1Id == user1 &&
                    c.User2Id == user2);

            if (chat == null)
            {
                chat = new Chat
                {
                    User1Id = user1,
                    User2Id = user2,
                    CreatedAt = DateTime.Now
                };

                _context.Conversations.Add(chat);
                await _context.SaveChangesAsync();
            }

            return Ok(chat);
        }
    }
}
