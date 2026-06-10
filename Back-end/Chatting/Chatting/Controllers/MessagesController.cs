using Microsoft.AspNetCore.Mvc;
using Chatting.Data;
using Chatting.Models;
using Chatting.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Chatting.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MessagesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(SendMessageDto dto)
        {
            var message = new Message
            {
                ChatId = dto.ChatId,
                SenderId = dto.SenderId,
                MessageText = dto.MessageText,
                FilePath = dto.FilePath,
                MessageType = dto.MessageType,
                CreatedAt = DateTime.Now
            };

            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            return Ok(message);
        }

        [HttpGet("{chatId}")]
        public async Task<IActionResult> GetMessages(int chatId)
        {
            var messages = await _context.Messages
                .Where(m => m.ChatId == chatId)
                .OrderBy(m => m.CreatedAt)
                .ToListAsync();

            return Ok(messages);
        }
    }
}