/*
 * components/common/Logo/Logo.jsx
 *
 * Reusable app logo.
 * variant="light"  → white icon + white text (for pink panels)
 * variant="dark"   → gradient icon + pink text (for white panels)
 */

import './Logo.css';
import { ReelIcon } from '../../illustrations';

export default function Logo({ variant = 'dark', className = '' }) {
  return (
    <div className={`logo logo--${variant} ${className}`}>
      <div className="logo__icon">
        <ReelIcon stroke={variant === 'light' ? '#fff' : '#fff'} size={20} />
      </div>
      <span className="logo__text">Chat App</span>
    </div>
  );
}
