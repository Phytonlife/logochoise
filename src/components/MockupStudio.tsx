import React, { useState } from 'react';
import { Bus, Smartphone, Shirt, CreditCard, Monitor, Globe } from 'lucide-react';
import { LogoDefinition, MockupType } from '../types';

interface MockupStudioProps {
  logos: LogoDefinition[];
  selectedLogo: LogoDefinition;
  onSelectLogo: (logo: LogoDefinition) => void;
}

export const MockupStudio: React.FC<MockupStudioProps> = ({
  logos,
  selectedLogo,
  onSelectLogo,
}) => {
  const [activeMockup, setActiveMockup] = useState<MockupType>('bus-led');

  const mockups: { id: MockupType; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'bus-led',
      label: 'Табло автобуса',
      icon: <Bus className="w-4 h-4" />,
      desc: 'Лобовое стекло и светодиодный маршрутоуказатель городского автобуса'
    },
    {
      id: 'app-icon',
      label: 'Иконка приложения',
      icon: <Smartphone className="w-4 h-4" />,
      desc: 'Премиум иконка на экране смартфона iOS / Android'
    },
    {
      id: 'hoodie',
      label: 'Худи / Мерч',
      icon: <Shirt className="w-4 h-4" />,
      desc: 'Премиальный плотный черный хлопок со шелкографией на груди'
    },
    {
      id: 'business-card',
      label: 'Визитка с фольгой',
      icon: <CreditCard className="w-4 h-4" />,
      desc: 'Матовая дизайнерская бумага с металлическим тиснением'
    },
    {
      id: 'billboard',
      label: 'Городской билборд',
      icon: <Monitor className="w-4 h-4" />,
      desc: 'Медиафасад в центре ночного мегаполиса'
    },
    {
      id: 'web-header',
      label: 'Веб-интерфейс',
      icon: <Globe className="w-4 h-4" />,
      desc: 'Навигационная панель SaaS платформы в браузере'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header & Logo Selector Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0c1017] border border-slate-800 p-4 rounded-xl">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Студия мокапов: примерка в реальной жизни</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Посмотрите, как выбранный концепт смотрится на автобусном табло, иконке, мерче и визитках
          </p>
        </div>

        {/* Selected Logo Picker */}
        <div className="flex items-center gap-2.5">
          <label className="text-xs text-slate-400 font-medium whitespace-nowrap">
            Активный стиль:
          </label>
          <select
            value={selectedLogo.id}
            onChange={(e) => {
              const found = logos.find((l) => l.id === e.target.value);
              if (found) onSelectLogo(found);
            }}
            className="bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-amber-400 cursor-pointer min-w-[220px]"
          >
            {logos.map((l) => (
              <option key={l.id} value={l.id}>
                #{l.number} {l.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mockup Type Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {mockups.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMockup(m.id)}
            className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              activeMockup === m.id
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {m.icon}
            <span>{m.label}</span>
          </button>
        ))}
      </div>

      {/* Main Mockup Canvas Stage */}
      <div className="bg-[#05070a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative min-h-[460px] flex items-center justify-center p-6 md:p-10">
        
        {/* 1. BUS LED HEADSIGN MOCKUP */}
        {activeMockup === 'bus-led' && (
          <div className="w-full max-w-3xl space-y-4">
            {/* Bus Front Roof Contour */}
            <div className="w-full bg-[#181d26] rounded-t-3xl pt-5 px-6 border-t-4 border-slate-700 relative shadow-2xl">
              {/* Bus Roof Marker Lights */}
              <div className="flex justify-between px-8 mb-3">
                <div className="w-8 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                <div className="w-12 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                <div className="w-8 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
              </div>

              {/* Recessed LED Destination Box Frame */}
              <div className="bg-black p-3 rounded-2xl border-4 border-[#252c38] shadow-[inset_0_4px_16px_rgba(0,0,0,0.9)] relative overflow-hidden">
                {/* Glass Glare Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-10" />

                {/* Internal LED Display Housing */}
                <div className="bg-[#040608] rounded-xl p-4 flex flex-col items-center justify-center relative min-h-[220px]">
                  <div className="w-full max-w-md aspect-[16/10] flex items-center justify-center">
                    {selectedLogo.renderSvg({})}
                  </div>
                </div>
              </div>

              {/* Bus Windshield Rubber Gasket & Glass Top */}
              <div className="h-10 mt-3 bg-gradient-to-b from-[#111822] to-[#1f2937] border-t-2 border-black rounded-b-lg flex items-center justify-center">
                <div className="w-24 h-1.5 bg-black rounded-full opacity-60" />
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 font-mono">
              Реалистичный вид на лобовом светодиодном табло городского автобуса и экспресса
            </p>
          </div>
        )}

        {/* 2. APP ICON MOCKUP */}
        {activeMockup === 'app-icon' && (
          <div className="w-full max-w-sm flex flex-col items-center space-y-6">
            {/* Phone Screen Frame */}
            <div className="w-[300px] h-[480px] bg-gradient-to-b from-slate-900 to-slate-950 rounded-[44px] p-5 border-4 border-slate-700 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              {/* Phone Dynamic Island */}
              <div className="w-24 h-5 bg-black rounded-full mx-auto" />

              {/* Center App Icon with 3D Bevel & Shadow */}
              <div className="flex flex-col items-center my-auto">
                <div className="w-32 h-32 rounded-[28px] overflow-hidden shadow-[0_20px_35px_-10px_rgba(0,0,0,0.8)] border border-white/20 p-3 bg-[#0a0d14] relative group">
                  {/* Subtle glass reflection on icon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                  <div className="w-full h-full flex items-center justify-center">
                    {selectedLogo.renderSvg({})}
                  </div>
                </div>
                <span className="text-xs font-semibold text-white mt-2.5 tracking-tight font-sans">
                  6 ai
                </span>
              </div>

              {/* Phone Dock */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-3 flex justify-around items-center border border-white/10">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/80 shadow-md" />
                <div className="w-11 h-11 rounded-2xl bg-sky-500/80 shadow-md" />
                <div className="w-11 h-11 rounded-2xl bg-purple-500/80 shadow-md" />
                <div className="w-11 h-11 rounded-2xl bg-amber-500/80 shadow-md" />
              </div>
            </div>

            <p className="text-xs text-slate-500 font-mono text-center">
              Иконка приложения на домашнем экране мобильной ОС
            </p>
          </div>
        )}

        {/* 3. HOODIE MERCH MOCKUP */}
        {activeMockup === 'hoodie' && (
          <div className="w-full max-w-md flex flex-col items-center space-y-4">
            {/* Realistic Black Heavy Cotton Silhouette */}
            <div className="w-full aspect-[4/4] bg-[#12141a] rounded-3xl p-8 border border-slate-800 relative shadow-2xl flex flex-col items-center justify-center overflow-hidden">
              {/* Hood Collar lines */}
              <div className="absolute top-0 w-44 h-16 border-b-2 border-slate-700/60 rounded-b-[40px] flex justify-center">
                {/* Hoodie drawstrings */}
                <div className="w-1 h-20 bg-slate-600 rounded-full mx-3 shadow-md" />
                <div className="w-1 h-20 bg-slate-600 rounded-full mx-3 shadow-md" />
              </div>

              {/* Chest Print Logo */}
              <div className="w-48 aspect-[16/10] z-10 flex items-center justify-center p-2 opacity-95 filter contrast-125">
                {selectedLogo.renderSvg({})}
              </div>

              {/* Fabric Weave Subtitle */}
              <div className="text-[10px] uppercase font-mono tracking-[4px] text-slate-500 mt-2 z-10">
                OFFICIAL APPAREL // 6 AI
              </div>
            </div>

            <p className="text-xs text-slate-500 font-mono text-center">
              Трафаретная шелкография на плотном хлопковом мерче
            </p>
          </div>
        )}

        {/* 4. BUSINESS CARD MOCKUP */}
        {activeMockup === 'business-card' && (
          <div className="w-full max-w-lg flex flex-col items-center space-y-4">
            {/* Luxury Matte Business Card with Foil */}
            <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#121318] to-[#0a0a0e] rounded-xl p-8 border border-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] flex flex-col justify-between relative overflow-hidden">
              {/* Metallic Foil Sheen Angle */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent pointer-events-none" />

              {/* Top Card Bar */}
              <div className="flex justify-between items-start">
                <div className="w-32 aspect-[16/10] flex items-center justify-center">
                  {selectedLogo.renderSvg({})}
                </div>
                <div className="text-right text-[11px] text-slate-400 font-mono">
                  <div className="text-white font-semibold">AI LABS & CORP</div>
                  <div>ALMATY · GLOBAL</div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="border-t border-slate-800 pt-3 flex justify-between items-end text-xs">
                <div>
                  <div className="text-white font-bold tracking-wide">6 AI TECHNOLOGIES</div>
                  <div className="text-slate-500 text-[10px]">autonomous cognition systems</div>
                </div>
                <div className="text-[10px] text-amber-400 font-mono">
                  hello@6ai.tech
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-mono text-center">
              Шелковистый Soft-Touch картон с тиснением металлизированной фольгой
            </p>
          </div>
        )}

        {/* 5. BILLBOARD MOCKUP */}
        {activeMockup === 'billboard' && (
          <div className="w-full max-w-2xl flex flex-col items-center space-y-4">
            {/* Billboard Stanchion and Mega LED Display */}
            <div className="w-full bg-[#0d1117] rounded-xl p-3 border border-slate-800 shadow-2xl">
              <div className="bg-black p-4 rounded-lg border-2 border-slate-700 relative overflow-hidden">
                <div className="w-full aspect-[21/9] flex items-center justify-center bg-[#06090e]">
                  <div className="w-full max-w-sm">
                    {selectedLogo.renderSvg({})}
                  </div>
                </div>
                {/* LED Billboard Dot Grid Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:8px_8px] opacity-10 pointer-events-none" />
              </div>
              <div className="w-16 h-8 bg-slate-800 mx-auto mt-2 rounded-b" />
            </div>

            <p className="text-xs text-slate-500 font-mono text-center">
              Медиафасад сверхвысокой яркости на главной улице мегаполиса
            </p>
          </div>
        )}

        {/* 6. WEB INTERFACE MOCKUP */}
        {activeMockup === 'web-header' && (
          <div className="w-full max-w-2xl flex flex-col items-center space-y-4">
            {/* Browser Window Mockup */}
            <div className="w-full bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
              {/* Browser Header Bar */}
              <div className="bg-slate-950 px-4 py-2.5 flex items-center gap-2 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="bg-slate-900 rounded px-3 py-1 text-[11px] font-mono text-slate-400 mx-auto w-64 text-center">
                  https://6ai.app
                </div>
              </div>

              {/* Website Navbar */}
              <div className="bg-[#090b10] px-6 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="w-24 aspect-[16/10] flex items-center">
                  {selectedLogo.renderSvg({})}
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
                  <span className="text-white font-medium">Продукты</span>
                  <span>Модели</span>
                  <span>Документация</span>
                  <span>Цены</span>
                </div>
                <div className="px-3 py-1 bg-amber-400 text-slate-950 rounded-lg text-xs font-bold">
                  Войти
                </div>
              </div>

              {/* Hero area */}
              <div className="p-8 text-center bg-[#07090e]">
                <h4 className="text-lg font-bold text-white mb-1">
                  Интеллект следующего поколения
                </h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Автономные мультимодальные агенты и решения для бизнеса.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-mono text-center">
              Интеграция логотипа в шапку веб-приложения и десктопного SaaS
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
