// Traducciones ES/EN
const translations = {
    es: {
        navLinks: {
            producto: "Producto",
            nosotros: "Nosotros",
            equipo: "Equipo",
            soluciones: "Soluciones",
            liquidos: "Líquidos",
            caracteristicas: "Características",
            testimonios: "Testimonios",
            precios: "Precios",
            faq: "FAQ"
        },
        buttons: {
            contactarVentas: "Contactar Ventas",
            getStarted: "Comenzar",
            learnMore: "Saber más",
            contactUs: "Contáctanos"
        },
        hero: {
            title: "Monitoreo inteligente de agua<br>para hogares y negocios",
            subtitle: "Rastrea volumen, presión y temperatura en tiempo real con alertas y reportes claros.",
            tagMonitoring: "Monitoreo en Tiempo Real",
            tagAlerts: "Alertas de agua",
            tagDashboard: "Dashboard en la nube"
        },
        visibility: {
            title: "Visibilidad completa de tus líquidos",
            subtitle: "Monitorea niveles de líquidos y tuberías, recibiendo información instantánea de presión y temperatura a través de dashboards claros y notificaciones puntuales.",
            volumeTitle: "Gestión de Volumen",
            volumeDesc: "Establece límites y obtén registros activos de consumo y demanda.",
            pressureTitle: "Seguimiento de Presión",
            pressureDesc: "Detecta variaciones de presión para prevenir daños en líneas.",
            temperatureTitle: "Control de Temperatura",
            temperatureDesc: "Asegura umbrales críticos con alertas inteligentes."
        },
        about: {
            title: "Sobre Nosotros",
            subtitle: "Una descripción simple. Un equipo dinámico enfocado en tecnología brindando una solución adaptada para control eficiente y confiable de recursos hídricos.",
            mission: "Misión",
            missionDesc: "Hacer la gestión de líquidos accesible y eficiente.",
            reliability: "Confiabilidad",
            reliabilityDesc: "Sensores e infraestructura confiables con 99.9% de tiempo de actividad.",
            customerFocus: "Enfoque al Cliente",
            customerFocusDesc: "Soporte premium, incorporación global y mejoras continuas."
        },
        team: {
            title: "Nuestro Equipo",
            subtitle: "Cinco pilares impulsando SmartDrop"
        },
        solutions: {
            title: "Soluciones por segmentos",
            residences: "Residencias",
            residencesDesc: "Monitorea tanques de líquidos, recibe costos paso a paso y uso detallado.",
            businesses: "Negocios",
            businessesDesc: "Controla recursos de líquidos mediante monitoreo personalizado para maximizar producción."
        },
        liquids: {
            title: "Líquidos Soportados"
        },
        features: {
            title: "Características Clave"
        },
        testimonial: {
            title: "Qué dicen nuestros clientes",
            subtitle: "Historias reales de usuarios reales usando SmartDrop"
        },
        pricing: {
            title: "Planes de Suscripción",
            basic: "Básico",
            pro: "Pro",
            enterprise: "Empresa",
            recommended: "RECOMENDADO"
        },
        faq: {
            title: "Preguntas Frecuentes"
        },
        contact: {
            title: "Contactar Ventas",
            name: "Nombre",
            namePlaceholder: "Ingrese su nombre completo",
            email: "Email",
            emailPlaceholder: "Ingrese su correo electrónico",
            message: "Mensaje",
            messagePlaceholder: "Escriba su mensaje aquí...",
            send: "Enviar"
        }
    },
    en: {
        navLinks: {
            producto: "Product",
            nosotros: "About",
            equipo: "Team",
            soluciones: "Solutions",
            liquidos: "Liquids",
            caracteristicas: "Features",
            testimonios: "Testimonials",
            precios: "Pricing",
            faq: "FAQ"
        },
        buttons: {
            contactarVentas: "Contact Sales",
            getStarted: "Get Started",
            learnMore: "Learn More",
            contactUs: "Contact us"
        },
        hero: {
            title: "Smart water monitoring<br>for homes and businesses",
            subtitle: "Track volume, pressure and temperature in real time with clear alerts and reports.",
            tagMonitoring: "Real-Time Monitoring",
            tagAlerts: "Water alerts",
            tagDashboard: "Cloud dashboard"
        },
        visibility: {
            title: "Full visibility of your liquids",
            subtitle: "Monitor liquid levels and pipelines, receiving instant pressure and temperature info via clear dashboards and prompt notifications.",
            volumeTitle: "Volume Management",
            volumeDesc: "Set end tracks and obtain consumption and demand active records.",
            pressureTitle: "Pressure Tracking",
            pressureDesc: "Detect pressure variations to prevent line damage.",
            temperatureTitle: "Temperature Control",
            temperatureDesc: "Ensure critical thresholds with smart alerts."
        },
        about: {
            title: "About Us",
            subtitle: "A simple description. A dynamic tech-focused team bringing a solution tailored for efficient, reliable water resource control.",
            mission: "Mission",
            missionDesc: "Make liquid management accessible and efficient.",
            reliability: "Reliability",
            reliabilityDesc: "Trusted sensors and infrastructure with 99.9% uptime.",
            customerFocus: "Customer focus",
            customerFocusDesc: "Premium support, global onboarding, and continuous improvements."
        },
        team: {
            title: "Our Team",
            subtitle: "Five pillars powering SmartDrop"
        },
        solutions: {
            title: "Solutions by segments",
            residences: "Residences",
            residencesDesc: "Monitor liquid tanks, receive turn-by-turn costs, and detailed usage.",
            businesses: "Businesses",
            businessesDesc: "Control liquid resources via custom monitoring to maximize production."
        },
        liquids: {
            title: "Supported liquids"
        },
        features: {
            title: "Key features"
        },
        testimonial: {
            title: "What our customers say",
            subtitle: "Real stories from real users using SmartDrop"
        },
        pricing: {
            title: "Subscription plans",
            basic: "Basis",
            pro: "Pro",
            enterprise: "Enterprise",
            recommended: "RECOMMENDED"
        },
        faq: {
            title: "Frequently asked questions"
        },
        contact: {
            title: "Contact Sales",
            name: "Name",
            namePlaceholder: "Enter your full name",
            email: "Email",
            emailPlaceholder: "Enter your email address",
            message: "Message",
            messagePlaceholder: "Write your message here...",
            send: "Send"
        }
    }
};

