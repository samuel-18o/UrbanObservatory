import { routes } from './routes.js';
import { isSessionValid } from '../auth/session.js';
import { showError } from './state.js';

//Inicializa el router SPA

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

/**
 * Orquestador principal de navegación
 * Decide qué vista se renderiza según:
 * - Ruta actual
 * - Estado de la sesión
 */
function handleRoute() {
  // 1. Obtener la ruta actual (sin el #)
  const path = location.hash.slice(1) || '/';

  // 2. Validar si existe una sesión activa
  const sessionValid = isSessionValid();

  // 3. Regla principal: sin sesión → siempre login
  if (!sessionValid && path !== '/login') {
    location.hash = '/login';
    return;
  }

  // 4. Regla inversa: con sesión → no volver al login
  if (sessionValid && path === '/login') {
    location.hash = '/';
    return;
  }

  // 5. Resolver la ruta
  const route = routes[path];

  // 6. Ruta inexistente
  if (!route) {
    showError('Ruta no encontrada');
    return;
  }

  // 7. Delegar el renderizado a la vista
  route();
}