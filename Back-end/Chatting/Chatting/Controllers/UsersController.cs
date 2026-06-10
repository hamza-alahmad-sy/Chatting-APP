using Microsoft.AspNetCore.Mvc;
using Chatting.Data;
using Chatting.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Chatting.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<UserDto>>> GetUsers()
        {
            var users = await _context.Users
                .Select(u => new UserDto
                {
                    Id = u.Id,
                    UserName = u.UserName,
                    IsOnline = u.IsOnline,
                    LastSeen = u.LastSeen,
                    ProfileImagePath = u.ProfileImagePath
                })
                .ToListAsync();

            return Ok(users);
        }
    }
}