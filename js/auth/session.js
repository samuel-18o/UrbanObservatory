export function getSession() {
  const raw = localStorage.getItem('session');
  if (!raw) return null;
  return JSON.parse(raw);
}

export function isSessionValid() {
  return Boolean(getSession());
}
