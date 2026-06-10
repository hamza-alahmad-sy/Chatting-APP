using Chatting.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace Chatting.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Chat> Conversations { get; set; }
        public DbSet<Message> Messages { get; set; }
    }
}