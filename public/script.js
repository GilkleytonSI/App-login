document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role })
    });
  
    const data = await response.json();
    if (data.success) {
      window.location.href = '/dashboard';
    } else {
      const messageElement = document.getElementById('message');
      messageElement.textContent = data.message;
      messageElement.style.color = 'red';
    }
  });
  
  