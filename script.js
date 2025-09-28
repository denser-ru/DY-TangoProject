
const libretto = { ru: { tagline: "Где код встречается с тишиной, а алгоритм — с танцем.", his_monologue_1: "Структура — это не ограничение. Это скелет, дающий форму хаосу. Каждая строка, каждый узел в сети — это мысль, обретшая вес и направление. Логика — это поэзия точности.", his_monologue_2: "Я строю миры из нулей и единиц, где нет места двусмысленности. Чистая функция. Неоспоримый результат.", her_monologue_1: "Ритм — это непредсказуемость, заключенная в паттерн. Он рождается в паузе, в дыхании между ударами сердца. В трещине на камне, в изгибе дыма. Красота — это погрешность в идеальной системе.", her_monologue_2: "Я нахожу гармонию в спонтанности, где случайность становится единственно верным движением.", menu_overture: "Увертюра", menu_dialogue: "Диалог", menu_exposition: "Экспозиция", menu_contact: "Антракт", exposition_title: "Зал Тишины", contact_title: "Продолжить диалог", expo_storm: "Шторм", expo_whisper: "Шёпот", expo_geometry: "Геометрия", expo_space: "Пространство", expo_memory: "Память" }, en: { tagline: "Where code meets silence, and the algorithm meets the dance.", his_monologue_1: "Structure is not a limitation. It is the skeleton that gives form to chaos. Every line, every node in the network is a thought that has gained weight and direction. Logic is the poetry of precision.", his_monologue_2: "I build worlds from zeros and ones, where there is no room for ambiguity. Pure function. Undeniable result.", her_monologue_1: "Rhythm is unpredictability enclosed in a pattern. It is born in the pause, in the breath between heartbeats. In the crack on a stone, in the curve of smoke. Beauty is the flaw in a perfect system.", her_monologue_2: "I find harmony in spontaneity, where chance becomes the only true movement.", menu_overture: "Overture", menu_dialogue: "Dialogue", menu_exposition: "Exposition", menu_contact: "Intermission", exposition_title: "The Hall of Silence", contact_title: "Continue the Dialogue", expo_storm: "Storm", expo_whisper: "Whisper", expo_geometry: "Geometry", expo_space: "Space", expo_memory: "Memory" }, es: { tagline: "Donde el código se encuentra con el silencio, y el algoritmo con la danza.", his_monologue_1: "La estructura no es una limitación. Es el esqueleto que da forma al caos. Cada línea, cada nodo en la red es un pensamiento que ha ganado peso y dirección. La lógica es la poesía de la precisión.", his_monologue_2: "Construyo mundos de ceros y unos, donde no hay lugar para la ambigüedad. Función pura. Resultado innegable.", her_monologue_1: "El ritmo es la imprevisibilidad encerrada en un patrón. Nace en la pausa, en el aliento entre latidos. En la grieta de una piedra, en la curva del humo. La belleza es el defecto en un sistema perfecto.", her_monologue_2: "Encuentro la armonía en la espontaneidad, donde el azar se convierte en el único movimiento verdadero.", menu_overture: "Obertura", menu_dialogue: "Diálogo", menu_exposition: "Exposición", menu_contact: "Intermedio", exposition_title: "La Sala del Silencio", contact_title: "Continuar el Diálogo", expo_storm: "Tormenta", expo_whisper: "Susurro", expo_geometry: "Geometría", expo_space: "Espacio", expo_memory: "Recuerdo" }, pt: { tagline: "Onde o código encontra o silêncio, e o algoritmo encontra a dança.", his_monologue_1: "A estrutura не é uma limitação. É o esqueleto que dá forma ao caos. Cada linha, cada nó na rede é um pensamento que ganhou peso e direção. A lógica é a poesia da precisão.", his_monologue_2: "Eu construo mundos de zeros e uns, onde não há espaço para ambiguidade. Função pura. Resultado inegável.", her_monologue_1: "O ritmo é a imprevisibilidade contida num padrão. Nasce na pausa, na respiração entre os batimentos cardíacos. Na fenda de uma pedra, na curva da fumaça. A beleza é a falha num sistema perfeito.", her_monologue_2: "Encontro harmonia na espontaneidade, onde o acaso se torna o único movimento verdadeiro.", menu_overture: "Abertura", menu_dialogue: "Diálogo", menu_exposition: "Exposição", menu_contact: "Intervalo", exposition_title: "A Sala do Silêncio", contact_title: "Continuar o Diálogo", expo_storm: "Tempestade", expo_whisper: "Sussurro", expo_geometry: "Geometria", expo_space: "Espaço", expo_memory: "Memória" } };

