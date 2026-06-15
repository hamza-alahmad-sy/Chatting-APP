/*
 * UserList.jsx — Left sidebar listing all users.
 */

import './UserList.css';
import { Logo } from '../../common';
import { STRINGS } from '../../../constants';

export default function UserList({
  users,
  selectedUserId,
  searchQuery,
  onSearchChange,
  onSelectUser,
  loading = false,
  loadError = '',
}) {
  return (
    <aside className="user-list">
      <div className="user-list__header">
        <Logo variant="dark" className="user-list__logo" />
        <h2 className="user-list__title">{STRINGS.chat.messages}</h2>
      </div>

      <div className="user-list__search-wrap">
        <svg className="user-list__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          className="user-list__search"
          placeholder={STRINGS.chat.searchUsers}
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
        />
      </div>

      <ul className="user-list__items">
        {loading && (
          <li className="user-list__status">{STRINGS.chat.loading}</li>
        )}
        {!loading && loadError && (
          <li className="user-list__status user-list__status--error">{loadError}</li>
        )}
        {!loading && !loadError && users.length === 0 && (
          <li className="user-list__status">{STRINGS.chat.noUsers}</li>
        )}
        {users.map(user => (
          <li key={user.id}>
            <button
              type="button"
              className={`user-list__item${user.id === selectedUserId ? ' user-list__item--active' : ''}`}
              onClick={() => onSelectUser(user.id)}
            >
              <div className="user-list__avatar-wrap">
                <span className="user-list__avatar">{user.initials}</span>
                {user.online && <span className="user-list__online" />}
              </div>
              <div className="user-list__info">
                <div className="user-list__row">
                  <span className="user-list__name">{user.name.split('@')[0]}</span>
                  <span className="user-list__time">{user.time}</span>
                </div>
                <p className="user-list__preview">{user.lastMessage}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
