/*
 * components/welcome/WelcomeLeft/WelcomeLeft.jsx
 *
 * Left panel of the Welcome screen.
 * Contains animated blobs, branding, headline, and the "SIGN IN" CTA.
 */

import './WelcomeLeft.css';
import { Logo } from '../../common';
import { STRINGS } from '../../../constants';

export default function WelcomeLeft({ onSignInClick }) {
  return (
    <div className="welcome-left anim-slide-left">
      {/* Background blobs */}
      <div className="welcome-left__blob welcome-left__blob--1" />
      <div className="welcome-left__blob welcome-left__blob--2" />
      <div className="welcome-left__blob welcome-left__blob--3" />
      <div className="welcome-left__blob welcome-left__blob--4" />

      {/* App logo pinned to top-left */}
      <Logo variant="light" className="welcome-left__logo" />

      {/* CTA content pinned to bottom */}
      <div className="welcome-left__content">
        <h1 className="welcome-left__title">
          {STRINGS.welcome.titleLine1}<br />{STRINGS.welcome.titleLine2}
        </h1>
        <p className="welcome-left__subtitle">
          {STRINGS.welcome.subtitle}
        </p>
        <button className="welcome-left__btn" onClick={onSignInClick} type="button">
          {STRINGS.welcome.signIn}
        </button>
      </div>
    </div>
  );
}
