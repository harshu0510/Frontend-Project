document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation (for demonstration purposes)
    if (username === 'admin@admin.com' && password === '123456') {
      // Successful login, redirect to a new page or perform other actions
      alert('Login successful!');
      // For redirecting to a new page
      // window.location.href = 'dashboard.html';
    } else {
      // Display error message for incorrect credentials
      const errorMessage = document.getElementById('error-msg');
      errorMessage.innerText = 'Invalid username or password. Please try again.';
    }
  });
  