/*
 * App.js
 *
 * Root component. Only wires up routing (or in this case a single page).
 * As the app grows, add react-router <Routes> here.
 */

import { AuthPage } from './pages';

export default function App() {
  return <AuthPage />;
}
