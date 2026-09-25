import React from 'react';
import { LogoDefinition, LogoRenderProps } from '../types';

export const logosGroup4: LogoDefinition[] = [
  {
    id: 'spatial-3d-glassmorphism',
    number: 16,
    title: '3D Глассморфизм / Spatial UI',
    subtitle: 'Матовое стекло & Призматическое преломление',
    category: 'futuristic',
    categoryLabel: 'Пространственный UI',
    description: 'Эпоха пространственных вычислений (Spatial Computing / VisionOS). Полупрозрачное матовое акриловое стекло с призматическими спектральными бликами на гранях и глубоким градиентным свечением изнутри.',
    culturalBackground: 'Интерфейсы смешанной реальности (XR), оптика будущего и прозрачные кремниевые кристаллы.',
    designHighlights: [
      'Многослойный эффект матового стекла (Frosted Glass)',
      'Спектральное радужное свечение на фасках и углах',
      'Глубокая пространственная тень и объемность',
      'Современный тактильный премиум-вид'
    ],
    recommendedUse: 'AR/VR приложения, Spatial AI, флагманские consumer сервисы, премиальный Web3.',
    defaultColors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      accent: '#38bdf8',
      background: '#0a0914',
      glow: 'rgba(236, 72, 153, 0.45)'
    },
    typography: {
      primary: 'Spatial Volumetric Rounded',
      style: 'Frosted Glass Surface'
    },
    keywords: ['стекло', 'глассморфизм', '3d', 'visionos', 'призма', 'розовый', 'фиолетовый'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#ec4899';
      const s = props.secondaryColor || '#8b5cf6';
      const a = props.accentColor || '#38bdf8';
      const bg = props.backgroundColor || '#0a0914';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glassPrism" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={p} stopOpacity="0.8" />
              <stop offset="50%" stopColor={s} stopOpacity="0.6" />
              <stop offset="100%" stopColor={a} stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="specularRim" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glassBlur">
              <feGaussianBlur stdDeviation="10" result="blur" />
            </filter>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Glowing colorful orbs behind glass */}
          <circle cx="140" cy="110" r="55" fill={p} opacity="0.3" filter="url(#glassBlur)" />
          <circle cx="260" cy="110" r="50" fill={a} opacity="0.3" filter="url(#glassBlur)" />

          {/* Spatial Frosted Floating Slab */}
          <rect x="70" y="38" width="260" height="144" rx="28" fill="#ffffff" fillOpacity="0.04" stroke="url(#specularRim)" strokeWidth="1.5" />

          {/* Typography 6 ai with dimensional bevel */}
          <g transform="translate(105, 58)">
            {/* The 6 with glass refraction */}
            <path
              d="M 60 15 C 30 15, 8 40, 8 72 C 8 98, 26 112, 52 112 C 78 112, 96 95, 96 72 C 96 48, 78 35, 52 35 C 38 35, 26 42, 18 52"
              fill="none"
              stroke="url(#glassPrism)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Specular edge highlight on 6 */}
            <path
              d="M 60 15 C 30 15, 8 40, 8 72"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Letter 'a' */}
            <g transform="translate(108, 25)">
              <circle cx="28" cy="46" r="24" fill="none" stroke="url(#glassPrism)" strokeWidth="14" />
              <line x1="52" y1="24" x2="52" y2="70" stroke="url(#glassPrism)" strokeWidth="14" strokeLinecap="round" />
              <circle cx="28" cy="46" r="16" fill="#ffffff" fillOpacity="0.05" />
            </g>

            {/* Letter 'i' */}
            <g transform="translate(178, 25)">
              <line x1="8" y1="24" x2="8" y2="70" stroke="url(#glassPrism)" strokeWidth="14" strokeLinecap="round" />
              <circle cx="8" cy="4" r="8" fill="url(#glassPrism)" />
              <circle cx="6" cy="2" r="3" fill="#ffffff" opacity="0.9" />
            </g>
          </g>

          <text x="200" y="214" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" letterSpacing="4">SPATIAL GLASS • VISION AI</text>
        </svg>
      );
    }
  },
  {
    id: 'origami-polygonal-facet',
    number: 17,
    title: 'Полигональное оригами',
    subtitle: 'Скульптурная бумага & Грани света',
    category: 'artistic',
    categoryLabel: 'Геометрия & Скульптура',
    description: 'Искусство прецизионных бумажных складок. Цифра 6 и знак AI собраны из геометрических полигональных граней с мягкой светотеневой моделировкой, создающей осязаемый объем.',
    culturalBackground: 'Японское искусство оригами и полигональное 3D-моделирование низкополигональной (low-poly) эстетики.',
    designHighlights: [
      'Динамичные треугольные и трапециевидные фасеты',
      'Градиентные переходы между соседними гранями',
      'Иллюзия сложенной вручную трехмерной скульптуры',
      'Архитектурная выразительность и чистота формы'
    ],
    recommendedUse: 'Архитектурные студии, 3D софт, креативные агентства, пространственные вычисления.',
    defaultColors: {
      primary: '#8b5cf6',
      secondary: '#c084fc',
      accent: '#e9d5ff',
      background: '#0d0c18',
      glow: 'rgba(139, 92, 246, 0.4)'
    },
    typography: {
      primary: 'Low-Poly Faceted Vector',
      style: 'Geometric Origami'
    },
    keywords: ['оригами', 'полигоны', 'бумага', 'грани', 'геометрия', 'объем', 'фиолетовый'],
    renderSvg: (props: LogoRenderProps) => {
      const bg = props.backgroundColor || '#0d0c18';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Faceted 6 ai Composition */}
          <g transform="translate(85, 42)">
            {/* 6 Polygon Facets */}
            {/* Top hook */}
            <polygon points="50,10 75,10 50,45 25,45" fill="#c084fc" />
            <polygon points="25,45 50,45 25,95 0,95" fill="#a855f7" />
            <polygon points="0,95 25,95 50,135 15,135" fill="#7e22ce" />
            <polygon points="15,135 50,135 85,135 50,95" fill="#9333ea" />
            <polygon points="50,95 85,135 105,95 75,70" fill="#c084fc" />
            <polygon points="75,70 105,95 85,55 55,55" fill="#e9d5ff" />
            <polygon points="25,95 50,95 50,135 15,135" fill="#6b21a8" />

            {/* Faceted 'a' */}
            <g transform="translate(125, 20)">
              <polygon points="10,40 35,20 60,40 35,60" fill="#a855f7" />
              <polygon points="35,60 60,40 60,85 35,95" fill="#7e22ce" />
              <polygon points="10,40 35,60 35,95 10,80" fill="#9333ea" />
              <polygon points="60,40 75,25 75,95 60,85" fill="#c084fc" />
            </g>

            {/* Faceted 'i' */}
            <g transform="translate(210, 20)">
              <polygon points="15,25 35,10 35,95 15,80" fill="#a855f7" />
              <polygon points="0,35 15,25 15,80 0,70" fill="#6b21a8" />
              {/* Diamond folded dot */}
              <polygon points="20,-5 35,5 20,15 5,5" fill="#e9d5ff" />
            </g>
          </g>

          <text x="200" y="214" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontFamily="'Orbitron', sans-serif" letterSpacing="4">FOLDED PRECISION • GEOMETRIC INTELLIGENCE</text>
        </svg>
      );
    }
  },
  {
    id: 'steampunk-victorian-brass',
    number: 18,
    title: 'Стимпанк / Викторианская латунь',
    subtitle: 'Шестеренчатый механизм & Гильош',
    category: 'artistic',
    categoryLabel: 'Стимпанк & Механика',
    description: 'Эстетика викторианской стимпанк-инженерии Чарльза Бэббиджа и Ады Лавлейс — авторов первой механической вычислительной машины. Латунные зубчатые шестерни, медные заклепки и гравировка циферблата.',
    culturalBackground: 'Разностная машина Бэббиджа 1822 года — истинный механический прадедушка современных нейросетей.',
    designHighlights: [
      'Цифра 6 интегрирована в латунную зубчатую шестеренку',
      'Теплые оттенки состаренной бронзы, латуни и меди',
      'Круговые технические насечки и гравировка шкалы',
      'Символ связи классической механики и машинного интеллекта'
    ],
    recommendedUse: 'Hardware проекты, робототехника, стимпанк-игры, крафтовые мастерские.',
    defaultColors: {
      primary: '#d97706',
      secondary: '#b45309',
      accent: '#fef3c7',
      background: '#120d09',
      glow: 'rgba(217, 119, 6, 0.4)'
    },
    typography: {
      primary: 'Victorian Engraved Roman',
      style: 'Steampunk Mechanical'
    },
    keywords: ['стимпанк', 'шестеренка', 'латунь', 'механика', 'бэббидж', 'викторианский', 'бронза'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#d97706';
      const s = props.secondaryColor || '#b45309';
      const bg = props.backgroundColor || '#120d09';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="50%" stopColor={p} />
              <stop offset="100%" stopColor={s} />
            </linearGradient>
          </defs>
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Steampunk Brass Cogwheel Rim */}
          <g transform="translate(130, 105)">
            <circle cx="0" cy="0" r="62" fill="none" stroke="url(#brassGrad)" strokeWidth="6" />
            <circle cx="0" cy="0" r="52" fill="none" stroke="#78350f" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* 12 Cog Teeth */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <rect
                key={deg}
                x="-5"
                y="-68"
                width="10"
                height="10"
                rx="2"
                fill="url(#brassGrad)"
                transform={`rotate(${deg})`}
              />
            ))}
            {/* Center axle rivets */}
            <circle cx="0" cy="0" r="16" fill="#451a03" stroke="url(#brassGrad)" strokeWidth="3" />
            <circle cx="0" cy="0" r="5" fill="#fef3c7" />
          </g>

          {/* Inlaid 6 and AI */}
          <g transform="translate(110, 52)">
            {/* 6 Curved Mechanism */}
            <path
              d="M 28 20 C 5 20, -15 45, -15 80 C -15 105, 5 120, 28 120 C 50 120, 70 102, 70 80 C 70 58, 50 42, 28 42 C 12 42, 0 50, -6 60"
              fill="none"
              stroke="url(#brassGrad)"
              strokeWidth="14"
              strokeLinecap="round"
            />

            {/* Letter 'a' styled as brass gauge needle */}
            <g transform="translate(90, 35)">
              <text x="0" y="65" fill="url(#brassGrad)" fontSize="68" fontFamily="'Cinzel', serif" fontWeight="700">
                A
              </text>
            </g>

            {/* Letter 'i' styled as brass piston */}
            <g transform="translate(145, 35)">
              <text x="0" y="65" fill="url(#brassGrad)" fontSize="68" fontFamily="'Cinzel', serif" fontWeight="700">
                I
              </text>
            </g>
          </g>

          <text x="200" y="215" textAnchor="middle" fill="#d97706" fontSize="10" fontFamily="'Cinzel', serif" letterSpacing="5">MECHANICAL COGNITION • BABBAGE 1822</text>
        </svg>
      );
    }
  },
  {
    id: 'ultra-flat-continuous-monoline',
    number: 19,
    title: 'Ультра-чистый монолайн',
    subtitle: 'Одна непрерывная линия & Гармония',
    category: 'minimal',
    categoryLabel: 'Ультра-минимализм',
    description: 'Гениальная простота одного непрерывного движения пера. Вся надпись "6 ai" вычерчена единой гармоничной линией фиксированной толщины, не отрывая руки. Абсолютный минимализм для современных приложений.',
    culturalBackground: 'Школа Дзен-каллиграфии энсо и современный скандинавский графический дизайн.',
    designHighlights: [
      'Единая непрерывная векторная траектория',
      'Идеальные сопряжения радиусов окружностей',
      'Выверенный оптический вес штриха',
      'Превосходно вышивается, гравируется и тиснится'
    ],
    recommendedUse: 'Мобильные OS, лайфстайл-приложения, умные часы, минималистичные стартапы.',
    defaultColors: {
      primary: '#0ea5e9',
      secondary: '#38bdf8',
      accent: '#ffffff',
      background: '#080d14',
      glow: 'rgba(14, 165, 233, 0.4)'
    },
    typography: {
      primary: 'Single-Stroke Geometric Monoline',
      style: 'Harmonic Continuous Flow'
    },
    keywords: ['монолайн', 'одна линия', 'минимализм', 'чистый', 'современный', 'голубой', 'дзен'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#0ea5e9';
      const bg = props.backgroundColor || '#080d14';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Continuous Single Stroke 6 ai */}
          <g transform="translate(70, 50)">
            <path
              d="M 100 25 C 60 25, 20 55, 20 95 C 20 135, 55 150, 90 150 C 125 150, 150 130, 150 95 C 150 60, 120 45, 90 45 C 55 45, 26 70, 22 95 M 150 95 C 150 125, 175 150, 205 150 C 235 150, 255 130, 255 95 L 255 150 M 255 95 C 255 65, 230 45, 205 45 C 180 45, 160 65, 160 95 M 255 150 L 295 150 L 295 45"
              fill="none"
              stroke={p}
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* The single detached dot of i */}
            <circle cx="295" cy="20" r="7" fill={p} />
          </g>

          <text x="200" y="216" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" letterSpacing="4">CONTINUOUS MONOLINE • HARMONY OF FORM</text>
        </svg>
      );
    }
  },
  {
    id: 'cyber-glitch-decoded',
    number: 20,
    title: 'Кибер-глитч / Декодер сигнала',
    subtitle: 'RGB-смещение & Цифровой артефакт',
    category: 'futuristic',
    categoryLabel: 'Глитч & Деконструкция',
    description: 'Энергетика перехваченного сигнала искусственного интеллекта. Горизонтальное векторное смещение слоев, хроматическая аберрация RGB (красный/циан) и фрагментированные биты данных.',
    culturalBackground: 'Цифровой андерграунд, демосцена, глитч-арт и эстетика кибербезопасности Ghost in the Shell.',
    designHighlights: [
      'Горизонтальные векторные срезы со смещением слоев',
      'Анаглифический RGB-эффект (Cyan & Red split)',
      'Фрагменты бинарного кода и маркеры захвата цели',
      'Дерзкий, бунтарский технологический характер'
    ],
    recommendedUse: 'Кибербезопасность, Web3 хакеры, стриминг, underground AI, streetwear бренды.',
    defaultColors: {
      primary: '#06b6d4',
      secondary: '#f43f5e',
      accent: '#ffffff',
      background: '#05070a',
      glow: 'rgba(6, 182, 212, 0.45)'
    },
    typography: {
      primary: 'Glitch Chromatic Shift',
      style: 'Decoded Signal Matrix'
    },
    keywords: ['глитч', 'rgb', 'кибер', 'смещение', 'хакер', 'циан', 'красный'],
    renderSvg: (props: LogoRenderProps) => {
      const p = props.primaryColor || '#06b6d4';
      const s = props.secondaryColor || '#f43f5e';
      const bg = props.backgroundColor || '#05070a';

      return (
        <svg viewBox="0 0 400 240" className={`w-full h-full ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill={bg} />

          {/* Targeting Crosshairs & Corner Brackets */}
          <g stroke="#334155" strokeWidth="1.2" opacity="0.6">
            <path d="M 20 35 L 20 20 L 35 20" fill="none" />
            <path d="M 380 35 L 380 20 L 365 20" fill="none" />
            <path d="M 20 205 L 20 220 L 35 220" fill="none" />
            <path d="M 380 205 L 380 220 L 365 220" fill="none" />
          </g>

          {/* Glitch Slices */}
          <g transform="translate(100, 130)">
            {/* Red shift shadow */}
            <text x="-6" y="-2" fill={s} fontSize="82" fontFamily="'Orbitron', sans-serif" fontWeight="900" opacity="0.8">
              6 ai
            </text>

            {/* Cyan shift shadow */}
            <text x="6" y="2" fill={p} fontSize="82" fontFamily="'Orbitron', sans-serif" fontWeight="900" opacity="0.8">
              6 ai
            </text>

            {/* Main Crisp White Core */}
            <text x="0" y="0" fill="#ffffff" fontSize="82" fontFamily="'Orbitron', sans-serif" fontWeight="900">
              6 ai
            </text>

            {/* Horizontal Displaced Glitch Slices */}
            <rect x="-20" y="-55" width="240" height="8" fill={bg} />
            <g transform="translate(18, -55)">
              <text x="0" y="55" fill={p} fontSize="82" fontFamily="'Orbitron', sans-serif" fontWeight="900" clipPath="url(#glitchClip)">
                6 ai
              </text>
            </g>
            <rect x="-10" y="-25" width="220" height="6" fill={bg} />
            <rect x="80" y="-30" width="40" height="6" fill={s} opacity="0.9" />
          </g>

          <text x="200" y="214" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="4">SIGNAL INTERCEPT • GLITCH MATRIX // 06</text>
        </svg>
      );
    }
  }
];
