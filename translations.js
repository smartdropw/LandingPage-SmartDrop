// Traducciones ES/EN
const translations = {
    es: {
        navLinks: {
            producto: "Producto",
            nosotros: "Nosotros",
            tecnologia: "Tecnología",
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
            title: "Soluciones por segmentos - ROI & Casos de Uso",
            subtitle: "Ve cómo la tecnología predictiva de SmartDrop se traduce en ahorros medibles y problemas prevenidos.",
            residences: "🏠 Para Residencias",
            residencesBadge: "Ahorra 15-20%",
            residencesScenario: "Escenario Real: Familia de 4. El modelo predictivo de SmartDrop identifica picos de consumo y detecta anomalías de nivel de tanque antes de que se agote.",
            residencesBenefits: [
                "✓ Prevenir emergencias de falta de agua",
                "✓ Reducir facturas mensuales detectando fugas temprano",
                "✓ Tranquilidad con monitoreo automático 24/7",
                "✓ Alertado 48h antes de que se vacíe el tanque"
            ],
            residencesROI: "ROI Típico: $200-300/año en ahorros de agua",
            businesses: "🏭 Para Negocios",
            businessesBadge: "Ahorra 25-40%",
            businessesScenario: "Escenario Real: Fábrica de procesamiento de alimentos. La detección predictiva de anomalías previene descontroles térmicos. Las reglas automatizadas previenen pérdidas costosas de lotes.",
            businessesBenefits: [
                "✓ Prevenir pérdidas de producción del 25%+",
                "✓ Reducir labor de monitoreo manual en 85%",
                "✓ Remediación automática limita el tiempo de inactividad a <5min",
                "✓ Conformidad y trazabilidad para cada lote"
            ],
            businessesROI: "ROI Típico: $8K-15K/año (previene 2-3 pérdidas de lotes)"
        },
        liquids: {
            title: "Líquidos Soportados",
            gasoline: "Gasolina",
            gasolineDesc: "Arrendamiento, temperatura y umbrales de seguridad para tanques.",
            beer: "Cerveza",
            beerDesc: "Control de fermentación, temperatura y densidad.",
            honey: "Miel",
            honeyDesc: "Mediciones premium y registros de consistencia.",
            molasses: "Melaza",
            molassesDesc: "Seguimiento de alta viscosidad y dashboards fáciles de usar.",
            chemicals: "Químicos",
            chemicalsDesc: "Cumplimiento, condiciones de dosificación y alertas de seguridad.",
            others: "Otros",
            othersDesc: "Y más soluciones de recursos líquidos."
        },
        features: {
            title: "Características Clave",
            pressureTitle: "Seguimiento de Presión",
            pressureDesc: "Notificaciones de umbrales seguros sin sensores.",
            temperatureTitle: "Control de Temperatura",
            temperatureDesc: "Obten registros de datos y niveles de alerta seguros.",
            volumeTitle: "Gestión de Volumen",
            volumeDesc: "Registros activos de consumo y reportes e insights predictivos."
        },
        techHighlights: {
            title: "Diferenciación Tecnológica",
            subtitle: "IA y machine learning avanzados en el núcleo. No solo monitoreo—predicción e automatización inteligentes.",
            predictiveTitle: "Algoritmos Predictivos",
            predictiveDesc: "Modelos de machine learning entrenados con 100k+ puntos de datos. Pronostica patrones de consumo y detecta anomalías 48 horas en avance.",
            anomalyTitle: "Detección Automática de Anomalías",
            anomalyDesc: "Detección de anomalías térmicas en tiempo real. Prevención automática de picos de presión. Elimina falsos positivos con 99.2% de precisión.",
            automationTitle: "Reglas de Automatización Inteligente",
            automationDesc: "Lógica configurar y olvidar. Disparadores de remediación automática. La automatización de decisiones reduce la intervención manual en 85%."
        },
        pricing: {
            title: "Planes de Suscripción",
            basis: "Básico",
            basisPrice: "$19",
            basisFeatures: ["1 Tanque", "Actualización cada 15 min", "Alertas básicas", "Soporte por email"],
            pro: "Pro",
            proPrice: "$49",
            proFeatures: ["Hasta 5 Tanques", "Actualización cada 5 min", "Alertas avanzadas", "Dashboards compartidos", "Soporte prioritario"],
            enterprise: "Empresa",
            enterprisePrice: "Personalizado",
            enterpriseFeatures: ["Tanques y usuarios ilimitados", "Actualizaciones en tiempo real y API", "Consultoría experta", "Garantías SLA", "Soporte 24/7"],
            contactUs: "Contáctanos"
        },
        faq: {
            title: "Preguntas Frecuentes",
            q1: "¿Puedo instalar los sensores yo mismo?",
            a1: "Sí, todas las instalaciones de sensores están diseñadas para ser rápidas y fáciles. Se proporcionan guías detalladas y la mayoría de configuraciones se pueden hacer sin habilidades especializadas.",
            q2: "¿Mis datos son seguros en la nube?",
            a2: "Absolutamente. La seguridad de tus datos es nuestra prioridad principal. Usamos protocolos de encriptación estándar de la industria para transmisión y almacenamiento de datos.",
            q3: "¿Cómo funcionan las alertas?",
            a3: "Las alertas son personalizables según los umbrales de volumen, presión o temperatura que definas. Las notificaciones se pueden enviar por email, SMS o dentro del dashboard."
        },
        testimonial: {
            title: "Qué dicen nuestros clientes",
            subtitle: "Historias reales de usuarios reales usando SmartDrop"
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
            tecnologia: "Technology",
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
            title: "Solutions by segments - ROI & Use Cases",
            subtitle: "See how SmartDrop's predictive technology translates into measurable savings and prevented issues.",
            residences: "🏠 For Residences",
            residencesBadge: "Save 15-20%",
            residencesScenario: "Real scenario: Family of 4. SmartDrop's predictive model identifies consumption spikes and detects tank-level anomalies before you run out of water.",
            residencesBenefits: [
                "✓ Prevent water shortage emergencies",
                "✓ Reduce monthly bills by detecting leaks early",
                "✓ Peace of mind with 24/7 automatic monitoring",
                "✓ Get alerted 48h before tank empty"
            ],
            residencesROI: "Typical ROI: $200-300/year in water savings",
            businesses: "🏭 For Businesses",
            businessesBadge: "Save 25-40%",
            businessesScenario: "Real scenario: Food processing factory. Predictive anomaly detection prevents thermal runaway in fermentation tanks. Automated rules prevent costly batch losses.",
            businessesBenefits: [
                "✓ Prevent 25%+ production losses from tank failures",
                "✓ Reduce manual monitoring labor by 85%",
                "✓ Automated remediation limits downtime to <5min",
                "✓ Compliance & traceability for every batch"
            ],
            businessesROI: "Typical ROI: $8K-15K/year (prevents 2-3 batch losses)"
        },
        liquids: {
            title: "Supported liquids",
            gasoline: "Gasoline",
            gasolineDesc: "Leasing, temperature and safety thresholds for tanks.",
            beer: "Beer",
            beerDesc: "Fermentation, temperature and density control.",
            honey: "Honey",
            honeyDesc: "Premium measurements and consistency logs.",
            molasses: "Molasses",
            molassesDesc: "High viscosity tracking and user-friendly dashboards.",
            chemicals: "Chemicals",
            chemicalsDesc: "Compliance, dosage conditions, and safety alerts.",
            others: "Others",
            othersDesc: "And more liquid resource solutions."
        },
        features: {
            title: "Key features",
            pressureTitle: "Pressure Tracking",
            pressureDesc: "Sensor-less safe thresholds area notifications.",
            temperatureTitle: "Temperature Control",
            temperatureDesc: "Get data logs and safe alert levels for sanity.",
            volumeTitle: "Volume Management",
            volumeDesc: "Consumption active logs and predictive reports and insights."
        },
        techHighlights: {
            title: "Technological Differentiation",
            subtitle: "Advanced AI and machine learning at the core. Not just monitoring—intelligent prediction and automation.",
            predictiveTitle: "Predictive Algorithms",
            predictiveDesc: "Machine learning models trained on 100k+ data points. Forecasts consumption patterns and detects anomalies 48 hours in advance.",
            anomalyTitle: "Automated Anomaly Detection",
            anomalyDesc: "Real-time thermal anomalies detection. Automatic pressure spike prevention. Eliminates false positives with 99.2% accuracy.",
            automationTitle: "Smart Automation Rules",
            automationDesc: "Set-and-forget logic. Auto-remediation triggers. Decision automation reduces manual intervention by 85%."
        },
        pricing: {
            title: "Subscription plans",
            basis: "Basis",
            basisPrice: "$19",
            basisFeatures: ["1 Tank", "Update every 15 min", "Basic alerts", "Email support"],
            pro: "Pro",
            proPrice: "$49",
            proFeatures: ["Up to 5 Tanks", "Update every 5 min", "Advanced alerts", "Shared dashboards", "Priority support"],
            enterprise: "Enterprise",
            enterprisePrice: "Custom",
            enterpriseFeatures: ["Unlimited Tanks and users", "Real-time updates and API", "Expert consultation", "SLA guarantees", "24/7 support"],
            contactUs: "Contact us"
        },
        faq: {
            title: "Frequently asked questions",
            q1: "Can I install the sensors myself?",
            a1: "Yes, all sensor installations are designed to be quick and easy. Detailed guides are provided, and most setups can be done without specialized skills.",
            q2: "Is my data secure in the cloud?",
            a2: "Absolutely. Your data security is our top priority. We use industry-standard encryption protocols for data transmission and storage.",
            q3: "How do the alerts work?",
            a3: "Alerts are customizable based on volume, pressure, or temperature thresholds you define. Notifications can be sent via email, SMS, or within the dashboard."
        },
        testimonial: {
            title: "What our customers say",
            subtitle: "Real stories from real users using SmartDrop"
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
        navItems[2].textContent = t.navLinks.tecnologia;
        navItems[3].textContent = t.navLinks.equipo;
        navItems[4].textContent = t.navLinks.soluciones;
        navItems[5].textContent = t.navLinks.liquidos;
        navItems[6].textContent = t.navLinks.caracteristicas;
        navItems[7].textContent = t.navLinks.testimonios;
        navItems[8].textContent = t.navLinks.precios;
        navItems[9].textContent = t.navLinks.faq;
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
            const subtitle = section.querySelector('.section-subtitle');
            if (h2) h2.textContent = t.solutions.title;
            if (subtitle) subtitle.textContent = t.solutions.subtitle;

            const solutionCards = section.querySelectorAll('.solution-card');
            if (solutionCards.length >= 2) {
                // Residences Card
                const residencesCard = solutionCards[0];
                const residencesH3 = residencesCard.querySelector('h3');
                const residencesBadge = residencesCard.querySelector('.roi-badge');
                const residencesScenario = residencesCard.querySelectorAll('p')[0]; // Real scenario p
                const residencesBenefitsList = residencesCard.querySelectorAll('.benefits-list li');
                const residencesMetric = residencesCard.querySelector('.metric');

                if (residencesH3) residencesH3.textContent = t.solutions.residences;
                if (residencesBadge) residencesBadge.textContent = t.solutions.residencesBadge;
                if (residencesScenario) residencesScenario.innerHTML = '<strong>Real scenario:</strong> ' + t.solutions.residencesScenario.split(': ')[1];
                residencesBenefitsList.forEach((li, i) => {
                    if (t.solutions.residencesBenefits[i]) li.textContent = t.solutions.residencesBenefits[i];
                });
                if (residencesMetric) residencesMetric.innerHTML = 'Typical ROI: <strong>' + t.solutions.residencesROI.split(': ')[1].replace('ROI Típico: ', '').replace('Typical ROI: ', '') + '</strong>';

                // Businesses Card
                const businessesCard = solutionCards[1];
                const businessesH3 = businessesCard.querySelector('h3');
                const businessesBadge = businessesCard.querySelector('.roi-badge');
                const businessesScenario = businessesCard.querySelectorAll('p')[0];
                const businessesBenefitsList = businessesCard.querySelectorAll('.benefits-list li');
                const businessesMetric = businessesCard.querySelector('.metric');

                if (businessesH3) businessesH3.textContent = t.solutions.businesses;
                if (businessesBadge) businessesBadge.textContent = t.solutions.businessesBadge;
                if (businessesScenario) businessesScenario.innerHTML = '<strong>Real scenario:</strong> ' + t.solutions.businessesScenario.split(': ')[1];
                businessesBenefitsList.forEach((li, i) => {
                    if (t.solutions.businessesBenefits[i]) li.textContent = t.solutions.businessesBenefits[i];
                });
                if (businessesMetric) businessesMetric.innerHTML = 'Typical ROI: <strong>' + t.solutions.businessesROI.split(': ')[1].replace('ROI Típico: ', '').replace('Typical ROI: ', '') + '</strong>';
            }
        }

        if (section.classList.contains('liquids')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.liquids.title;

            const liquidCards = section.querySelectorAll('.liquid-card');
            if (liquidCards.length >= 6) {
                liquidCards[0].querySelector('h3').textContent = t.liquids.gasoline;
                liquidCards[0].querySelector('p').textContent = t.liquids.gasolineDesc;
                liquidCards[1].querySelector('h3').textContent = t.liquids.beer;
                liquidCards[1].querySelector('p').textContent = t.liquids.beerDesc;
                liquidCards[2].querySelector('h3').textContent = t.liquids.honey;
                liquidCards[2].querySelector('p').textContent = t.liquids.honeyDesc;
                liquidCards[3].querySelector('h3').textContent = t.liquids.molasses;
                liquidCards[3].querySelector('p').textContent = t.liquids.molassesDesc;
                liquidCards[4].querySelector('h3').textContent = t.liquids.chemicals;
                liquidCards[4].querySelector('p').textContent = t.liquids.chemicalsDesc;
                liquidCards[5].querySelector('h3').textContent = t.liquids.others;
                liquidCards[5].querySelector('p').textContent = t.liquids.othersDesc;
            }
        }

        if (section.classList.contains('key-features')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.features.title;

            const featureCards = section.querySelectorAll('.feature-card');
            if (featureCards.length >= 3) {
                featureCards[0].querySelector('h3').textContent = t.features.pressureTitle;
                featureCards[0].querySelector('p').textContent = t.features.pressureDesc;
                featureCards[1].querySelector('h3').textContent = t.features.temperatureTitle;
                featureCards[1].querySelector('p').textContent = t.features.temperatureDesc;
                featureCards[2].querySelector('h3').textContent = t.features.volumeTitle;
                featureCards[2].querySelector('p').textContent = t.features.volumeDesc;
            }
        }

        if (section.classList.contains('tech-highlights')) {
            const h2 = section.querySelector('h2');
            const subtitle = section.querySelector('.section-subtitle');
            if (h2) h2.textContent = t.techHighlights.title;
            if (subtitle) subtitle.textContent = t.techHighlights.subtitle;

            const techCards = section.querySelectorAll('.card');
            if (techCards.length >= 3) {
                techCards[0].querySelector('h3').textContent = t.techHighlights.predictiveTitle;
                techCards[0].querySelector('p').textContent = t.techHighlights.predictiveDesc;
                techCards[1].querySelector('h3').textContent = t.techHighlights.anomalyTitle;
                techCards[1].querySelector('p').textContent = t.techHighlights.anomalyDesc;
                techCards[2].querySelector('h3').textContent = t.techHighlights.automationTitle;
                techCards[2].querySelector('p').textContent = t.techHighlights.automationDesc;
            }
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

            const pricingCards = section.querySelectorAll('.pricing-card');
            if (pricingCards.length >= 3) {
                // Basis Card
                pricingCards[0].querySelector('h3').textContent = t.pricing.basis;
                const basicPrice = pricingCards[0].querySelector('.price');
                if (basicPrice) basicPrice.innerHTML = t.pricing.basisPrice + '<span>/mo</span>';
                const basicFeatures = pricingCards[0].querySelectorAll('.features-list li');
                basicFeatures.forEach((li, i) => {
                    if (t.pricing.basisFeatures[i]) li.textContent = t.pricing.basisFeatures[i];
                });

                // Pro Card
                pricingCards[1].querySelector('h3').textContent = t.pricing.pro;
                const proPrice = pricingCards[1].querySelector('.price');
                if (proPrice) proPrice.innerHTML = t.pricing.proPrice + '<span>/mo</span>';
                const proFeatures = pricingCards[1].querySelectorAll('.features-list li');
                proFeatures.forEach((li, i) => {
                    if (t.pricing.proFeatures[i]) li.textContent = t.pricing.proFeatures[i];
                });

                // Enterprise Card
                pricingCards[2].querySelector('h3').textContent = t.pricing.enterprise;
                const enterprisePrice = pricingCards[2].querySelector('.price');
                if (enterprisePrice) enterprisePrice.textContent = t.pricing.enterprisePrice;
                const enterpriseFeatures = pricingCards[2].querySelectorAll('.features-list li');
                enterpriseFeatures.forEach((li, i) => {
                    if (t.pricing.enterpriseFeatures[i]) li.textContent = t.pricing.enterpriseFeatures[i];
                });
            }

            // Actualizar botones de precios
            const pricingBtns = section.querySelectorAll('.btn');
            pricingBtns.forEach(btn => {
                btn.textContent = t.pricing.contactUs;
            });
        }

        if (section.classList.contains('faq')) {
            const h2 = section.querySelector('h2');
            if (h2) h2.textContent = t.faq.title;

            const faqItems = section.querySelectorAll('.faq-item');
            if (faqItems.length >= 3) {
                // FAQ 1
                faqItems[0].querySelector('.faq-question span:first-child').textContent = t.faq.q1;
                faqItems[0].querySelector('.faq-answer p').textContent = t.faq.a1;

                // FAQ 2
                faqItems[1].querySelector('.faq-question span:first-child').textContent = t.faq.q2;
                faqItems[1].querySelector('.faq-answer p').textContent = t.faq.a2;

                // FAQ 3
                faqItems[2].querySelector('.faq-question span:first-child').textContent = t.faq.q3;
                faqItems[2].querySelector('.faq-answer p').textContent = t.faq.a3;
            }
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
