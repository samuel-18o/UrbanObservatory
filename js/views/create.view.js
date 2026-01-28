export function renderCreate() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <h1>Crear proyecto</h1>
    <p>Vista fake de creación</p>

    <button id="back-btn">Volver</button>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    location.hash = '/';
  });
}
