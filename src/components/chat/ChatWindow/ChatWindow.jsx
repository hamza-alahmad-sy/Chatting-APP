/*
 * ChatWindow.jsx — Right panel: conversation header, messages, and input.
 */

import { useEffect, useRef } from 'react';
import './ChatWindow.css';
import { STRINGS } from '../../../constants';

export default function ChatWindow({
  user,
  messages,
  draft,
  onDraftChange,
  onSend,
  loading = false,
  error = null,
  sendingMessage = false,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  if (!user) {
    return (
      <div className="chat-window chat-window--empty">
        <p className="chat-window__empty-text">{STRINGS.chat.selectConversation}</p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <header className="chat-window__header">
        <div className="chat-window__avatar">{user.initials}</div>
        <div className="chat-window__header-info">
          <h3 className="chat-window__name">{user.name}</h3>
          <span className="chat-window__status">
            {user.online ? STRINGS.chat.online : STRINGS.chat.offline}
          </span>
        </div>
      </header>

      <div className="chat-window__messages">
        {error && (
          <div className="chat-window__error">
            <p>{error}</p>
          </div>
        )}
        
        {loading ? (
          <div className="chat-window__loading">
            <p>{STRINGS.chat.loading}</p>
          </div>
        ) : (
          messages.map(msg => (
            <div
              key={msg.id}
              className={`chat-window__bubble-wrap chat-window__bubble-wrap--${msg.sender}`}
            >
              <div className={`chat-window__bubble chat-window__bubble--${msg.sender}`}>
                <p className="chat-window__text">{msg.text}</p>
                <span className="chat-window__msg-time">{msg.time}</span>
              </div>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      <footer className="chat-window__footer">
        <textarea
          className="chat-window__input"
          placeholder={STRINGS.chat.typeMessage}
          rows={1}
          value={draft}
          onChange={e => onDraftChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="chat-window__send-btn"
          onClick={onSend}
          disabled={!draft.trim() || sendingMessage}
          aria-label={STRINGS.chat.sendMessage}
          title={sendingMessage ? STRINGS.chat.sending : STRINGS.chat.sendMessage}
        >
          {sendingMessage ? (
            <span className="chat-window__send-loader">⏳</span>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          )}
        </button>
      </footer>
    </div>
  );
}
