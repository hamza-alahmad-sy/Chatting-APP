/*
 * components/welcome/WelcomeRight/WelcomeRight.jsx
 *
 * Right panel of the Welcome screen.
 * Contains the floating magician illustration and decorative rotating shapes.
 */

import './WelcomeRight.css';
import { ChatIllus } from '../../illustrations';

export default function WelcomeRight() {
  return (
    <div className="welcome-right anim-slide-right">
      <div className="welcome-right__deco welcome-right__deco--1" />
      <div className="welcome-right__deco welcome-right__deco--2" />
      <div className="welcome-right__deco welcome-right__deco--3" />

      <div className="welcome-right__illus">
        <ChatIllus />
      </div>
    </div>
  );
}
