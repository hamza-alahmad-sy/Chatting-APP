using Microsoft.AspNetCore.Mvc;
using Chatting.Data;
using Chatting.Models;
using Chatting.DTOs;
using Microsoft.AspNetCore.Identity;

namespace Chatting.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly PasswordHasher<User> _hasher;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
            _hasher = new PasswordHasher<User>();
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            var existingUser = _context.Users.FirstOrDefault(x => x.UserName == dto.UserName);
            if (existingUser != null)
                return BadRequest("Username already exists");

            var user = new User
            {
                UserName = dto.UserName,
                CreatedAt = DateTime.Now,
                IsOnline = false
            };

            user.PasswordHash = _hasher.HashPassword(user, dto.Password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User created successfully");
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _context.Users.FirstOrDefault(x => x.UserName == dto.UserName);

            if (user == null)
                return BadRequest("Invalid username or password");

            var result = _hasher.VerifyHashedPassword(user, user.PasswordHash, dto.Password);

            if (result == PasswordVerificationResult.Failed)
                return BadRequest("Invalid username or password");

            user.IsOnline = true;
            user.LastSeen = DateTime.Now;

            _context.SaveChanges();

            return Ok(new
            {
                Message = "Login successful",
                UserId = user.Id,
                UserName = user.UserName
            });
        }
    }

}