// Esperamos a que todo el HTML cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. MOSTRAR/OCULTAR CONTRASEÑA
       ========================================== */
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.style.cursor = 'pointer';
        togglePassword.addEventListener('click', function () {
            // Verificamos el tipo actual (si es password o texto)
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';

            // Cambiamos el tipo
            passwordInput.setAttribute('type', type);

            // Cambiamos el icono de Iconify según el estado
            if (type === 'password') {
                this.setAttribute('icon', 'mdi:eye'); // Ojo abierto
                this.style.opacity = '1';
            } else {
                this.setAttribute('icon', 'mdi:eye-off'); // Ojo cerrado
                this.style.opacity = '0.6';
            }
        });
    }

    /* ==========================================
       2. SIMULAR EL INICIO DE SESIÓN
       ========================================== */
    const loginForm = document.querySelector('.login-form');
    const submitBtn = document.querySelector('.btn-primary');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            // Prevenimos que la página se recargue (comportamiento por defecto del form)
            e.preventDefault();

            // Obtenemos los valores que el usuario escribió
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Cambiamos el estado del botón para que parezca que está "cargando"
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Signing in...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true; // Desactivamos el botón para evitar múltiples clics
            submitBtn.style.cursor = 'wait';

            // Usamos setTimeout para simular el tiempo que tardaría en conectarse a una base de datos (1.5 segundos)
            setTimeout(() => {
                alert(`¡Éxito!\nIniciando sesión en el dashboard de Droplet para: ${email}`);

                // Restauramos el botón a su estado original
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
                submitBtn.style.cursor = 'pointer';

                // Limpiamos el formulario
                loginForm.reset();
                // Si mostramos la contraseña, la volvemos a ocultar
                passwordInput.setAttribute('type', 'password');
                togglePassword.setAttribute('icon', 'mdi:eye');
                togglePassword.style.opacity = '1';

                // Redirigir a la landing page general
                window.location.href = 'index.html';

            }, 1500);
        });
    }

    /* ==========================================
       3. BOTONES SOCIALES (Opcional)
       ========================================== */
    const socialBtns = document.querySelectorAll('.btn-social');

    socialBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Por si están dentro del form o son enlaces
            // Extraemos el texto del botón (Google o Twitter) eliminando espacios
            const provider = this.textContent.replace(/[^a-zA-Z]/g, '').trim();
            alert(`Redirigiendo a la autenticación con ${provider}...`);
        });
    });

});