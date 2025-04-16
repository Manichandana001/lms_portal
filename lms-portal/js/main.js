document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Dummy check - in real setup, validate with backend (PHP + MySQL).
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if(email && password) {
        // Simulate successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter valid credentials.');
    }
});
