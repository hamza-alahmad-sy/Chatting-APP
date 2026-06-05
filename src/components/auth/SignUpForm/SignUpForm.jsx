/*
 * components/auth/SignUpForm/SignUpForm.jsx
 *
 * Fields shown exclusively on the Sign Up tab:
 *   Name → Email → Password → Submit button
 *
 * Adding a new field (e.g. confirm-password) only touches this file.
 */

import { FormInput } from '../../common';
import { UserIcon, EmailIcon, LockIcon } from '../icons';

export default function SignUpForm({ fields, errors, loading, onChange, onSubmit }) {
  return (
    <>
      <FormInput
        type="text"
        name="name"
        placeholder="Full Name"
        value={fields.name}
        onChange={onChange}
        error={errors.name}
        icon={<UserIcon />}
        style={{ animation: 'slideUp 0.4s both' }}
      />

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

      <button className="auth-form__submit-btn" onClick={onSubmit} disabled={loading} type="button">
        {loading ? 'CREATING…' : 'SIGN UP'}
      </button>
    </>
  );
}
