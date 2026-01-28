export function renderLogin() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <h1>Login</h1>
    <p>Vista fake de login</p>
    <button id="login-btn">Iniciar sesión</button>
  `;

  document.getElementById('login-btn').addEventListener('click', () => {
    // Simulación de login correcto
    localStorage.setItem('session', JSON.stringify({ role: 'admin' }));
    location.hash = '/';
  });
}
