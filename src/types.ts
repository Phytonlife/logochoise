export type LogoCategory = 
  | 'all'
  | 'featured'
  | 'cultural'      // Казахский стиль, Отырар, Греческий, Нордический
  | 'futuristic'    // Неон, LED матрица, Глитч, Био-ИИ, Стекло
  | 'minimal'       // Корпоративный, Негативное пространство, Монолайн, Баухаус
  | 'artistic';     // Люкс монограмма, Оригами, Стимпанк, Конструктивизм, Ретровейв, Ханко

export interface LogoDefinition {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: LogoCategory;
  categoryLabel: string;
  description: string;
  culturalBackground?: string;
  designHighlights: string[];
  recommendedUse: string;
  defaultColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    glow?: string;
  };
  typography: {
    primary: string;
    style: string;
  };
  keywords: string[];
  renderSvg: (props: LogoRenderProps) => React.ReactNode;
}

export interface LogoRenderProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  glowIntensity?: number; // 0 to 2
  textOverride?: string;
  className?: string;
  isAnimated?: boolean;
}

export type MockupType = 
  | 'bus-led' 
  | 'app-icon' 
  | 'hoodie' 
  | 'business-card' 
  | 'billboard' 
  | 'web-header';

export interface CustomSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  glowIntensity: number;
  textOverride: string;
  subtextOverride: string;
}
