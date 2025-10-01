/**
 * js/libretto.js
 * Либретто Спектакля
 */

const libretto = {
  // --- Русский (RU) ---
  ru: {
    // Навигация
    menu_intro: "Представление",
    menu_repertoire: "Репертуар",
    menu_exposition: "Галерея",
    menu_collaboration: "Сотрудничество",
    menu_contact: "Антракт",
    
    // Увертюра
    tagline: "Где танец обретает голос.",

    // Представление
    intro_headline: "Денис и Йесика",
    intro_tagline: "Аргентинское танго: Слияние двух миров.",
    intro_paragraph_1: "Их партнерство — это редкий союз математической точности и природной интуиции. Он — архитектор танца, создающий безупречную структуру из линий и векторов. Она — душа этой структуры, наполняющая ее живым дыханием, эмоцией и смыслом. Каждое их выступление — это не просто танец. Это диалог между логикой и стихией, рождающий на глазах зрителя абсолютную гармонию.",
    intro_paragraph_2: "За плечами артистов — многолетняя практика под руководством легендарных маэстро Буэнос-Айреса и победы на престижных международных фестивалях. Этот опыт позволил им создать уникальную авторскую методику преподавания, основанную на глубоком понимании биомеханики тела и психологии партнерства.",
    
    // Репертуар
    repertoire_show_title: "Шоу \"Слияние Двух Миров\"",
    repertoire_show_desc: "Визуально-танцевальный спектакль, рассказывающий историю о встрече двух противоположностей — льда и пламени, структуры и стихии. Вас ждет драматическая хореография, отточенная техника и музыка, проникающая в самое сердце.",
    repertoire_show_details: "Продолжительность: 15-20 минут (2-3 номера). Идеально для кульминации вашего вечера.",
    repertoire_mc_title: "Мастер-класс \"Алхимия Танго\"",
    repertoire_mc_desc: "Больше, чем урок танцев. Это интерактивный опыт для гостей вашего мероприятия, где мы учим не шагам, а языку невербального общения. Увлекательное погружение в мир доверия, импульса и партнерства, доступное абсолютно для любого уровня подготовки.",
    repertoire_mc_details: "Продолжительность: от 45 до 90 минут. Количество участников: до 30 человек.",
    
    // Экспозиция
    exposition_title: "Галерея Моментов",
    expo_space: "Пространство",
    expo_whisper: "Шёпот",
    expo_hands: "Прикосновение",
    expo_memory: "Память",
    expo_geometry: "Геометрия",

    // Сотрудничество
    collaboration_title: "Для вашего события",
    collab_item_1: "Шоу-номера для корпоративных и частных мероприятий.",
    collab_item_2: "Интерактивные танцевальные мастер-классы для гостей.",
    collab_item_3: "Эксклюзивная постановка свадебного танца.",
    collab_item_4: "Участие в фото-, видео- и рекламных проектах.",
    collab_item_5: "Персональный коучинг и подготовка пар.",
    collaboration_cta: "Чтобы обсудить детали и получить персональное предложение — <a href='#contact'>продолжим диалог</a>.",

    // Антракт
    contact_title: "Начать Диалог",
    contact_email: "contact @ dy-tango.art"
  },

  // --- English (EN) ---
  en: {
    // Navigation
    menu_intro: "Introduction",
    menu_repertoire: "Repertoire",
    menu_exposition: "Gallery",
    menu_collaboration: "Collaboration",
    menu_contact: "Intermission",

    // Overture
    tagline: "Where dance finds its voice.",
    
    // Introduction
    intro_headline: "Denis & Yesica",
    intro_tagline: "Argentine Tango: The Fusion of Two Worlds.",
    intro_paragraph_1: "Their partnership is a rare union of mathematical precision and natural intuition. He is the architect of the dance, creating a flawless structure of lines and vectors. She is the soul of that structure, filling it with living breath, emotion, and meaning. Every performance is more than just a dance. It is a dialogue between logic and an elemental force, creating absolute harmony before the audience's eyes.",
    intro_paragraph_2: "Their path is defined by years of practice under the guidance of legendary maestros from Buenos Aires and victories at prestigious international festivals. This experience has allowed them to create a unique signature teaching method, based on a deep understanding of body biomechanics and the psychology of partnership.",
    
    // Repertoire
    repertoire_show_title: "Show \"The Fusion of Two Worlds\"",
    repertoire_show_desc: "A visual dance narrative that tells the story of two opposites meeting—ice and flame, structure and nature. Expect dramatic choreography, refined technique, and music that pierces the heart.",
    repertoire_show_details: "Duration: 15-20 minutes (2-3 pieces). Perfect for the grand finale of your evening.",
    repertoire_mc_title: "Masterclass \"The Alchemy of Tango\"",
    repertoire_mc_desc: "More than a dance lesson. This is an interactive experience for your event's guests, where we teach the language of non-verbal communication, not just steps. An engaging immersion into a world of trust, impulse, and connection, accessible to all skill levels.",
    repertoire_mc_details: "Duration: from 45 to 90 minutes. Number of participants: up to 30 people.",

    // Exposition
    exposition_title: "Gallery of Moments",
    expo_space: "Space",
    expo_whisper: "Whisper",
    expo_hands: "Touch",
    expo_memory: "Memory",
    expo_geometry: "Geometry",

    // Collaboration
    collaboration_title: "For Your Event",
    collab_item_1: "Show performances for corporate and private events.",
    collab_item_2: "Interactive dance masterclasses for guests.",
    collab_item_3: "Exclusive wedding dance choreography.",
    collab_item_4: "Participation in photo, video, and advertising projects.",
    collab_item_5: "Personal coaching and preparation for couples.",
    collaboration_cta: "To discuss the details and receive a personal offer — <a href='#contact'>let's continue the dialogue</a>.",

    // Intermission
    contact_title: "Start a Dialogue",
    contact_email: "contact @ dy-tango.art"
  },

  // --- Español (ES) ---
  es: {
    // Navegación
    menu_intro: "Presentación",
    menu_repertoire: "Repertorio",
    menu_exposition: "Galería",
    menu_collaboration: "Colaboración",
    menu_contact: "Intermedio",

    // Obertura
    tagline: "Donde la danza encuentra su voz.",

    // Presentación
    intro_headline: "Denis y Yesica",
    intro_tagline: "Tango Argentino: La Fusión de Dos Mundos.",
    intro_paragraph_1: "Su unión en el baile es una rara alianza entre la precisión matemática y la intuición natural. Él es el arquitecto de la danza, creando una estructura impecable de líneas y vectores. Ella es el alma de esa estructura, infundiéndole aliento vital, emoción y sentido. Cada actuación es más que un baile. Es un diálogo entre la lógica y la fuerza elemental, que da a luz a una armonía absoluta ante los ojos del espectador.",
    intro_paragraph_2: "Su trayectoria está marcada por años de práctica bajo la guía de legendarios maestros de Buenos Aires y victorias en prestigiosos festivales internacionales. Esta experiencia les ha permitido crear un método de enseñanza de autor único, basado en una profunda comprensión de la biomecánica corporal y la psicología de la pareja.",

    // Repertorio
    repertoire_show_title: "Show \"Fusión de Dos Mundos\"",
    repertoire_show_desc: "Un espectáculo de danza visual que narra la historia del encuentro de dos opuestos: el hielo y el fuego, la estructura y el instinto. Le espera una coreografía dramática, una técnica pulida y una música que llega al corazón.",
    repertoire_show_details: "Duración: 15-20 minutos (2-3 piezas). Ideal para la culminación de su velada.",
    repertoire_mc_title: "Clase Magistral \"Alquimia del Tango\"",
    repertoire_mc_desc: "Más que una clase de baile. Es una experiencia interactiva para los invitados de su evento, donde no enseñamos pasos, sino el lenguaje de la comunicación no verbal. Una inmersión fascinante en el mundo de la confianza, el impulso y la conexión, accesible para absolutamente todos los niveles.",
    repertoire_mc_details: "Duración: de 45 a 90 minutos. Número de participantes: hasta 30 personas.",

    // Exposición
    exposition_title: "Galería de Momentos",
    expo_space: "Espacio",
    expo_whisper: "Susurro",
    expo_hands: "Contacto",
    expo_memory: "Recuerdo",
    expo_geometry: "Geometría",

    // Colaboración
    collaboration_title: "Para su evento",
    collab_item_1: "Shows para eventos corporativos y privados.",
    collab_item_2: "Clases magistrales de baile interactivas para invitados.",
    collab_item_3: "Coreografía exclusiva para el baile de bodas.",
    collab_item_4: "Participación en proyectos de foto, video y publicidad.",
    collab_item_5: "Coaching personal y preparación de parejas.",
    collaboration_cta: "Para discutir los detalles y recibir una propuesta personalizada — <a href='#contact'>continuemos el diálogo</a>.",

    // Intermedio
    contact_title: "Iniciar un Diálogo",
    contact_email: "contact @ dy-tango.art"
  },

  // --- Português (PT) ---
  pt: {
    // Navegação
    menu_intro: "Apresentação",
    menu_repertoire: "Repertório",
    menu_exposition: "Galeria",
    menu_collaboration: "Colaboração",
    menu_contact: "Intervalo",

    // Abertura
    tagline: "Onde a dança encontra a sua voz.",

    // Apresentação
    intro_headline: "Denis e Yesica",
    intro_tagline: "Tango Argentino: A Fusão de Dois Mundos.",
    intro_paragraph_1: "A parceria deles é uma rara união de precisão matemática e intuição natural. Ele é o arquiteto da dança, criando uma estrutura impecável de linhas e vetores. Ela é a alma dessa estrutura, preenchendo-a com um sopro de vida, emoção e significado. Cada apresentação é mais do que uma simples dança. É um diálogo entre a lógica e a força elemental, criando uma harmonia absoluta diante dos olhos do público.",
    intro_paragraph_2: "Sua trajetória é marcada por anos de prática sob a orientação de lendários mestres de Buenos Aires e vitórias em prestigiosos festivais internacionais. Essa experiência permitiu que criassem um método de ensino autoral único, baseado em uma profunda compreensão da biomecânica corporal e da psicologia da parceria.",
    
    // Repertório
    repertoire_show_title: "Show \"A Fusão de Dois Mundos\"",
    repertoire_show_desc: "Um espetáculo de dança visual que conta a história do encontro de dois opostos — gelo e fogo, estrutura e natureza. Espere uma coreografia dramática, técnica apurada e uma música que toca o coração.",
    repertoire_show_details: "Duração: 15-20 minutos (2-3 números). Perfeito para o clímax da sua noite.",
    repertoire_mc_title: "Masterclass \"Alquimia do Tango\"",
    repertoire_mc_desc: "Mais do que uma aula de dança. É uma experiência interativa para os convidados do seu evento, onde não ensinamos passos, mas a linguagem da comunicação não-verbal. Uma imersão fascinante no mundo da confiança, do impulso e da conexão, acessível para absolutamente todos os níveis de preparação.",
    repertoire_mc_details: "Duração: de 45 a 90 minutos. Número de participantes: até 30 pessoas.",

    // Exposição
    exposition_title: "Galeria de Momentos",
    expo_space: "Espaço",
    expo_whisper: "Sussurro",
    expo_hands: "Toque",
    expo_memory: "Memória",
    expo_geometry: "Geometria",

    // Colaboração
    collaboration_title: "Para o seu evento",
    collab_item_1: "Apresentações de show para eventos corporativos e privados.",
    collab_item_2: "Masterclasses de dança interativas para convidados.",
    collab_item_3: "Coreografia exclusiva para a dança de casamento.",
    collab_item_4: "Participação em projetos de fotografia, vídeo e publicidade.",
    collab_item_5: "Coaching pessoal e preparação de casais.",
    collaboration_cta: "Para discutir os detalhes e receber uma proposta personalizada — <a href='#contact'>vamos continuar o diálogo</a>.",

    // Intervalo
    contact_title: "Iniciar um Diálogo",
    contact_email: "contact @ dy-tango.art"
  }
};