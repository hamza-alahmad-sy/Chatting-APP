/*
 * components/auth/SignInForm/SignInForm.jsx
 *
 * Fields shown exclusively on the Sign In tab:
 *   Email → Password → Forgot password link → Submit button
 *
 * Kept as a separate component so SignUpForm can differ freely
 * without growing a sea of conditional branches in one file.
 */

import { FormInput } from '../../common';
import { EmailIcon, LockIcon } from '../icons';
import { STRINGS, TAB_CONTENT, AUTH_TABS } from '../../../constants';

export default function SignInForm({ fields, errors, submitError, loading, onChange, onSubmit }) {
  const { actionBtn } = TAB_CONTENT[AUTH_TABS.SIGN_IN];

  return (
    <>
      <FormInput
        type="email"
        name="email"
        placeholder={STRINGS.auth.email}
        value={fields.email}
        onChange={onChange}
        error={errors.email}
        icon={<EmailIcon />}
      />

      <FormInput
        type="password"
        name="password"
        placeholder={STRINGS.auth.password}
        value={fields.password}
        onChange={onChange}
        error={errors.password}
        icon={<LockIcon />}
      />

      <p className="auth-form__forgot">{STRINGS.auth.forgotPassword}</p>

      {submitError && <p className="auth-form__submit-error">{submitError}</p>}

      <button className="auth-form__submit-btn" onClick={onSubmit} disabled={loading} type="button">
        {loading ? STRINGS.auth.signingIn : actionBtn}
      </button>
    </>
  );
}
