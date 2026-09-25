import React from 'react';
import { LogoDefinition, LogoRenderProps } from '../types';

export const logosGroup1: LogoDefinition[] = [
  {
    id: 'bus-led-matrix',
    number: 1,
    title: 'Автобусный LED-матричный',
    subtitle: 'Маршрутоуказатель & Электронное табло',
    category: 'futuristic',
    categoryLabel: 'Технологии & LED',
    description: 'Аутентичный светящийся точечный шрифт, вдохновленный цифровыми табло городских автобусов и скоростных экспрессов. Теплый янтарный светодиодный кластер с реалистичной пиксельной сеткой и дорожным индикатором.',
    culturalBackground: 'Городской транзитный индастриал и эстетика светодиодных дисплеев 90-х и 2000-х годов.',
    designHighlights: [
      'Точечная сетка 5x7 для каждого символа',
      'Эффект физического светодиодного ореола (LED glow bloom)',
      'Индикатор маршрута "EXPRESS 06" над табло',
      'Текстура защитного антибликового стекла табло'
    ],
    recommendedUse: 'Транспортные платформы, AI-логистика, hardware стартапы, ретро-технологии.',
    defaultColors: {
      primary: '#ffaa00',
      secondary: '#ff7700',
      accent: '#ffe580',
      background: '#0d0f12',
      glow: 'rgba(255, 170, 0, 0.45)'
    },
    typography: {
      primary: '5x7 Dot Matrix LED',
      style: 'Digital Monospace'
    },
    keywords: ['автобус', 'led', 'точки', 'табло', 'маршрут', 'янтарный', 'пиксели'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#ffaa00';
      const a = props.accentColor || '#ffe580';
      const bg = props.backgroundColor || '#0a0d14';
      const glow = props.glowIntensity ?? 1;

      // 6 ai dot patterns
      // 6: rows 0..6
      const dots6 = [
        [1,1,1,1],[1,0,0,0],[1,0,0,0],[1,1,1,1],[1,0,0,1],[1,0,0,1],[1,1,1,1]
      ];
      // a:
      const dotsA = [
        [0,0,0,0],[0,0,0,0],[0,1,1,1],[0,0,0,1],[0,1,1,1],[1,0,0,1],[0,1,1,1]
      ];
      // i:
      const dotsI = [
        [0,1,0],[0,0,0],[1,1,0],[0,1,0],[0,1,0],[0,1,0],[1,1,1]
      ];

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id={`led-glow-${props.primaryColor || 'default'}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation={3 * glow} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="ledGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor={a} />
              <stop offset="60%" stopColor={p} />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />
          {/* Outer sign frame */}
          <rect x="16" y="16" width="368" height="208" rx="10" fill="#030712" stroke="#1f2937" strokeWidth="2.5" />
          <line x1="16" y1="46" x2="384" y2="46" stroke="#1f2937" strokeWidth="1.5" />
          
          {/* Header indicator */}
          <text x="32" y="36" fill="#9ca3af" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="2">ROUTE 06 • AI EXPRESS LINE</text>
          <circle cx="360" cy="32" r="4" fill="#22c55e" />
          <text x="330" y="35" fill="#22c55e" fontSize="9" fontFamily="'JetBrains Mono', monospace">ACTIVE</text>

          {/* Matrix Area */}
          <g filter={`url(#led-glow-${props.primaryColor || 'default'})`} transform="translate(68, 62)">
            {/* Draw 6 */}
            {dots6.map((row, r) => 
              row.map((val, c) => (
                <circle 
                  key={`6-${r}-${c}`} 
                  cx={c * 18} 
                  cy={r * 18} 
                  r="6.5" 
                  fill={val ? 'url(#ledGrad)' : '#1a1f2c'} 
                  opacity={val ? 1 : 0.25}
                />
              ))
            )}

            {/* Gap spacer */}
            {/* Draw a */}
            {dotsA.map((row, r) => 
              row.map((val, c) => (
                <circle 
                  key={`a-${r}-${c}`} 
                  cx={110 + c * 18} 
                  cy={r * 18} 
                  r="6.5" 
                  fill={val ? 'url(#ledGrad)' : '#1a1f2c'} 
                  opacity={val ? 1 : 0.25}
                />
              ))
            )}

            {/* Draw i */}
            {dotsI.map((row, r) => 
              row.map((val, c) => (
                <circle 
                  key={`i-${r}-${c}`} 
                  cx={204 + c * 18} 
                  cy={r * 18} 
                  r="6.5" 
                  fill={val ? 'url(#ledGrad)' : '#1a1f2c'} 
                  opacity={val ? 1 : 0.25}
                />
              ))
            )}
          </g>

          {/* Bus LED grill mesh effect */}
          <line x1="20" y1="200" x2="380" y2="200" stroke="#111827" strokeWidth="1" />
          <text x="200" y="215" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="3">DOT MATRIX DISPLAY • 6 AI</text>
        </svg>
      );
    }
  },
  {
    id: 'cyber-minimal-neon',
    number: 2,
    title: 'Минималистичный неон',
    subtitle: 'Футуристичный кибер-контур',
    category: 'futuristic',
    categoryLabel: 'Неон & Киберпанк',
    description: 'Ультра-чистая непрерывная светящаяся неоновая трубка. Минималистичные геометрические контуры с градиентным переливом от электрического циана к неоновому маджента.',
    culturalBackground: 'Эстетика неонового Токио 2099 года и минималистичного интерфейсного киберпанка.',
    designHighlights: [
      'Двойной контур неоновой трубки со стеклянным ядром',
      'Изогнутый плавный хвост цифры 6, перетекающий в букву a',
      'Точка над "i" в виде неонового светового импульса',
      'Глубокий темный фон с отражением света'
    ],
    recommendedUse: 'AI агенты, развлекательные сервисы, ночные бренды, gaming & tech.',
    defaultColors: {
      primary: '#06b6d4',
      secondary: '#d946ef',
      accent: '#ffffff',
      background: '#030712',
      glow: 'rgba(6, 182, 212, 0.6)'
    },
    typography: {
      primary: 'Neon Monoline Vector',
      style: 'Ultra-Futuristic Rounded'
    },
    keywords: ['неон', 'футуризм', 'киберпанк', 'циан', 'свечение', 'современный'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#06b6d4';
      const s = props.secondaryColor || '#d946ef';
      const bg = props.backgroundColor || '#030712';
      const glow = props.glowIntensity ?? 1;

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id={`neon-filter-${p.replace('#','')}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation={5 * glow} result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={p} />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor={s} />
            </linearGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />
          
          {/* Subtle grid backdrop */}
          <g opacity="0.08" stroke="#38bdf8" strokeWidth="0.8">
            <line x1="0" y1="60" x2="400" y2="60" />
            <line x1="0" y1="120" x2="400" y2="120" />
            <line x1="0" y1="180" x2="400" y2="180" />
            <line x1="100" y1="0" x2="100" y2="240" />
            <line x1="200" y1="0" x2="200" y2="240" />
            <line x1="300" y1="0" x2="300" y2="240" />
          </g>

          {/* Neon Mark 6 ai */}
          <g filter={`url(#neon-filter-${p.replace('#','')})`}>
            {/* The 6 tube */}
            <path
              d="M 145 60 C 95 60, 65 98, 65 142 C 65 180, 95 200, 130 200 C 165 200, 190 178, 190 144 C 190 110, 162 90, 128 90 C 102 90, 80 108, 70 134"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* The a tube */}
            <path
              d="M 270 120 C 270 108, 252 95, 232 95 C 210 95, 195 110, 195 132 C 195 155, 210 170, 232 170 C 255 170, 270 155, 270 140 L 270 95 L 270 170"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* The i tube */}
            <line
              x1="318" y1="105"
              x2="318" y2="170"
              stroke="url(#neonGradient)"
              strokeWidth="13"
              strokeLinecap="round"
            />
            {/* Dot of i */}
            <circle
              cx="318" cy="74"
              r="7.5"
              fill={s}
            />

            {/* Inner high-white specular tube core */}
            <path
              d="M 145 60 C 95 60, 65 98, 65 142 C 65 180, 95 200, 130 200 C 165 200, 190 178, 190 144 C 190 110, 162 90, 128 90 C 102 90, 80 108, 70 134"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M 270 120 C 270 108, 252 95, 232 95 C 210 95, 195 110, 195 132 C 195 155, 210 170, 232 170 C 255 170, 270 155, 270 140 L 270 95 L 270 170"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.9"
            />
            <line x1="318" y1="105" x2="318" y2="170" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
            <circle cx="318" cy="74" r="3.5" fill="#ffffff" />
          </g>

          {/* Minimalist Subtext */}
          <text x="200" y="222" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="'Orbitron', sans-serif" letterSpacing="4">CYBERNETIC COGNITION</text>
        </svg>
      );
    }
  },
  {
    id: 'otrar-silk-road',
    number: 3,
    title: 'Древний Отырар (Шелковый путь)',
    subtitle: 'Арабско-куфическая геометрия & Изразцы',
    category: 'cultural',
    categoryLabel: 'Культурное наследие',
    description: 'Вдохновлен архитектурой древнего городища Отырар на Великом Шелковом Пути и мавзолеем Ходжи Ахмеда Ясави. Строгая куфическая каллиграфия с лазурной майоликой и песчаным золотом формирует монограмму "6 ai".',
    culturalBackground: 'Отырар (Фараб) — колыбель науки, где родился аль-Фараби; шедевр средневековой кирпичной кладки и глазурованной бирюзы.',
    designHighlights: [
      'Куфический геометрический лабиринт (квадратный куфи)',
      'Цвета оазиса: благородная бирюза Отырара и терракота',
      'Звездчатый исламский арабескный узел в ядре символа 6',
      'Символика мудрости и синтеза восточной науки с ИИ'
    ],
    recommendedUse: 'Исследовательские центры, библиотеки знаний, аналитические платформы, премиум брендинг.',
    defaultColors: {
      primary: '#0d9488', // Бирюза
      secondary: '#d97706', // Золото пустыни
      accent: '#38bdf8',
      background: '#09151c',
      glow: 'rgba(13, 148, 136, 0.4)'
    },
    typography: {
      primary: 'Kufic Geometric / Square Kufic',
      style: 'Historic Calligraphic Tile'
    },
    keywords: ['отырар', 'арабский', 'куфи', 'шелковый путь', 'бирюза', 'плитка', 'каллиграфия'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#0d9488';
      const s = props.secondaryColor || '#d97706';
      const a = props.accentColor || '#38bdf8';
      const bg = props.backgroundColor || '#09151c';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="otrarTile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={p} />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="goldTile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor={s} />
            </linearGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Islamic mosaic geometric arch background */}
          <path d="M 50 200 L 50 100 Q 200 10 350 100 L 350 200 Z" fill="none" stroke="#164e63" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <polygon points="200,32 208,44 222,44 212,54 216,68 200,60 184,68 188,54 178,44 192,44" fill={s} opacity="0.85" />

          {/* Kufic 6 ai architectural labyrinth glyph */}
          <g transform="translate(65, 45)">
            {/* The "6" in geometric Kufic tile style */}
            <path
              d="M 120 40 L 40 40 L 40 140 L 120 140 L 120 80 L 70 80 L 70 115 L 95 115 L 95 100"
              fill="none"
              stroke="url(#otrarTile)"
              strokeWidth="16"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
            {/* Inner accent dot of 6 */}
            <rect x="68" y="58" width="14" height="14" fill="url(#goldTile)" />

            {/* The "a" in Kufic script */}
            <path
              d="M 160 140 L 160 80 L 195 80 L 195 140 M 160 110 L 195 110"
              fill="none"
              stroke="url(#goldTile)"
              strokeWidth="14"
              strokeLinecap="square"
            />
            {/* The "i" as vertical Kufic Alif-style pillar with dot */}
            <line x1="230" y1="80" x2="230" y2="140" stroke="url(#otrarTile)" strokeWidth="14" strokeLinecap="square" />
            <polygon points="230,48 238,56 230,64 222,56" fill={a} />

            {/* Arabesque fine corner flourishes */}
            <circle cx="120" cy="40" r="4" fill={s} />
            <circle cx="40" cy="40" r="4" fill={s} />
            <circle cx="40" cy="140" r="4" fill={s} />
            <circle cx="120" cy="140" r="4" fill={s} />
          </g>

          <text x="200" y="215" textAnchor="middle" fill="#5eead4" fontSize="11" fontFamily="'Cinzel', serif" letterSpacing="4">OTRAR • CULTURAL INTELLIGENCE</text>
        </svg>
      );
    }
  },
  {
    id: 'ancient-greek-olympian',
    number: 4,
    title: 'Греческий античный',
    subtitle: 'Афинский меандр & Мраморная классика',
    category: 'cultural',
    categoryLabel: 'Античность & Классика',
    description: 'Величественный классический стиль Древней Греции. Архитектурный орнамент меандр (вечный поток мудрости), благородная золотая инкрустация и пропорции золотого сечения Акрополя.',
    culturalBackground: 'Греческая философия, математика Пифагора и истоки логики Аристотеля — фундамент алгоритмического ИИ.',
    designHighlights: [
      'Священный меандровый фриз по контуру знака',
      'Римско-греческие пропорции латинской и греческой антиквы',
      'Симметричная золотая пропорция Phi (1.618)',
      'Золоченая гравировка на темном мраморе'
    ],
    recommendedUse: 'Юридический ИИ, академические платформы, философские и финтех проекты высшего эшелона.',
    defaultColors: {
      primary: '#eab308',
      secondary: '#ca8a04',
      accent: '#fef08a',
      background: '#0c0e12',
      glow: 'rgba(234, 179, 8, 0.35)'
    },
    typography: {
      primary: 'Cinzel Classical Serif',
      style: 'Imperial Monumental'
    },
    keywords: ['греческий', 'античный', 'меандр', 'афины', 'золото', 'мрамор', 'философия'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#eab308';
      const s = props.secondaryColor || '#ca8a04';
      const bg = props.backgroundColor || '#0c0e12';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="greekGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="45%" stopColor={p} />
              <stop offset="100%" stopColor={s} />
            </linearGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Greek Meander Border at top and bottom */}
          <g stroke="url(#greekGold)" strokeWidth="1.8" fill="none" opacity="0.6">
            <path d="M 30 30 H 50 V 42 H 40 V 36 H 45" />
            <path d="M 50 30 H 70 V 42 H 60 V 36 H 65" />
            <path d="M 70 30 H 90 V 42 H 80 V 36 H 85" />
            <path d="M 90 30 H 110 V 42 H 100 V 36 H 105" />
            <line x1="110" y1="30" x2="290" y2="30" strokeDasharray="4 4" />
            <path d="M 290 30 H 310 V 42 H 300 V 36 H 305" />
            <path d="M 310 30 H 330 V 42 H 320 V 36 H 325" />
            <path d="M 330 30 H 350 V 42 H 340 V 36 H 345" />
            <path d="M 350 30 H 370 V 42 H 360 V 36 H 365" />
          </g>

          {/* Center Insignia: Sculpted 6 ai */}
          <g transform="translate(100, 52)">
            {/* The "6" with classical serif curves */}
            <path
              d="M 68 25 C 50 25, 20 45, 12 85 C 8 108, 18 132, 42 135 C 68 137, 85 118, 85 92 C 85 68, 65 52, 42 55 C 32 57, 22 66, 17 76 C 24 45, 46 36, 68 36 Z"
              fill="url(#greekGold)"
            />
            {/* Letter 'a' */}
            <text x="105" y="125" fill="url(#greekGold)" fontSize="72" fontFamily="'Cinzel', serif" fontWeight="700">
              A
            </text>
            {/* Letter 'i' */}
            <text x="160" y="125" fill="url(#greekGold)" fontSize="72" fontFamily="'Cinzel', serif" fontWeight="700">
              I
            </text>

            {/* Classical Laurel Olive sprig hint under letters */}
            <path d="M 100 142 Q 150 152 200 142" stroke="url(#greekGold)" strokeWidth="2" fill="none" opacity="0.7" />
            <circle cx="150" cy="147" r="3" fill="url(#greekGold)" />
          </g>

          {/* Subtitle */}
          <text x="200" y="216" textAnchor="middle" fill="#d4af37" fontSize="10" fontFamily="'Cinzel', serif" letterSpacing="5">CLASSICAL LOGIC • VI AI</text>
        </svg>
      );
    }
  },
  {
    id: 'kazakh-steppe-nomad',
    number: 5,
    title: 'Казахский культурный код',
    subtitle: 'Қошқар мүйіз & Небесный Шаңырақ',
    category: 'cultural',
    categoryLabel: 'Казахское наследие',
    description: 'Гармония степного кочевого наследия и технологий будущего. Плавный изгиб священного казахского орнамента "Қошқар мүйіз" формирует цифру 6, увенчанную золотым солнечным "Шаңырағым", а буквы "ai" вдохновлены наскальными петроглифами Танбалы.',
    culturalBackground: 'Священный шанырак как символ общего дома и бесконечного неба (Тәңір), золото степи и небесно-бирюзовый цвет свободы.',
    designHighlights: [
      'Знак 6 вычерчен каноничным роговым орнаментом Қошқар мүйіз',
      'Золотой элемент купола Шаңырақ с перекрестием кюльдереуш',
      'Небесно-голубой степной лазурит и чистое золото',
      'Символ силы, гостеприимства и интеллектуального лидерства'
    ],
    recommendedUse: 'Национальные технологические лидеры, финтех в ЦА, инновационные фонды Казахстана.',
    defaultColors: {
      primary: '#00afca', // Степная бирюза Казахстана
      secondary: '#ffc82e', // Золото солнца
      accent: '#ffffff',
      background: '#061a24',
      glow: 'rgba(0, 175, 202, 0.45)'
    },
    typography: {
      primary: 'Nomad Steppe Curve',
      style: 'Ethnic Modernist'
    },
    keywords: ['казахстан', 'қошқар мүйіз', 'шаңырақ', 'бирюзовый', 'степь', 'орнамент', 'алтын'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#00afca';
      const s = props.secondaryColor || '#ffc82e';
      const bg = props.backgroundColor || '#061a24';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="kzSky" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor={p} />
            </linearGradient>
            <linearGradient id="kzGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor={s} />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Steppe Solar Radiant Shanyraq Halo */}
          <g transform="translate(112, 118)">
            <circle cx="0" cy="0" r="48" fill="none" stroke="url(#kzGold)" strokeWidth="2.5" opacity="0.3" strokeDasharray="6 3" />
            {/* Shanyraq cross lines */}
            <path d="M -30 -15 Q 0 -5 30 -15 M -30 15 Q 0 5 30 15" stroke="url(#kzGold)" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M -15 -30 Q -5 0 -15 30 M 15 -30 Q 5 0 15 30" stroke="url(#kzGold)" strokeWidth="1.5" fill="none" opacity="0.4" />
          </g>

          {/* Kazakh "Qoshqar Múyiz" 6 Vector */}
          <g transform="translate(60, 48)">
            {/* Horn ornament curling into 6 */}
            <path
              d="M 105 20 C 65 18, 30 45, 20 85 C 10 125, 35 150, 70 150 C 105 150, 130 125, 125 90 C 120 58, 85 58, 65 75 C 60 79, 58 88, 62 94 C 66 100, 75 100, 80 95 C 92 82, 108 92, 108 108 C 108 126, 92 136, 70 136 C 45 136, 35 116, 40 88 C 48 55, 75 35, 105 35 C 112 35, 116 28, 112 22 C 110 20, 108 20, 105 20 Z"
              fill="url(#kzSky)"
            />
            {/* Crown Sun element above 6 */}
            <circle cx="106" cy="14" r="6" fill="url(#kzGold)" />

            {/* Nomad styled "a" */}
            <g transform="translate(145, 60)">
              <path
                d="M 10 40 C 10 15, 30 10, 45 10 C 60 10, 68 20, 68 35 L 68 85 M 68 45 C 55 35, 15 38, 15 65 C 15 82, 35 88, 52 82 C 62 78, 68 68, 68 55"
                fill="none"
                stroke="url(#kzGold)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Nomad styled "i" with Tamga sun dot */}
            <g transform="translate(240, 60)">
              <line x1="0" y1="28" x2="0" y2="85" stroke="url(#kzSky)" strokeWidth="12" strokeLinecap="round" />
              {/* Petroglyph sun dot */}
              <circle cx="0" cy="5" r="7" fill="url(#kzGold)" />
              <path d="M -12 5 L -8 5 M 8 5 L 12 5 M 0 -7 L 0 -3 M 0 13 L 0 17" stroke="url(#kzGold)" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>

          <text x="200" y="218" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" letterSpacing="4">ДАЛА МҰРАСЫ • QAZAQ HERITAGE</text>
        </svg>
      );
    }
  }
];
