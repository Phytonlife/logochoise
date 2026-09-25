import React from 'react';
import { Sparkles, Trophy, Layers, Sliders } from 'lucide-react';

interface HeaderProps {
  activeView: 'gallery' | 'tournament' | 'mockups';
  setActiveView: (view: 'gallery' | 'tournament' | 'mockups') => void;
  favoritesCount: number;
  openFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  favoritesCount,
  openFavorites,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#090b10]/90 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3.5 flex items-center justify-between">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveView('gallery')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white font-display flex items-center gap-1.5">
            <span className="text-amber-400">6</span>
            <span>ai</span>
            <span className="text-xs font-normal text-slate-400 ml-1.5 font-sans hidden sm:inline">
              Studio
            </span>
          </span>
        </button>
      </div>

      {/* Zone 2: 4 clean text navigation links */}
      <nav className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => setActiveView('gallery')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
            activeView === 'gallery'
              ? 'bg-slate-800 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Каталог 20 лого</span>
        </button>

        <button
          onClick={() => setActiveView('tournament')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
            activeView === 'tournament'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Батл: Найти ТОП</span>
        </button>

        <button
          onClick={() => setActiveView('mockups')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
            activeView === 'mockups'
              ? 'bg-slate-800 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Мокапы & Примерка</span>
        </button>
      </nav>

      {/* Zone 3: 1-2 primary actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={openFavorites}
          className="relative px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg hover:border-slate-600 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <span>Избранное</span>
          {favoritesCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-amber-500 text-black text-[10px] font-bold flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveView('tournament')}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-sm cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Определить фаворита</span>
        </button>
      </div>
    </header>
  );
};
