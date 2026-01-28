import { renderLogin } from '../views/login.view.js';
import { renderDashboard } from '../views/dashboard.view.js';
import { renderDetail } from '../views/detail.view.js';
import { renderCreate } from '../views/create.view.js';

/**
 * Mapa de rutas de la aplicación
 * Cada ruta apunta a una función de render
 */
export const routes = [
  {
    path: '/login',
    view: renderLogin,
  },
  {
    path: '/',
    view: renderDashboard,
    roles: ['admin', 'user'],
  },
  {
    path: '/detail',
    view: renderDetail,
    roles: ['admin', 'user'],
  },
  {
    path: '/create',
    view: renderCreate,
    roles: ['admin'],
  },
];

