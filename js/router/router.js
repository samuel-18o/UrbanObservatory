import { routes } from './routes.js';
import { isSessionValid, getSession } from '../auth/session.js';
import { showError } from './state.js';

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const path = location.hash.slice(1) || '/';
  const sessionValid = isSessionValid();

  // Sin sesión → login
  if (!sessionValid && path !== '/login') {
    location.hash = '/login';
    return;
  }

  // Con sesión → no volver a login
  if (sessionValid && path === '/login') {
    location.hash = '/';
    return;
  }

  const route = routes.find(r => r.path === path);

  if (!route) {
    showError('Ruta no encontrada');
    return;
  }

  // Validación de roles
  if (route.roles) {
    const session = getSession();

    if (!route.roles.includes(session.role)) {
      location.hash = '/';
      return;
    }
  }

  route.view();
}