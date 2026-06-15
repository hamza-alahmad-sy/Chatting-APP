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
import { STRINGS, TAB_CONTENT, AUTH_TABS } from '../../../constants';

export default function SignUpForm({ fields, errors, submitError, loading, onChange, onSubmit }) {
  const { actionBtn } = TAB_CONTENT[AUTH_TABS.SIGN_UP];

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

      {submitError && <p className="auth-form__submit-error">{submitError}</p>}

      <button className="auth-form__submit-btn" onClick={onSubmit} disabled={loading} type="button">
        {loading ? STRINGS.auth.creating : actionBtn}
      </button>
    </>
  );
}
