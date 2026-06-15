/*
 * pages/ChatPage/ChatPage.jsx
 *
 * Main chat page: user list on the left, conversation on the right.
 */

import './ChatPage.css';
import { useChat } from '../../hooks/useChat';
import { UserList, ChatWindow } from '../../components/chat';

export default function ChatPage() {
  const {
    filteredUsers,
    selectedUser,
    selectedUserId,
    activeMessages,
    searchQuery,
    draft,
    setSearchQuery,
    setDraft,
    selectUser,
    sendMessage,
    loading,
    sendingMessage,
    usersLoadError,
    retryMessage,
  } = useChat();

  return (
    <div className="chat-page">
      <div className="bg-arc bg-arc--top-left" />
      <div className="bg-arc bg-arc--bot-right" />

      <div className="chat-page__container anim-slide-up">
        <UserList
          users={filteredUsers}
          selectedUserId={selectedUserId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectUser={selectUser}
          loading={loading}
          loadError={usersLoadError}
        />
        <ChatWindow
          user={selectedUser}
          messages={activeMessages}
          draft={draft}
          onDraftChange={setDraft}
          onSend={sendMessage}
          sendingMessage={sendingMessage}
          onRetryMessage={retryMessage}
        />
      </div>
    </div>
  );
}
