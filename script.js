document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    loginBtn.addEventListener('click', function() {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });

    signupBtn.addEventListener('click', function() {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    const signupFormElement = document.getElementById('signup-form-content');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
    const emailError = document.getElementById('email-error');

    signupFormElement.addEventListener('submit', function(event) {
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        // Regular expression for basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            emailError.style.display = 'block'; // Show error message
            event.preventDefault(); // Prevent form submission
        } else {
            emailError.style.display = 'none'; // Hide error message

            // Regular expression for password validation
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

            if (!passwordPattern.test(passwordValue)) {
                alert('Password must be at least 12 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character.');
                event.preventDefault(); // Prevent form submission
            } else {
                // Save email and password in local storage
                localStorage.setItem('email', emailValue);
                localStorage.setItem('password', passwordValue);

                alert('User data saved in local storage!');
            }
        }
    });

    // Optionally, retrieve and display saved data when the page loads
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail && savedPassword) {
        emailInput.value = savedEmail;
        passwordInput.value = savedPassword;
    }

    // Initialize to show login form by default
    loginForm.style.display = 'block';
});
