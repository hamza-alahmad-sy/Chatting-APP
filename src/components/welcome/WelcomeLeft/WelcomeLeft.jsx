/*
 * components/welcome/WelcomeLeft/WelcomeLeft.jsx
 *
 * Left panel of the Welcome screen.
 * Contains animated blobs, branding, headline, and the "SIGN IN" CTA.
 */

import './WelcomeLeft.css';
import { Logo } from '../../common';

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
          Welcome<br />Back
        </h1>
        <p className="welcome-left__subtitle">
          To keep connected with us please<br />login with your personal info
        </p>
        <button className="welcome-left__btn" onClick={onSignInClick} type="button">
          SIGN IN
        </button>
      </div>
    </div>
  );
}