document.addEventListener('DOMContentLoaded', () => {
    const prologue = document.getElementById('prologue');
    const langSwitcher = document.getElementById('lang-switcher');
    const textElements = document.querySelectorAll('[data-key]');
    const dialogueSection = document.querySelector('.dialogue');
    const expositionSection = document.querySelector('.exposition');
    const contactSection = document.querySelector('.contact');
    const navTrigger = document.querySelector('.nav-trigger');
    const navOverlay = document.querySelector('.nav-overlay');
    const emailLink = document.querySelector('.contact__email a');
    let currentLang = 'ru';

    function applyTranslations(lang) { textElements.forEach(el => { const key = el.dataset.key; if (libretto[lang] && libretto[lang][key]) { el.classList.add('is-fading'); setTimeout(() => { el.innerHTML = libretto[lang][key]; el.classList.remove('is-fading'); }, 300); } }); document.getElementById('lang-current').textContent = lang.toUpperCase(); document.querySelectorAll('.lang-switcher__options a').forEach(a => a.classList.toggle('is-active', a.dataset.lang === lang)); }
    function setLanguage(lang) { currentLang = lang; localStorage.setItem('selectedLang', lang); applyTranslations(lang); }
    function handlePrologue() { const savedLang = localStorage.getItem('selectedLang'); if (savedLang) { prologue.style.display = 'none'; setLanguage(savedLang); document.body.classList.add('loaded'); } else { document.body.classList.add('is-prologue-active'); prologue.classList.add('is-entering'); prologue.querySelectorAll('.prologue__lang-btn').forEach(btn => { btn.addEventListener('click', () => { setLanguage(btn.dataset.lang); prologue.classList.remove('is-entering'); prologue.classList.add('is-hidden'); document.body.classList.remove('is-prologue-active'); setTimeout(() => document.body.classList.add('loaded'), 1000); }); }); } }
    langSwitcher.addEventListener('click', (e) => { if (e.target.tagName === 'A') { e.preventDefault(); const newLang = e.target.dataset.lang; if (newLang !== currentLang) setLanguage(newLang); } });
    function toggleMenu() { const isMenuOpen = document.body.classList.toggle('is-menu-open'); navTrigger.setAttribute('aria-expanded', isMenuOpen); navOverlay.setAttribute('aria-hidden', !isMenuOpen); }
    navTrigger.addEventListener('click', toggleMenu); navOverlay.addEventListener('click', (e) => { if (e.target === navOverlay) toggleMenu(); }); document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', toggleMenu));
    window.addEventListener('scroll', () => navTrigger.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.5), { passive: true });

    const sectionObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); sectionObserver.unobserve(entry.target); } }); }, { threshold: 0.2 });
    if (dialogueSection) sectionObserver.observe(dialogueSection);
    if (expositionSection) sectionObserver.observe(expositionSection);
    if (contactSection) sectionObserver.observe(contactSection);

    // ИСПРАВЛЕНИЕ: Новая механика "блуждающего фокуса" для сенсорных устройств
    if ('ontouchstart' in window) {
        const galleryItems = Array.from(document.querySelectorAll('.exposition__item'));
        let lastVisibleItem = null;

        const throttle = (func, limit) => {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            }
        };

        const handleScrollFocus = () => {
            const viewportCenter = window.innerHeight / 2;
            let closestItem = null;
            let minDistance = Infinity;

            galleryItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                // Учитываем только видимые элементы
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const itemCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(viewportCenter - itemCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestItem = item;
                    }
                }
            });

            if (closestItem && closestItem !== lastVisibleItem) {
                galleryItems.forEach(item => item.classList.remove('is-active'));
                closestItem.classList.add('is-active');
                lastVisibleItem = closestItem;
            }
        };

        window.addEventListener('scroll', throttle(handleScrollFocus, 100), { passive: true });
    }

    if (emailLink) { emailLink.addEventListener('click', function () { emailLink.classList.add('is-clicked'); emailLink.addEventListener('animationend', () => { emailLink.classList.remove('is-clicked'); }, { once: true }); }); }
    const textureHe = document.querySelector('.dialogue__texture--he'); const textureShe = document.querySelector('.dialogue__texture--she');
    function handleParallax() { if (!dialogueSection || !textureHe || !textureShe || window.innerWidth <= 768) return; const sectionTop = dialogueSection.offsetTop; const scrollY = window.scrollY; if (scrollY + window.innerHeight >= sectionTop && scrollY <= sectionTop + dialogueSection.offsetHeight) { const parallaxValue = (scrollY - sectionTop) * 0.2; textureHe.style.transform = `translateY(${parallaxValue}px)`; textureShe.style.transform = `translateY(${parallaxValue}px)`; } }
    window.addEventListener('scroll', handleParallax, { passive: true });

    handlePrologue();
});