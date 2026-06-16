/*
 * components/auth/AuthSidePanel/AuthSidePanel.jsx
 *
 * Pink right-side panel on the auth screen.
 * Title and subtitle are driven by the active tab via TAB_CONTENT constants.
 */

import { useRef } from 'react';
import './AuthSidePanel.css';
import { ChatSideIllus } from '../../illustrations';
import { TAB_CONTENT } from '../../../constants';

export default function AuthSidePanel({ tab, animKey, staggerEnter }) {
  const { sideTitle, sideSub } = TAB_CONTENT[tab];
  const useStagger = useRef(staggerEnter);
  const panelClass = useStagger.current
    ? 'auth-side-panel auth-side-panel--stagger'
    : 'auth-side-panel';

  return (
    <div className={panelClass} key={`side-${animKey}`}>
      <div className="auth-side-panel__deco auth-side-panel__deco--1" />
      <div className="auth-side-panel__deco auth-side-panel__deco--2" />
      <div className="auth-side-panel__deco auth-side-panel__deco--3" />
      <div className="auth-side-panel__deco auth-side-panel__deco--4" />

      <h2 className="auth-side-panel__title">{sideTitle}</h2>
      <p  className="auth-side-panel__subtitle">{sideSub}</p>

      <div className="auth-side-panel__illus">
        <ChatSideIllus />
      </div>
    </div>
  );
}
