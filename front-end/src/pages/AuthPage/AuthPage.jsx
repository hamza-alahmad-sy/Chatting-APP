/*
 * pages/AuthPage/AuthPage.jsx
 *
 * Top-level page component.
 * Responsibilities:
 *   1. Consume hooks (screen navigation + form state).
 *   2. Decide which screen to render (Welcome vs Auth).
 *   3. Pass props down — zero business logic here.
 *
 * Think of this as the "director": it connects data hooks to UI components.
 */

import { useAuthScreen } from '../../hooks/useAuthScreen';
import { useAuthForm   } from '../../hooks/useAuthForm';
import { SCREENS       } from '../../constants';

import { WelcomeLeft, WelcomeRight } from '../../components/welcome';
import { AuthForm, AuthSidePanel   } from '../../components/auth';
import ChatPage from '../ChatPage/ChatPage';

export default function AuthPage() {
  const { screen, tab, animKey, cardPhase, goToAuth, switchTab, goToChat, logout } = useAuthScreen();
  const { fields, errors, submitError, loading, handleChange, handleSubmit } = useAuthForm(tab, goToChat);

  if (screen === SCREENS.CHAT) {
    return <ChatPage onLogout={logout} />;
  }

  const screenAnimClass = cardPhase !== 'idle' ? ` auth-card__screen--${cardPhase}` : '';

  return (
    <div className="page-root">
      {/* Decorative background arcs */}
      <div className="bg-arc bg-arc--top-left"  />
      <div className="bg-arc bg-arc--bot-right" />

      {/* Main card */}
      <div className="auth-card">
        <div className={`auth-card__screen${screenAnimClass}`}>

        {/* ── Screen: Welcome ── */}
        {screen === SCREENS.WELCOME && (
          <>
            <WelcomeLeft onSignInClick={goToAuth} disabled={cardPhase !== 'idle'} />
            <WelcomeRight />
          </>
        )}

        {/* ── Screen: Auth (Sign In / Sign Up) ── */}
        {screen === SCREENS.AUTH && (
          <>
            <AuthForm
              tab={tab}
              animKey={animKey}
              staggerEnter={cardPhase === 'enter'}
              onTabSwitch={switchTab}
              fields={fields}
              errors={errors}
              submitError={submitError}
              loading={loading}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <AuthSidePanel tab={tab} animKey={animKey} staggerEnter={cardPhase === 'enter'} />
          </>
        )}

        </div>
      </div>
    </div>
  );
}
