using Microsoft.AspNetCore.Mvc;
using Chatting.Data;
using Chatting.Models;
using Chatting.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.SignalR;
using Chatting.Hubs;
using Chatting.Services;

namespace Chatting.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IHubContext<ChatHub> _hubContext;
        private readonly ConnectionManager _connectionManager;

        public MessagesController(
            ApplicationDbContext context,
            IHubContext<ChatHub> hubContext,
            ConnectionManager connectionManager)
        {
            _context = context;
            _hubContext = hubContext;
            _connectionManager = connectionManager;
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
            var receiverConnectionId = _connectionManager.GetConnection(dto.ReceiverId);

            if (receiverConnectionId != null)
            {
                await _hubContext.Clients.Client(receiverConnectionId)
                    .SendAsync("ReceiveMessage", new
                    {
                        id = message.Id,
                        chatId = message.ChatId,
                        senderId = message.SenderId,
                        messageText = message.MessageText,
                        createdAt = message.CreatedAt
                    });
            }

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