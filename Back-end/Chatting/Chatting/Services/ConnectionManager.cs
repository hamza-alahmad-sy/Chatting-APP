using System.Collections.Concurrent;

namespace Chatting.Services
{
    public class ConnectionManager
    {
        // UserId -> ConnectionId
        private static readonly ConcurrentDictionary<int, string> _connections = new();

        public void AddConnection(int userId, string connectionId)
        {
            _connections[userId] = connectionId;
        }

        public void RemoveConnection(int userId)
        {
            _connections.TryRemove(userId, out _);
        }

        public string? GetConnection(int userId)
        {
            _connections.TryGetValue(userId, out var connectionId);
            return connectionId;
        }
    }
}