/*
 * components/auth/AuthForm/AuthForm.jsx
 *
 * Left panel of the auth screen.
 * Orchestrates: Logo → Tabs → Title → Social buttons → Form fields.
 *
 * It delegates the actual field rendering to SignInForm / SignUpForm
 * so this file stays under 80 lines and each tab's fields are fully isolated.
 */

import './AuthForm.css';
import { Logo, SocialButtons } from '../../common';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import { AUTH_TABS, TAB_CONTENT, STRINGS } from '../../../constants';

export default function AuthForm({ tab, animKey, onTabSwitch, fields, errors, loading, onChange, onSubmit }) {
  const { formTitle } = TAB_CONTENT[tab];
  const isSignIn = tab === AUTH_TABS.SIGN_IN;

  return (
    <div className="auth-form anim-slide-left" key={`form-${animKey}`}>

      {/* Branding */}
      <Logo variant="dark" className="auth-form__logo" />

      {/* Tab switcher */}
      <div className="auth-form__tabs">
        <button
          className={`auth-form__tab ${isSignIn ? 'auth-form__tab--active' : ''}`}
          onClick={() => onTabSwitch(AUTH_TABS.SIGN_IN)}
          type="button"
        >
          {STRINGS.auth.signInTab}
        </button>
        <button
          className={`auth-form__tab ${!isSignIn ? 'auth-form__tab--active' : ''}`}
          onClick={() => onTabSwitch(AUTH_TABS.SIGN_UP)}
          type="button"
        >
          {STRINGS.auth.signUpTab}
        </button>
      </div>

      {/* Dynamic title */}
      <h2 className="auth-form__title">{formTitle}</h2>

      {/* Social login */}
      <SocialButtons />

      <p className="auth-form__divider">{STRINGS.auth.divider}</p>

      {/* Tab-specific fields */}
      {isSignIn
        ? <SignInForm fields={fields} errors={errors} loading={loading} onChange={onChange} onSubmit={onSubmit} />
        : <SignUpForm fields={fields} errors={errors} loading={loading} onChange={onChange} onSubmit={onSubmit} />
      }
    </div>
  );
}
