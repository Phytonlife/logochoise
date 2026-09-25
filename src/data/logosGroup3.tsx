import React from 'react';
import { LogoDefinition, LogoRenderProps } from '../types';

export const logosGroup3: LogoDefinition[] = [
  {
    id: 'negative-space-optical',
    number: 11,
    title: 'Отрицательное пространство',
    subtitle: 'Умная оптическая иллюзия & Баланс',
    category: 'minimal',
    categoryLabel: 'Интеллектуальный минимал',
    description: 'Инженерная магия контрформы. Внутри капли цифры 6 в отрицательном пространстве скрыта точка и силуэт буквы "i", а дуга плавно замыкает букву "a". Знак раскрывается при внимательном взгляде.',
    culturalBackground: 'Школа логотипостроения FedEx, WWF и легендарного Пола Рэнда.',
    designHighlights: [
      'Внутренняя пустота цифры 6 формирует силуэт буквы',
      'Ни одной лишней линии — предельный лаконизм',
      'Мощный "вау-эффект" при распознавании скрытого смысла',
      'Идеальная читаемость в любом микро-масштабе'
    ],
    recommendedUse: 'Флагманские AI-исследования, венчурные фонды, продуктовые дизайн-студии.',
    defaultColors: {
      primary: '#10b981', // Изумруд
      secondary: '#ffffff',
      accent: '#064e3b',
      background: '#090d10',
      glow: 'rgba(16, 185, 129, 0.35)'
    },
    typography: {
      primary: 'Optical Counterform Sans',
      style: 'Intellectual Monolithic'
    },
    keywords: ['отрицательное пространство', 'иллюзия', 'минимал', 'умный', 'скрытый смысл', 'зеленый'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#10b981';
      const s = props.secondaryColor || '#ffffff';
      const bg = props.backgroundColor || '#090d10';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Focal emblem */}
          <g transform="translate(100, 40)">
            {/* The Solid 6 with carved out negative space */}
            <path
              d="M 60 10 C 20 10, 0 40, 0 85 C 0 125, 25 150, 65 150 C 105 150, 130 125, 130 85 C 130 45, 105 35, 75 35 C 50 35, 32 46, 28 65 C 28 40, 45 28, 65 28 C 72 28, 80 30, 85 32 L 85 10 Z"
              fill={p}
            />

            {/* Inner counter-space forming the hidden optical AI */}
            <circle cx="65" cy="92" r="32" fill={bg} />
            {/* Dot inside counter */}
            <circle cx="65" cy="80" r="10" fill={p} />
            <rect x="58" y="96" width="14" height="22" rx="4" fill={p} />

            {/* The external balanced 'a i' typography */}
            <g transform="translate(145, 10)">
              {/* Modern glyph 'a' */}
              <circle cx="40" cy="85" r="30" fill="none" stroke={s} strokeWidth="16" />
              <line x1="70" y1="55" x2="70" y2="115" stroke={s} strokeWidth="16" strokeLinecap="round" />

              {/* Modern glyph 'i' */}
              <line x1="110" y1="58" x2="110" y2="115" stroke={s} strokeWidth="16" strokeLinecap="round" />
              <circle cx="110" cy="30" r="8" fill={p} />
            </g>
          </g>

          <text x="200" y="214" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" letterSpacing="4">NEGATIVE SPACE • HIDDEN COGNITION</text>
        </svg>
      );
    }
  },
  {
    id: 'neural-synapse-bio',
    number: 12,
    title: 'Нейросеть & Био-синапсы',
    subtitle: 'Генеративный поток связей & Узлы ИИ',
    category: 'futuristic',
    categoryLabel: 'Нейросети & ИИ',
    description: 'Органическая визуализация мышления искусственного интеллекта. Плавные светящиеся аксоны и пульсирующие синаптические узлы сплетаются в органическую форму "6 ai", отражая глубокое обучение (Deep Learning).',
    culturalBackground: 'Биологические нейронные сети и архитектура мультимодальных моделей трансформеров.',
    designHighlights: [
      'Пульсирующие нейронные ядра с градиентным свечением',
      'Синаптические связи, соединяющие логические блоки',
      'Плавные динамические сплайны Безье',
      'Цветовая гамма спектра индиго, фиолетового и лазурного'
    ],
    recommendedUse: 'DeepTech, нейросетевые модели, биоинформатика, генеративный ИИ.',
    defaultColors: {
      primary: '#6366f1',
      secondary: '#a855f7',
      accent: '#38bdf8',
      background: '#090814',
      glow: 'rgba(99, 102, 241, 0.5)'
    },
    typography: {
      primary: 'Synaptic Fluid Spline',
      style: 'Bio-Organic Generative'
    },
    keywords: ['нейросеть', 'синапсы', 'ии', 'узлы', 'связи', 'градиент', 'фиолетовый'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#6366f1';
      const s = props.secondaryColor || '#a855f7';
      const a = props.accentColor || '#38bdf8';
      const bg = props.backgroundColor || '#090814';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuralFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={a} />
              <stop offset="40%" stopColor={p} />
              <stop offset="100%" stopColor={s} />
            </linearGradient>
            <filter id="synapseGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Ambient Synaptic Web */}
          <g opacity="0.25" stroke="#6366f1" strokeWidth="1">
            <line x1="60" y1="50" x2="130" y2="90" />
            <line x1="130" y1="90" x2="220" y2="70" />
            <line x1="220" y1="70" x2="310" y2="110" />
            <line x1="130" y1="170" x2="240" y2="160" />
            <line x1="240" y1="160" x2="330" y2="180" />
          </g>

          {/* Neural 6 ai Path */}
          <g filter="url(#synapseGlow)" transform="translate(75, 45)">
            {/* The 6 axon curve */}
            <path
              d="M 120 20 C 70 15, 30 50, 30 95 C 30 135, 65 155, 100 155 C 135 155, 160 130, 160 95 C 160 60, 130 45, 100 45 C 65 45, 40 70, 38 95"
              fill="none"
              stroke="url(#neuralFlow)"
              strokeWidth="11"
              strokeLinecap="round"
            />
            {/* Neural Nodes on 6 */}
            <circle cx="120" cy="20" r="7" fill={a} />
            <circle cx="30" cy="95" r="7" fill={p} />
            <circle cx="100" cy="155" r="7" fill={s} />
            <circle cx="160" cy="95" r="7" fill={a} />
            <circle cx="100" cy="45" r="7" fill={p} />

            {/* Neural 'a' */}
            <g transform="translate(170, 45)">
              <circle cx="30" cy="45" r="26" fill="none" stroke="url(#neuralFlow)" strokeWidth="10" />
              <line x1="56" y1="20" x2="56" y2="70" stroke="url(#neuralFlow)" strokeWidth="10" strokeLinecap="round" />
              <circle cx="56" cy="20" r="6" fill={a} />
              <circle cx="56" cy="70" r="6" fill={s} />
            </g>

            {/* Neural 'i' */}
            <g transform="translate(250, 45)">
              <line x1="10" y1="20" x2="10" y2="70" stroke="url(#neuralFlow)" strokeWidth="10" strokeLinecap="round" />
              <circle cx="10" cy="70" r="6" fill={p} />
              {/* Glowing Synapse Brain Spark on top of i */}
              <circle cx="10" cy="-4" r="8" fill={a} />
              <circle cx="10" cy="-4" r="14" fill={a} opacity="0.3" />
            </g>
          </g>

          <text x="200" y="215" textAnchor="middle" fill="#c084fc" fontSize="10" fontFamily="'Orbitron', sans-serif" letterSpacing="4">SYNAPTIC DEEP LEARNING • 6 AI</text>
        </svg>
      );
    }
  },
  {
    id: 'retro-crt-terminal',
    number: 13,
    title: 'Ретро-терминал / Зеленый CRT',
    subtitle: 'Люминофорная ЭЛТ-трубка & Хакерский моноширинный',
    category: 'futuristic',
    categoryLabel: 'Ретро-терминал & CRT',
    description: 'Вдохновлен монохромными терминалами IBM и DEC VT100 1970-х годов. Зеленое фосфорное свечение P1, горизонтальные строчные линии развертки (scanlines) и мигающий курсор командной строки.',
    culturalBackground: 'Зарождение компьютерной революции, Unix, ARPANET и истоки символьного искусственного интеллекта (LISP).',
    designHighlights: [
      'Эффект кинескопа со скругленными гранями экрана',
      'Аутентичные горизонтальные сканлайны развертки CRT',
      'Свечение зеленого люминофора P1 (Phosphor glow)',
      'Мигающий прямоугольный терминальный курсор prompt'
    ],
    recommendedUse: 'Инструменты для разработчиков, CLI утилиты, кибербезопасность, хакатоны.',
    defaultColors: {
      primary: '#22c55e',
      secondary: '#4ade80',
      accent: '#86efac',
      background: '#041007',
      glow: 'rgba(34, 197, 94, 0.5)'
    },
    typography: {
      primary: 'VT100 CRT Phosphor Monospace',
      style: 'Hacker Terminal Matrix'
    },
    keywords: ['терминал', 'crt', 'зеленый', 'сканлайны', 'хакер', 'фосфор', 'консоль'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#22c55e';
      const a = props.accentColor || '#86efac';
      const bg = props.backgroundColor || '#041007';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="crtBloom">
              <feGaussianBlur stdDeviation="3.5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id="scanlines" width="100" height="4" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="0" stroke="#000000" strokeWidth="1.2" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* CRT Monitor Bezels */}
          <rect x="25" y="20" width="350" height="200" rx="20" fill="#020904" stroke="#14532d" strokeWidth="2" />
          {/* Scanline overlay across monitor */}
          <rect x="26" y="21" width="348" height="198" rx="19" fill="url(#scanlines)" pointerEvents="none" />

          {/* Console Header Bar */}
          <text x="45" y="44" fill="#16a34a" fontSize="10" fontFamily="'JetBrains Mono', monospace">SYS://AI.TERMINAL.06 [READY]</text>
          <text x="320" y="44" fill="#16a34a" fontSize="10" fontFamily="'JetBrains Mono', monospace">9600 BAUD</text>
          <line x1="40" y1="52" x2="360" y2="52" stroke="#166534" strokeWidth="1" />

          {/* Main Phosphor Typography "6 ai" */}
          <g filter="url(#crtBloom)" transform="translate(85, 135)">
            <text x="0" y="0" fill={p} fontSize="76" fontFamily="'JetBrains Mono', monospace" fontWeight="800" letterSpacing="4">
              6_ai
            </text>
            {/* Blinking Prompt Cursor Block */}
            <rect x="210" y="-62" width="18" height="66" fill={a} opacity="0.9" />
          </g>

          {/* Status line */}
          <text x="45" y="195" fill="#4ade80" fontSize="9" fontFamily="'JetBrains Mono', monospace">
            $ root@matrix: ./launch_model --weights=v6.pt
          </text>
        </svg>
      );
    }
  },
  {
    id: 'soviet-constructivist-rodchenko',
    number: 14,
    title: 'Конструктивизм / Родченко',
    subtitle: 'Авангард 1920-х & Диагональная сила',
    category: 'artistic',
    categoryLabel: 'Авангард & Плакат',
    description: 'Вдохновлен революционным авангардом Александра Родченко, Эль Лисицкого и плакатами ВХУТЕМАС. Мощная 45-градусная диагональ, геометрический плакатный шрифт, сочетание кумачово-красного, угля и теплой газетной бумаги.',
    culturalBackground: 'Русский и мировой художественный авангард 1920-х годов: отказ от украшательства ради чистой динамической конструкции.',
    designHighlights: [
      'Динамический диагональный вектор 45° с мощным рупором',
      'Жесткие прямые срезы и плакатная архитектоника',
      'Плакатная палитра: кумач (#dc2626), сажа и крафт-крем',
      'Неповторимая энергия прорыва и созидания'
    ],
    recommendedUse: 'Медиа-агентства, дерзкие технологические манифесты, креативные продакшены.',
    defaultColors: {
      primary: '#dc2626', // Кумачовый красный
      secondary: '#fef3c7', // Газетный крем
      accent: '#18181b', // Сажа
      background: '#0e0b0b',
      glow: 'rgba(220, 38, 38, 0.4)'
    },
    typography: {
      primary: 'Constructivist Block Serif',
      style: 'Agit-Prop Avant-Garde'
    },
    keywords: ['конструктивизм', 'родченко', 'авангард', 'плакат', 'красный', 'диагональ', 'манифест'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#dc2626';
      const s = props.secondaryColor || '#fef3c7';
      const bg = props.backgroundColor || '#0e0b0b';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Constructivist Dynamic Diagonals & Geometric Wedges */}
          <polygon points="40,200 160,30 200,30 80,200" fill={p} opacity="0.9" />
          <polygon points="170,200 290,30 310,30 190,200" fill="#27272a" />
          <circle cx="280" cy="110" r="55" fill="none" stroke={p} strokeWidth="12" />

          {/* Blocky Typography "6 AI" */}
          <g transform="translate(90, 75)">
            {/* The Constructivist 6 */}
            <path d="M 60 10 L 15 10 L 15 85 L 75 85 L 75 42 L 35 42 L 35 65 L 55 65 L 55 58" fill="none" stroke={s} strokeWidth="16" strokeLinecap="square" strokeLinejoin="miter" />

            {/* The Avant-Garde 'A' */}
            <polygon points="125,10 100,85 118,85 125,60 145,60 152,85 170,85" fill={s} />
            <rect x="126" y="38" width="18" height="8" fill="#18181b" />

            {/* The Avant-Garde 'I' */}
            <rect x="185" y="10" width="18" height="75" fill={p} />
          </g>

          <text x="200" y="216" textAnchor="middle" fill={s} fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" letterSpacing="5">КОНСТРУКЦИЯ И РАЗУМ • 6 АИ</text>
        </svg>
      );
    }
  },
  {
    id: 'nordic-runes-minimal',
    number: 15,
    title: 'Скандинавские руны',
    subtitle: 'Северная геометрия & Ледниковый скол',
    category: 'cultural',
    categoryLabel: 'Скандинавский минимал',
    description: 'Вдохновлен древнескандинавскими руническими камнями Старшего Футарка и арктическим минимализмом. Рубленые геометрические грани без дуг, цвет ледникового льда и нерушимая надежность гранита.',
    culturalBackground: 'Руническая письменность викингов, где каждый знак нес в себе закон мироздания и магию памяти.',
    designHighlights: [
      'Полное отсутствие скруглений — только прямые сколы',
      'Ледниковый арктический градиент (циановый иней и сланец)',
      'Символика защиты, стойкости и неизменных алгоритмов',
      'Идеально подходит для северных брендов и надежных систем'
    ],
    recommendedUse: 'Инфраструктурные базы данных, кибербезопасность, скандинавские стартапы.',
    defaultColors: {
      primary: '#38bdf8',
      secondary: '#94a3b8',
      accent: '#e0f2fe',
      background: '#0b1118',
      glow: 'rgba(56, 189, 248, 0.4)'
    },
    typography: {
      primary: 'Elder Futhark Chiseled Angular',
      style: 'Nordic Monolithic Stone'
    },
    keywords: ['руны', 'скандинавский', 'северный', 'лед', 'геометрия', 'викинги', 'минимализм'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#38bdf8';
      const a = props.accentColor || '#e0f2fe';
      const bg = props.backgroundColor || '#0b1118';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="iceStone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={a} />
              <stop offset="50%" stopColor={p} />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Nordic Stone Runestone Inscription Border */}
          <polygon points="40,30 360,30 370,210 30,210" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="6 4" />

          {/* Runic Angular 6 ai Vector */}
          <g transform="translate(100, 48)">
            {/* The 6 as chiseled runic glyph */}
            <path
              d="M 50 15 L 20 50 L 20 115 L 65 140 L 95 115 L 95 70 L 65 50 L 20 80"
              fill="none"
              stroke="url(#iceStone)"
              strokeWidth="12"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            {/* Runic knot center */}
            <line x1="65" y1="50" x2="65" y2="140" stroke="url(#iceStone)" strokeWidth="6" />

            {/* Runic 'A' (Ansuz-inspired) */}
            <g transform="translate(115, 20)">
              <line x1="20" y1="0" x2="20" y2="120" stroke="url(#iceStone)" strokeWidth="12" strokeLinecap="square" />
              <line x1="20" y1="30" x2="60" y2="60" stroke="url(#iceStone)" strokeWidth="10" strokeLinecap="square" />
              <line x1="20" y1="65" x2="60" y2="95" stroke="url(#iceStone)" strokeWidth="10" strokeLinecap="square" />
            </g>

            {/* Runic 'I' (Isa-inspired rune of ice and stillness) */}
            <g transform="translate(195, 20)">
              <line x1="20" y1="0" x2="20" y2="120" stroke="url(#iceStone)" strokeWidth="12" strokeLinecap="square" />
              {/* Rune ice facet */}
              <polygon points="20,0 26,10 14,10" fill={a} />
              <polygon points="20,120 26,110 14,110" fill={a} />
            </g>
          </g>

          <text x="200" y="214" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="'Orbitron', monospace" letterSpacing="5">RUNIC CODE • ICE & IMMUTABILITY</text>
        </svg>
      );
    }
  }
];
