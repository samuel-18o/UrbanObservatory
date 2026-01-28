export function renderDashboard() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <h1>Dashboard</h1>
    <p>Home del sistema</p>

    <button id="detail-btn">Ver detalle</button>
    <button id="create-btn">Crear proyecto</button>
    <button id="logout-btn">Cerrar sesión</button>
  `;

  document.getElementById('detail-btn').addEventListener('click', () => {
    location.hash = '/detail';
  });

  document.getElementById('create-btn').addEventListener('click', () => {
    location.hash = '/create';
  });

  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('session');
    location.hash = '/login';
  });
}
