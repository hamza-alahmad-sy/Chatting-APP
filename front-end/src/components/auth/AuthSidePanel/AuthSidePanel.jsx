/*
 * components/auth/AuthSidePanel/AuthSidePanel.jsx
 *
 * Pink right-side panel on the auth screen.
 * Title and subtitle are driven by the active tab via TAB_CONTENT constants.
 */

import './AuthSidePanel.css';
import { ChatSideIllus } from '../../illustrations';
import { TAB_CONTENT } from '../../../constants';

export default function AuthSidePanel({ tab, animKey }) {
  const { sideTitle, sideSub } = TAB_CONTENT[tab];

  return (
    <div className="auth-side-panel anim-slide-right" key={`side-${animKey}`}>
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
