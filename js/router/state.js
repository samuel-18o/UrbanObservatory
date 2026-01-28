/**
 * Estado y utilidades del router
 */

export function showError(message) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="error-container">
      <div class="error-card">
        <div class="error-icon">⚠️</div>
        <h1 class="error-title">Error</h1>
        <p class="error-message">${message}</p>
        <button class="btn btn-error" onclick="location.hash='/'">
          Volver al inicio
        </button>
      </div>
    </div>
  `;
}
