document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        console.log(email, password)
        try {
            const response = await fetch('http://localhost:3000/user/maker/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const userData = await response.json();
                window.location.href = '/maker_dashboard.html';
            } else {
                // Handle unsuccessful login (show error message, etc.)
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    });
});