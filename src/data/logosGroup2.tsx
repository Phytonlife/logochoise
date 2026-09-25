import React from 'react';
import { LogoDefinition, LogoRenderProps } from '../types';

export const logosGroup2: LogoDefinition[] = [
  {
    id: 'facebook-corporate-blue',
    number: 6,
    title: 'Корпоративный синий (Big Tech)',
    subtitle: 'Минимализм в стиле Facebook & Meta',
    category: 'minimal',
    categoryLabel: 'Корпоративный минимализм',
    description: 'Абсолютная чистота и монументальная уверенность гигантов Силиконовой Долины. Фирменный ультрамариновый скверкл (суперэллипс), безупречный кернинг и контрастная белая геометрическая типографика 6 ai.',
    culturalBackground: 'Дизайн-код глобальных технологических экосистем: простота, мгновенная узнаваемость с 16x16 px фавикона.',
    designHighlights: [
      'Геометрический скругленный сквиркл с оптическим радиусом',
      'Легкий глубокий градиент синего спектра (#1877F2 -> #085ad0)',
      'Сверхточная типографика с массивным штрихом цифры 6',
      'Идеально подходит для мобильных иконок и корпоративных систем'
    ],
    recommendedUse: 'Корпоративные SaaS, Enterprise AI, международные платформы, мобильные приложения.',
    defaultColors: {
      primary: '#1877F2',
      secondary: '#ffffff',
      accent: '#60a5fa',
      background: '#0a0e17',
      glow: 'rgba(24, 119, 242, 0.4)'
    },
    typography: {
      primary: 'Bold Corporate Neo-Grotesque',
      style: 'Ultra-Clean Geometric'
    },
    keywords: ['фейсбук', 'синий', 'корпоративный', 'минимализм', 'бигтех', 'иконка', 'простой'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#1877F2';
      const s = props.secondaryColor || '#ffffff';
      const bg = props.backgroundColor || '#0a0e17';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fbBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor={p} />
            </linearGradient>
            <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0284c7" floodOpacity="0.25" />
            </filter>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Corporate Squircle Tile */}
          <g filter="url(#cardShadow)" transform="translate(100, 32)">
            <rect x="0" y="0" width="200" height="150" rx="36" fill="url(#fbBlue)" />
            {/* Subtle top edge gloss */}
            <path d="M 36 2 L 164 2 Q 198 2 198 36 L 198 55 Q 100 65 2 55 L 2 36 Q 2 2 36 2 Z" fill="#ffffff" opacity="0.08" />

            {/* Typography "6 ai" */}
            <g transform="translate(24, 110)">
              {/* Bold 6 */}
              <text x="0" y="0" fill={s} fontSize="92" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" letterSpacing="-2">
                6
              </text>
              {/* 'ai' */}
              <text x="68" y="0" fill={s} fontSize="82" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" letterSpacing="-1">
                ai
              </text>
            </g>

            {/* Micro connectivity dot */}
            <circle cx="178" cy="32" r="5" fill="#38bdf8" />
          </g>

          <text x="200" y="214" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" letterSpacing="4">ENTERPRISE CLOUD • 6 AI</text>
        </svg>
      );
    }
  },
  {
    id: 'bauhaus-swiss-grid',
    number: 7,
    title: 'Швейцарский Баухаус',
    subtitle: 'Асимметричная сетка & Чистая форма',
    category: 'minimal',
    categoryLabel: 'Модернизм & Баухаус',
    description: 'Вдохновлен принципами швейцарской типографики 1950-х и школы Баухаус. Идеальная геометрия круга и квадрата, строгий контраст черного, слоновой кости и сигнального киноварного акцента.',
    culturalBackground: 'Школа Баухаус (Вальтер Гропиус) и Интернациональный типографический стиль (Йозеф Мюллер-Брокманн).',
    designHighlights: [
      'Цифра 6 собрана из чистого круга и касательного прямоугольника',
      'Акцентная точка над "i" в форме смещенного квадрата',
      'Сбалансированная асимметрия и свободное "дыхание" полей',
      'Вечный дизайн, не теряющий актуальности десятилетиями'
    ],
    recommendedUse: 'Архитектурные бюро, издательства, дизайн-системы, премиальные AI-инструменты.',
    defaultColors: {
      primary: '#ef4444',
      secondary: '#ffffff',
      accent: '#e2e8f0',
      background: '#111318',
      glow: 'rgba(239, 68, 68, 0.3)'
    },
    typography: {
      primary: 'Akzidenz / Helvetica Geometric',
      style: 'Constructed Primitives'
    },
    keywords: ['баухаус', 'швейцарский', 'сетка', 'красный', 'геометрия', 'круг', 'модернизм'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#ef4444';
      const s = props.secondaryColor || '#ffffff';
      const bg = props.backgroundColor || '#111318';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Swiss Grid lines background */}
          <line x1="60" y1="40" x2="60" y2="200" stroke="#262b36" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="200" y1="40" x2="200" y2="200" stroke="#262b36" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="340" y1="40" x2="340" y2="200" stroke="#262b36" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="40" y1="120" x2="360" y2="120" stroke="#262b36" strokeWidth="1" strokeDasharray="4 4" />

          {/* Composition */}
          <g transform="translate(80, 50)">
            {/* Bauhaus 6: Pure Circle + Left Arc */}
            <circle cx="50" cy="85" r="42" fill="none" stroke={s} strokeWidth="18" />
            <path d="M 50 43 C 25 43, 8 60, 8 85 L 8 10 C 8 10, 30 10, 50 10" fill="none" stroke={s} strokeWidth="18" strokeLinecap="square" />

            {/* Red Bauhaus Focal Accent */}
            <circle cx="50" cy="85" r="14" fill={p} />

            {/* Modernist 'a' */}
            <g transform="translate(130, 20)">
              <circle cx="35" cy="65" r="30" fill="none" stroke={s} strokeWidth="16" />
              <line x1="65" y1="35" x2="65" y2="95" stroke={s} strokeWidth="16" strokeLinecap="square" />
            </g>

            {/* Modernist 'i' with Bauhaus Red Square Dot */}
            <g transform="translate(225, 20)">
              <line x1="15" y1="42" x2="15" y2="95" stroke={s} strokeWidth="16" strokeLinecap="square" />
              <rect x="7" y="10" width="16" height="16" fill={p} />
            </g>
          </g>

          <text x="200" y="215" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" letterSpacing="5">BAUHAUS 1925 / 2026 • FORM FOLLOWS FUNCTION</text>
        </svg>
      );
    }
  },
  {
    id: 'japanese-hanko-seal',
    number: 8,
    title: 'Японская печать Ханко',
    subtitle: 'Нео-Токио & Киноварный оттиск',
    category: 'cultural',
    categoryLabel: 'Японская эстетика',
    description: 'Слияние традиционной японской именной печати (Hanko / Inkan) с киберпанком Нео-Токио. Квадратный киноварный штамп со скругленными гранями и каллиграфически выверенным знаком "6 ai".',
    culturalBackground: 'Японская культура личных печатей с тысячелетней историей подтверждения авторства и подлинности.',
    designHighlights: [
      'Стилизованный иероглифический росчерк цифры 6',
      'Текстура киноварного минерального пигмента (Shuniku vermilion)',
      'Символ подтвержденной аутентичности искусственного интеллекта',
      'Утонченная японская минималистичная каллиграфия'
    ],
    recommendedUse: 'AI безопасность, цифровая подпись, блокчейн, арт-проекты, японские рестораны и бренды.',
    defaultColors: {
      primary: '#dc2626', // Киноварь (вермильон)
      secondary: '#fee2e2',
      accent: '#f59e0b',
      background: '#0d0d11',
      glow: 'rgba(220, 38, 38, 0.4)'
    },
    typography: {
      primary: 'Kanji Brush Modernist',
      style: 'Traditional Seal Script'
    },
    keywords: ['япония', 'ханко', 'печать', 'киноварь', 'иероглиф', 'токио', 'штамп'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#dc2626';
      const bg = props.backgroundColor || '#0d0d11';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="vermilionStamp" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="70%" stopColor={p} />
              <stop offset="100%" stopColor="#991b1b" />
            </radialGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Traditional Inkan / Hanko Outer Cartouche */}
          <g transform="translate(130, 25)">
            <rect x="0" y="0" width="140" height="150" rx="28" fill="none" stroke="url(#vermilionStamp)" strokeWidth="8" />
            <rect x="8" y="8" width="124" height="134" rx="20" fill="url(#vermilionStamp)" opacity="0.12" />

            {/* Kanji-infused 6 ai Glyph */}
            <path
              d="M 68 28 C 42 28, 26 50, 26 80 C 26 108, 44 125, 70 125 C 96 125, 114 106, 114 80 C 114 54, 96 42, 70 42 C 55 42, 42 50, 36 62"
              fill="none"
              stroke="url(#vermilionStamp)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* The 'ai' brush character strokes */}
            <path d="M 45 82 Q 70 88 95 82" stroke="url(#vermilionStamp)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="70" cy="100" r="5" fill="url(#vermilionStamp)" />

            {/* Small Japanese seal kanji corner stamp (六 - Six) */}
            <g transform="translate(100, 18) scale(0.6)">
              <rect x="0" y="0" width="30" height="30" fill="url(#vermilionStamp)" rx="4" />
              <text x="15" y="22" textAnchor="middle" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">六</text>
            </g>
          </g>

          <text x="200" y="212" textAnchor="middle" fill="#f87171" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" letterSpacing="5">HANKO SEAL • 六 AI • VERIFIED ORIGIN</text>
        </svg>
      );
    }
  },
  {
    id: 'luxury-monogram-gold',
    number: 9,
    title: 'Люкс монограмма (Haute Horlogerie)',
    subtitle: 'Швейцарское золото & Высокая мода',
    category: 'artistic',
    categoryLabel: 'Люкс & Премиум',
    description: 'Эстетика швейцарских часовых мануфактур (Patek Philippe, Audemars Piguet) и парижских модных домов. Тонкие волосяные засечки, переплетенная монограмма "6" и "ai" в сияющем золоте шампань на фоне обсидиана.',
    culturalBackground: 'Высокое ремесло люксовых мануфактур Женевы и Вандомской площади.',
    designHighlights: [
      'Волосяные засечки (hairline serifs) и контраст штрихов',
      'Элегантное взаимное переплетение дуги 6 и буквы a',
      'Глубокий оттенок шампанского золота и платины',
      'Статус, закрытый клуб, исключительное качество'
    ],
    recommendedUse: 'Private AI banking, эксклюзивные клубы, люксовые консьержи, премиум недвижимость.',
    defaultColors: {
      primary: '#d4af37',
      secondary: '#fbf0b9',
      accent: '#997322',
      background: '#0a0a0c',
      glow: 'rgba(212, 175, 55, 0.35)'
    },
    typography: {
      primary: 'High Fashion Didone Monogram',
      style: 'Refined Luxury Serif'
    },
    keywords: ['люкс', 'золото', 'монограмма', 'часы', 'париж', 'премиум', 'элегантный'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#d4af37';
      const bg = props.backgroundColor || '#0a0a0c';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="luxuryChampagne" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="40%" stopColor={p} />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
            <radialGradient id="luxGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />
          <circle cx="200" cy="110" r="100" fill="url(#luxGlow)" />

          {/* Fine Guilloche luxury ring */}
          <circle cx="200" cy="108" r="82" fill="none" stroke="url(#luxuryChampagne)" strokeWidth="0.8" opacity="0.4" />
          <circle cx="200" cy="108" r="86" fill="none" stroke="url(#luxuryChampagne)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />

          {/* Interlocking Monogram 6 & AI */}
          <g transform="translate(130, 48)">
            {/* The 6 with high-contrast thick/thin strokes */}
            <path
              d="M 60 18 C 30 18, 10 45, 10 82 C 10 108, 28 124, 52 124 C 76 124, 94 106, 94 82 C 94 58, 76 42, 52 42 C 38 42, 26 49, 18 60 C 24 38, 42 26, 62 26 Z"
              fill="url(#luxuryChampagne)"
            />
            {/* Diamond terminal on top of 6 */}
            <polygon points="62,18 68,26 62,34 56,26" fill="url(#luxuryChampagne)" />

            {/* Letter 'a' in Didone style */}
            <g transform="translate(75, 42)">
              <text x="0" y="68" fill="url(#luxuryChampagne)" fontSize="68" fontFamily="'Cinzel', serif" fontStyle="italic" fontWeight="600">
                a
              </text>
            </g>

            {/* Letter 'i' with golden diamond dot */}
            <g transform="translate(118, 42)">
              <text x="0" y="68" fill="url(#luxuryChampagne)" fontSize="68" fontFamily="'Cinzel', serif" fontStyle="italic" fontWeight="600">
                i
              </text>
              <polygon points="12,10 16,16 12,22 8,16" fill="url(#luxuryChampagne)" />
            </g>
          </g>

          <text x="200" y="214" textAnchor="middle" fill="#d4af37" fontSize="10" fontFamily="'Cinzel', serif" letterSpacing="6">MAISON 6 AI • HAUTE INTELLIGENCE</text>
        </svg>
      );
    }
  },
  {
    id: 'retro-80s-synthwave',
    number: 10,
    title: 'Ретровейв / Мультиполосы 80-х',
    subtitle: 'Синтвейв & VHS неоновый закат',
    category: 'artistic',
    categoryLabel: 'Ретро & Синтвейв',
    description: 'Культовая эстетика 1980-х годов: параллельные неоновые скоростные полосы, теплый закатный градиент Майами (маджента, оранжевый, желтый) и динамика классических кассетных обложек.',
    culturalBackground: 'Золотая эра научной фантастики, аркадных автоматов Atari и синтвейв-саундтреков.',
    designHighlights: [
      'Четыре параллельные скоростные полосы, формирующие цифру 6',
      'Переход градиента от закатного солнца к неоновой ночи',
      'Динамический наклон курсива для ощущения скорости',
      'Идеально подходит для мерча, винила и гейминга'
    ],
    recommendedUse: 'Игры, музыкальный ИИ, медиа-продакшн, подкасты, креативные студии.',
    defaultColors: {
      primary: '#f43f5e',
      secondary: '#f97316',
      accent: '#eab308',
      background: '#0f0b1a',
      glow: 'rgba(244, 63, 94, 0.45)'
    },
    typography: {
      primary: 'Speed Multi-Ribbon 1984',
      style: 'Isometric Streamline'
    },
    keywords: ['ретро', 'синтвейв', '80е', 'полосы', 'градиент', 'майами', 'музыка'],
    renderSvg: (props: LogoRenderProps) => {
      const bg = props.backgroundColor || '#0f0b1a';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="synthGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
            <linearGradient id="retroHorizon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Synthwave Sunset Lines */}
          <line x1="40" y1="160" x2="360" y2="160" stroke="#8b5cf6" strokeWidth="1" opacity="0.4" />
          <line x1="70" y1="172" x2="330" y2="172" stroke="#8b5cf6" strokeWidth="1.2" opacity="0.3" />
          <line x1="110" y1="184" x2="290" y2="184" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.2" />

          {/* 4-Line Ribbon 6 ai */}
          <g transform="translate(90, 46) skewX(-10)">
            {/* 4 Multi-stripes for 6 */}
            <path d="M 65 20 C 35 20, 15 45, 15 80 C 15 110, 35 125, 65 125 C 95 125, 115 105, 115 80 C 115 55, 95 40, 65 40 C 45 40, 30 50, 22 65" fill="none" stroke="#f43f5e" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 65 26 C 40 26, 21 48, 21 80 C 21 106, 38 120, 65 120 C 90 120, 109 102, 109 80 C 109 58, 90 46, 65 46 C 48 46, 35 54, 28 67" fill="none" stroke="#f97316" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 65 32 C 45 32, 27 51, 27 80 C 27 102, 42 114, 65 114 C 86 114, 103 98, 103 80 C 103 62, 86 52, 65 52 C 52 52, 41 58, 35 69" fill="none" stroke="#fb923c" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 65 38 C 50 38, 33 54, 33 80 C 33 98, 46 108, 65 108 C 82 108, 97 94, 97 80 C 97 66, 82 58, 65 58 C 55 58, 47 62, 42 71" fill="none" stroke="#facc15" strokeWidth="4.5" strokeLinecap="round" />

            {/* Letter 'a' with multi-stripes */}
            <g transform="translate(135, 45)">
              <path d="M 45 35 C 45 15, 30 5, 15 5 C 0 5, -10 15, -10 25 C -10 40, 10 45, 45 42 L 45 75 M 45 45 C 30 55, -8 60, -8 40" fill="none" stroke="url(#synthGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Letter 'i' with sunset dot */}
            <g transform="translate(205, 45)">
              <line x1="0" y1="20" x2="0" y2="75" stroke="url(#synthGrad)" strokeWidth="12" strokeLinecap="round" />
              <circle cx="0" cy="0" r="7" fill="#facc15" />
            </g>
          </g>

          <text x="200" y="214" textAnchor="middle" fill="#fb7185" fontSize="10" fontFamily="'Orbitron', sans-serif" fontWeight="700" letterSpacing="4">SYNTHWAVE 1984 • SPEED & COGNITION</text>
        </svg>
      );
    }
  }
];
