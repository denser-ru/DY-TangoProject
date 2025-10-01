/**
 * js/main.js
 * Сценарий Действия
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- ОБЪЯВЛЕНИЕ ДЕЙСТВУЮЩИХ ЛИЦ (Переменные) ---
    const prologue = document.getElementById('prologue');
    const langSwitcher = document.getElementById('lang-switcher');
    const textElements = document.querySelectorAll('[data-key]');
    const navTrigger = document.querySelector('.nav-trigger');
    const navOverlay = document.querySelector('.nav-overlay');
    const sections = document.querySelectorAll('main > section[id]');
    
    // Переменные для параллакса
    const dialogueSection = document.querySelector('.dialogue');
    const textureHe = document.querySelector('.dialogue__texture--he');
    const textureShe = document.querySelector('.dialogue__texture--she');


    let currentLang = 'ru'; // Язык по умолчанию

    // --- МЕХАНИКА I: УПРАВЛЕНИЕ ЯЗЫКОМ ---

    /**
     * Применяет переводы ко всем элементам с data-key.
     * @param {string} lang - Код языка (ru, en, es, pt).
     */
    function applyTranslations(lang) {
        if (typeof libretto === 'undefined') {
            console.error('Libretto is not loaded.');
            return;
        }

        textElements.forEach(el => {
            const key = el.dataset.key;
            if (libretto[lang] && libretto[lang][key]) {
                el.classList.add('is-fading');
                setTimeout(() => {
                    el.innerHTML = libretto[lang][key];
                    el.classList.remove('is-fading');
                }, 300);
            }
        });

        document.getElementById('lang-current').textContent = lang.toUpperCase();
        document.querySelectorAll('.lang-switcher__options a').forEach(a => {
            a.classList.toggle('is-active', a.dataset.lang === lang);
        });
    }

    /**
     * Устанавливает и сохраняет выбранный язык.
     * @param {string} lang - Код языка.
     */
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('selectedLang', lang);
        applyTranslations(lang);
    }

    /**
     * Логика Пролога: проверяет сохраненный язык или показывает экран выбора.
     */
    function handlePrologue() {
        const savedLang = localStorage.getItem('selectedLang');
        if (savedLang) {
            prologue.style.display = 'none';
            setLanguage(savedLang);
            document.body.classList.add('loaded');
        } else {
            document.body.classList.add('is-prologue-active');
            prologue.classList.add('is-entering');
            prologue.querySelectorAll('.prologue__lang-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    setLanguage(btn.dataset.lang);
                    prologue.classList.remove('is-entering');
                    prologue.classList.add('is-hidden');
                    document.body.classList.remove('is-prologue-active');
                    setTimeout(() => document.body.classList.add('loaded'), 1000);
                });
            });
        }
    }

    // Слушатель для Знака Библиотекаря
    langSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const newLang = e.target.dataset.lang;
            if (newLang !== currentLang) setLanguage(newLang);
        }
    });

    // --- МЕХАНИКА II: НАВИГАЦИЯ ---

    /**
     * Переключает состояние меню (открыто/закрыто).
     */
    function toggleMenu() {
        const isMenuOpen = document.body.classList.toggle('is-menu-open');
        navTrigger.setAttribute('aria-expanded', isMenuOpen);
        navOverlay.setAttribute('aria-hidden', !isMenuOpen);
    }

    // Слушатели для Режиссерского Пульта
    navTrigger.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', (e) => { if (e.target === navOverlay) toggleMenu(); });
    document.querySelectorAll('.nav-overlay a').forEach(link => link.addEventListener('click', toggleMenu));
    
    // Появление кнопки навигации при прокрутке
    window.addEventListener('scroll', () => {
        navTrigger.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.8);
    }, { passive: true });

    // --- МЕХАНИКА III: АНИМАЦИИ И ВЗАИМОДЕЙСТВИЯ ---

    // Общий наблюдатель за появлением секций
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => sectionObserver.observe(section));
    
    // ИСПРАВЛЕНИЕ: Восстановлен "Блуждающий фон" (Параллакс)
    function handleParallax() {
        if (!dialogueSection || !textureHe || !textureShe || window.innerWidth <= 768) return;
        const sectionTop = dialogueSection.offsetTop;
        const scrollY = window.scrollY;
        if (scrollY + window.innerHeight >= sectionTop && scrollY <= sectionTop + dialogueSection.offsetHeight) {
            const parallaxValue = (scrollY - sectionTop) * 0.2;
            textureHe.style.transform = `translateY(${parallaxValue}px)`;
            textureShe.style.transform = `translateY(${parallaxValue}px)`;
        }
    }
    window.addEventListener('scroll', handleParallax, { passive: true });


    // "Блуждающий фокус" для галереи на сенсорных устройствах
    if ('ontouchstart' in window) {
        const galleryItems = Array.from(document.querySelectorAll('.exposition__item'));
        let lastVisibleItem = null;

        const throttle = (func, limit) => {
            let inThrottle;
            return function() {
                if (!inThrottle) {
                    func.apply(this, arguments);
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

    // --- ЗАПУСК СПЕКТАКЛЯ ---
    handlePrologue();
});