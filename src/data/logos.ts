import { LogoDefinition } from '../types';
import { logosGroup1 } from './logosGroup1';
import { logosGroup2 } from './logosGroup2';
import { logosGroup3 } from './logosGroup3';
import { logosGroup4 } from './logosGroup4';

export const ALL_LOGOS: LogoDefinition[] = [
  ...logosGroup1,
  ...logosGroup2,
  ...logosGroup3,
  ...logosGroup4,
];

export const CATEGORIES = [
  { id: 'all', label: 'Все 20 стилей' },
  { id: 'featured', label: 'Избранные топы' },
  { id: 'cultural', label: 'Этно & Культура (Казахский, Отырар, Греция, Руны)' },
  { id: 'futuristic', label: 'Неон & Киберпанк (LED табло, CRT, Глитч)' },
  { id: 'minimal', label: 'Минимализм (Корпоративный, Монолайн, Баухаус)' },
  { id: 'artistic', label: 'Арт & Люкс (Монограмма, Стимпанк, Оригами, 80-е)' },
] as const;