// Verificar si localStorage está disponible (navegador)
const hasLocalStorage = typeof localStorage !== 'undefined';

// Idioma actual (por defecto ES)
let currentLanguage = hasLocalStorage ? (localStorage.getItem('language') || 'es') : 'es';

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    if (hasLocalStorage) {
        localStorage.setItem('language', lang);
    }
    document.documentElement.lang = lang;
    updatePageLanguage();
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang.toUpperCase();
    }
}

// Función para actualizar el contenido de la página
function updatePageLanguage() {
    const t = translations[currentLanguage];

    // Actualizar nav links
    const navItems = document.querySelectorAll('.nav-links li a');
    if (navItems.length > 0) {
        navItems[0].textContent = t.navLinks.producto;
        navItems[1].textContent = t.navLinks.nosotros;
        navItems[2].textContent = t.navLinks.equipo;
        navItems[3].textContent = t.navLinks.soluciones;
        navItems[4].textContent = t.navLinks.liquidos;
        navItems[5].textContent = t.navLinks.caracteristicas;
        navItems[6].textContent = t.navLinks.testimonios;
        navItems[7].textContent = t.navLinks.precios;
        navItems[8].textContent = t.navLinks.faq;
    }

    // Actualizar botón contactar ventas
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) contactBtn.textContent = t.buttons.contactarVentas;

    // Actualizar hero
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;

    const heroSubtitle = document.querySelector('.hero-text > p');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons.length >= 2) {
        heroButtons[0].textContent = t.buttons.getStarted;
        heroButtons[1].textContent = t.buttons.learnMore;
    }

    const tags = document.querySelectorAll('.tags .tag');
    if (tags.length >= 3) {
        tags[0].textContent = t.hero.tagMonitoring;
        tags[1].textContent = t.hero.tagAlerts;
        tags[2].textContent = t.hero.tagDashboard;
    }

    // Actualizar secciones (visibility)
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.classList.contains('visibility')) {
            const h2 = section.querySelector('h2');
            const subtitle = section.querySelector('.section-subtitle');
            if (h2) h2.textContent = t.visibility.title;
            if (subtitle) subtitle.textContent = t.visibility.subtitle;

            const cards = section.querySelectorAll('.card');
            if (cards.length >= 3) {
                cards[0].querySelector('h3').textContent = t.visibility.volumeTitle;
                cards[0].querySelector('p').textContent = t.visibility.volumeDesc;
                cards[1].querySelector('h3').textContent = t.visibility.pressureTitle;
                cards[1].querySelector('p').textContent = t.visibility.pressureDesc;
                cards[2].querySelector('h3').textContent = t.visibility.temperatureTitle;
                cards[2].querySelector('p').textContent = t.visibility.temperatureDesc;
            }
        }

        if (section.classList.contains('about')) {
            const h2 = section.querySelector('h2');
            const subtitle = section.querySelector('.section-subtitle');
            if (h2) h2.textContent = t.about.title;
            if (subtitle) subtitle.textContent = t.about.subtitle;

            const cards = section.querySelectorAll('.card');
            if (cards.length >= 3) {
                cards[0].querySelector('h3').textContent = t.about.mission;
                cards[0].querySelector('p').textContent = t.about.missionDesc;
                cards[1].querySelector('h3').textContent = t.about.reliability;
                cards[1].querySelector('p').textContent = t.about.reliabilityDesc;
                cards[2].querySelector('h3').textContent = t.about.customerFocus;
                cards[2].querySelector('p').textContent = t.about.customerFocusDesc;
            }
        }

        if (section.classList.contains('team')) {
            const h2 = section.querySelector('h2');
            const subtitle = section.querySelector('.section-subtitle');
            if (h2) h2.textContent = t.team.title;
            if (subtitle) subtitle.textContent = t.team.subtitle;
        }

        if (section.classList.contains('solutions')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.solutions.title;

            const cards = section.querySelectorAll('.card');
            if (cards.length >= 2) {
                cards[0].querySelector('h3').textContent = t.solutions.residences;
                cards[0].querySelector('p').textContent = t.solutions.residencesDesc;
                cards[1].querySelector('h3').textContent = t.solutions.businesses;
                cards[1].querySelector('p').textContent = t.solutions.businessesDesc;
            }
        }

        if (section.classList.contains('liquids')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.liquids.title;
        }

        if (section.classList.contains('key-features')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.features.title;
        }

        if (section.classList.contains('testimonial')) {
            const h2 = section.querySelector('h2');
            const subtitle = section.querySelector('.section-subtitle');
            if (h2) h2.textContent = t.testimonial.title;
            if (subtitle) subtitle.textContent = t.testimonial.subtitle;
        }

        if (section.classList.contains('pricing')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.pricing.title;

            const cards = section.querySelectorAll('.pricing-card');
            if (cards.length >= 3) {
                cards[0].querySelector('h3').textContent = t.pricing.basic;
                cards[1].querySelector('h3').textContent = t.pricing.pro;
                cards[2].querySelector('h3').textContent = t.pricing.enterprise;
            }

            // Actualizar botones de precios
            const pricingBtns = section.querySelectorAll('.btn');
            pricingBtns.forEach(btn => {
                btn.textContent = t.buttons.contactUs;
            });
        }

        if (section.classList.contains('faq')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.faq.title;
        }

        if (section.classList.contains('contact')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.contact.title;

            const labels = section.querySelectorAll('label');
            const inputs = section.querySelectorAll('input, textarea');
            if (labels.length >= 3) {
                labels[0].textContent = t.contact.name;
                labels[1].textContent = t.contact.email;
                labels[2].textContent = t.contact.message;
            }

            if (inputs.length >= 3) {
                inputs[0].placeholder = t.contact.namePlaceholder;
                inputs[1].placeholder = t.contact.emailPlaceholder;
                inputs[2].placeholder = t.contact.messagePlaceholder;
            }

            const submitBtn = section.querySelector('.form-btn');
            if (submitBtn) submitBtn.textContent = t.contact.send;
        }
    });
}

// Event listener para cambiar idioma
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar con idioma guardado
    document.documentElement.lang = currentLanguage;
    document.getElementById('langText').textContent = currentLanguage.toUpperCase();
    updatePageLanguage();

    // Añadir event listener al dropdown de idioma
    const langDropdown = document.getElementById('langDropdown');
    if (langDropdown) {
        langDropdown.addEventListener('click', function() {
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
});
