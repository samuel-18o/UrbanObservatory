export function renderLogin() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <h1>Login</h1>
    <p>Vista fake de login</p>
    <button id="login-admin">Login como Admin</button>
    <button id="login-user">Login como User</button>
  `;

  document.getElementById('login-admin').addEventListener('click', () => {
    // Simulación de login correcto
    localStorage.setItem('session', JSON.stringify({ role: 'admin' }));
    location.hash = '/';
  });

  document.getElementById('login-user').addEventListener('click', () => {
    // Simulación de login correcto
    localStorage.setItem('session', JSON.stringify({ role: 'user' }));
    location.hash = '/';
  });
}
