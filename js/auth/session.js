export function isSessionValid() {
  const session = localStorage.getItem('session');
  return Boolean(session);
}
