using Microsoft.AspNetCore.SignalR;
using Chatting.Services;

namespace Chatting.Hubs
{
    public class ChatHub : Hub
    {
        private readonly ConnectionManager _connectionManager;

        public ChatHub(ConnectionManager connectionManager)
        {
            _connectionManager = connectionManager;
        }

        public async Task RegisterUser(int userId)
        {
            _connectionManager.AddConnection(userId, Context.ConnectionId);
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            var field = typeof(ConnectionManager)
                .GetField("_connections", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);

            var dict = (System.Collections.Concurrent.ConcurrentDictionary<int, string>)field!.GetValue(null)!;

            var item = dict.FirstOrDefault(x => x.Value == Context.ConnectionId);

            if (!item.Equals(default(KeyValuePair<int, string>)))
            {
                dict.TryRemove(item.Key, out _);
            }

            await base.OnDisconnectedAsync(exception);
        }
    }
}