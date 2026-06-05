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

export default function SignInForm({ fields, errors, loading, onChange, onSubmit }) {
  return (
    <>
      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        value={fields.email}
        onChange={onChange}
        error={errors.email}
        icon={<EmailIcon />}
      />

      <FormInput
        type="password"
        name="password"
        placeholder="Password"
        value={fields.password}
        onChange={onChange}
        error={errors.password}
        icon={<LockIcon />}
      />

      <p className="auth-form__forgot">Forget your password?</p>

      <button className="auth-form__submit-btn" onClick={onSubmit} disabled={loading} type="button">
        {loading ? 'SIGNING IN…' : 'SIGN IN'}
      </button>
    </>
  );
}
