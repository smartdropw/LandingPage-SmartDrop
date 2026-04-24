document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
       ========================================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('span:last-child');

        // Ocultamos las respuestas por defecto al cargar la página
        answer.style.display = 'none';

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';

            // Primero cerramos todas las demás respuestas
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-answer').style.display = 'none';
                otherItem.querySelector('.faq-question span:last-child').textContent = '▼';
            });

            // Si la que clickeamos estaba cerrada, la abrimos
            if (!isOpen) {
                answer.style.display = 'block';
                icon.textContent = '▲'; // Cambiamos la flechita
            }
        });
    });

    /* ==========================================
       2. SCROLL SUAVE PARA EL MENÚ DE NAVEGACIÓN
       ========================================== */
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evitamos el salto brusco normal

            // Obtenemos el ID de la sección a la que queremos ir (ej: #pricing)
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Hacemos un scroll suave, calculando el espacio de la barra superior (80px)
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================
       3. BOTONES DE LA CABECERA Y PRECIOS
       ========================================== */
    const getStartedBtns = document.querySelectorAll('.btn-primary, .nav-btn, .card-btn');

    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Si el botón no es de tipo submit (del formulario de contacto)
            if(btn.type !== 'submit') {
                e.preventDefault();
                // Redirigir al login
                window.location.href = 'login.html';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Código del gráfico de Chart.js
    const ctx = document.getElementById('myChart');

    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
                datasets: [{
                    label: 'Volumen (L)',
                    data: [1200, 1220, 1250, 1240, 1245, 1250],
                    borderColor: '#06b6d4', // Tu color Cyan
                    backgroundColor: 'rgba(6, 182, 212, 0.2)', // Relleno translúcido
                    borderWidth: 2,
                    tension: 0.4, // Curva suave
                    pointRadius: 0 // Ocultar los puntos para que se vea más limpio
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }, // Ocultar leyenda superior
                scales: {
                    x: { display: false }, // Ocultar ejes para que parezca un widget limpio
                    y: { display: false, min: 1100, max: 1300 }
                }
            }
        });
    }
});