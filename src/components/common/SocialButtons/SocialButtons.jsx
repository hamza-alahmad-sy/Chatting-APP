/*
 * components/common/SocialButtons/SocialButtons.jsx
 *
 * Renders the row of social-login buttons.
 * Provider config is imported from constants — adding a new provider
 * only requires a change in constants/index.js.
 */

import './SocialButtons.css';
import { SOCIAL_PROVIDERS } from '../../../constants';

export default function SocialButtons({ onSocialLogin }) {
  return (
    <div className="social-buttons">
      {SOCIAL_PROVIDERS.map(({ id, label, title, color }) => (
        <button
          key={id}
          className="social-buttons__btn"
          style={{ background: color }}
          title={title}
          onClick={() => onSocialLogin?.(id)}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
