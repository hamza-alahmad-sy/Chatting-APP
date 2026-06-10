/*
 * components/illustrations/ReelIcon.jsx
 *
 * Reusable SVG icon for the app logo.
 * Accepts stroke color as a prop so it works on both light and dark backgrounds.
 */

export default function ReelIcon({ stroke = 'currentColor', size = 0 }) {
  return (
    <svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={stroke}
  strokeWidth="2.8"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
  <line x1="8" y1="9" x2="16" y2="9" />
  <line x1="8" y1="13" x2="13" y2="13" />
</svg>);
}
