// filepath: register.js
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirm = document.getElementById('toggleConfirmPassword');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');
    const registerForm = document.querySelector('.register-form');
    const submitBtn = document.querySelector('.btn-primary');

    function setupToggle(toggleEl, inputEl) {
        if (!toggleEl || !inputEl) return;
        toggleEl.style.cursor = 'pointer';
        toggleEl.addEventListener('click', function () {
            const type = inputEl.getAttribute('type') === 'password' ? 'text' : 'password';
            inputEl.setAttribute('type', type);
            if (type === 'password') {
                this.setAttribute('icon', 'mdi:eye');
                this.style.opacity = '1';
            } else {
                this.setAttribute('icon', 'mdi:eye-off');
                this.style.opacity = '0.7';
            }
        });
    }

    setupToggle(togglePassword, passwordInput);
    setupToggle(toggleConfirm, confirmInput);

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = passwordInput.value;
            const confirm = confirmInput.value;
            const terms = document.getElementById('terms').checked;

            if (!terms) {
                alert('You must accept the terms to continue.');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            if (password !== confirm) {
                alert('Passwords do not match.');
                return;
            }

            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Creating account...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;
            submitBtn.style.cursor = 'wait';

            setTimeout(() => {
                alert(`Account created successfully!\nWelcome, ${name || email}`);
                // Restaurar estado del botón y limpiar el formulario antes de redirigir
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
                submitBtn.style.cursor = 'pointer';
                registerForm.reset();

                // Redirigir a la landing page
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // Social buttons
    const socialBtns = document.querySelectorAll('.btn-social');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const provider = this.textContent.replace(/[^a-zA-Z]/g, '').trim();
            alert(`Redirecting to ${provider} authentication...`);
        });
    });
});
