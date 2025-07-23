const statusEl = document.getElementById('status');

// Simulated check (replace with your own API or server ping)
function checkServerStatus() {
  // Randomize online/offline for demo
  const online = Math.random() > 0.3;

  if (online) {
    statusEl.textContent = 'Online ✅';
    statusEl.style.color = '#33cc33';
  } else {
    statusEl.textContent = 'Offline ❌';
    statusEl.style.color = '#ff3333';
  }
}

// Check immediately, then every 15 seconds
checkServerStatus();
setInterval(checkServerStatus, 15000);
