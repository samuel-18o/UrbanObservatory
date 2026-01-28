export function renderDetail() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <h1>Detalle</h1>
    <p>Vista fake de detalle</p>

    <button id="back-btn">Volver</button>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    location.hash = '/';
  });
}
