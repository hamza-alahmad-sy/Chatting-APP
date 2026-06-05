/*
 * components/common/FormInput/FormInput.jsx
 *
 * Reusable pill input field with a leading SVG icon.
 * Accepts any <svg> element as `icon` prop.
 * Shows an inline error message when `error` prop is provided.
 */

import './FormInput.css';

export default function FormInput({
  type        = 'text',
  name,
  placeholder,
  value,
  onChange,
  error,
  icon,
  style,
}) {
  return (
    <div className={`form-input${error ? ' form-input--error' : ''}`} style={style}>
      {icon && <span className="form-input__icon">{icon}</span>}
      <input
        className="form-input__field"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={type === 'password' ? 'current-password' : 'on'}
      />
      {error && <p className="form-input__error-msg">{error}</p>}
    </div>
  );
}
