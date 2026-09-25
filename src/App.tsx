import React, { useState, useMemo } from 'react';
import { Search, Trophy, SlidersHorizontal, Sparkles, Star } from 'lucide-react';
import { ALL_LOGOS, CATEGORIES } from './data/logos';
import { LogoDefinition, LogoCategory } from './types';
import { Header } from './components/Header';
import { LogoCard } from './components/LogoCard';
import { ComparisonArena } from './components/ComparisonArena';
import { MockupStudio } from './components/MockupStudio';
import { LogoDetailModal } from './components/LogoDetailModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';

export default function App() {
  const [activeView, setActiveView] = useState<'gallery' | 'tournament' | 'mockups'>('gallery');
  const [selectedCategory, setSelectedCategory] = useState<LogoCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'number' | 'rating' | 'title'>('number');

  // Favorites & Ratings stored in React state (with fallback defaults)
  const [favorites, setFavorites] = useState<string[]>(['bus-led-matrix', 'cyber-minimal-neon', 'kazakh-steppe-nomad', 'otrar-silk-road']);
  const [ratings, setRatings] = useState<Record<string, number>>({
    'bus-led-matrix': 5,
    'cyber-minimal-neon': 5,
    'otrar-silk-road': 5,
    'kazakh-steppe-nomad': 5,
    'facebook-corporate-blue': 4,
  });

  // Modal inspection & Mockup active targets
  const [inspectModalLogo, setInspectModalLogo] = useState<LogoDefinition | null>(null);
  const [mockupTargetLogo, setMockupTargetLogo] = useState<LogoDefinition>(ALL_LOGOS[0]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Toggle favorite
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Set star rating
  const handleSetRating = (id: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [id]: rating }));
  };

  // Open mockup view with specific logo
  const handleOpenMockup = (logo: LogoDefinition) => {
    setMockupTargetLogo(logo);
    setActiveView('mockups');
  };

  // Quick copy SVG code to clipboard
  const handleQuickCopySvg = (logo: LogoDefinition) => {
    const fakeSvg = `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg"><!-- 6 ai: ${logo.title} --></svg>`;
    navigator.clipboard.writeText(fakeSvg);
    setCopiedId(logo.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  // Filtered and Sorted Logos
  const filteredLogos = useMemo(() => {
    let result = [...ALL_LOGOS];

    // Filter by Category
    if (selectedCategory === 'featured') {
      result = result.filter((l) => favorites.includes(l.id));
    } else if (selectedCategory !== 'all') {
      result = result.filter((l) => l.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.subtitle.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q) ||
          l.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'rating') {
      result.sort((a, b) => (ratings[b.id] || 0) - (ratings[a.id] || 0));
    } else if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      result.sort((a, b) => a.number - b.number);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, favorites, ratings]);

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col font-sans">
      {/* 1. Header (Compliant Top Bar Contract) */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        favoritesCount={favorites.length}
        openFavorites={() => setIsFavoritesOpen(true)}
      />

      {/* Main Viewport Router */}
      <main className="flex-1">
        {activeView === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
            
            {/* Hero Section */}
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Бренд-лаборатория · 20 концепций 6 ai</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.15]">
                Найдите свой <span className="text-amber-400">идеальный стиль</span> логотипа 6 ai
              </h1>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl">
                Исследуйте 20 профессиональных векторных концептов: от автобусных светодиодных табло и неонового киберпанка до древней куфической каллиграфии Отырара, казахского Шаңырақа, афинского меандра и ультра-минимализма.
              </p>
            </div>

            {/* Quick Hero Banner Highlights for requested styles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1">
              {[
                { label: 'Автобусный LED', id: 'bus-led-matrix', color: 'border-amber-500/40 text-amber-400' },
                { label: 'Кибернеон', id: 'cyber-minimal-neon', color: 'border-cyan-500/40 text-cyan-400' },
                { label: 'Арабский Отырар', id: 'otrar-silk-road', color: 'border-emerald-500/40 text-emerald-400' },
                { label: 'Греческий меандр', id: 'ancient-greek-olympian', color: 'border-yellow-500/40 text-yellow-400' },
                { label: 'Казахский Шаңырақ', id: 'kazakh-steppe-nomad', color: 'border-sky-500/40 text-sky-400' },
                { label: 'Синий Big Tech', id: 'facebook-corporate-blue', color: 'border-blue-500/40 text-blue-400' },
              ].map((item) => {
                const targetLogo = ALL_LOGOS.find((l) => l.id === item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => targetLogo && setInspectModalLogo(targetLogo)}
                    className={`px-3 py-2 bg-slate-900/60 hover:bg-slate-800/80 border ${item.color} rounded-xl text-left transition-colors cursor-pointer flex flex-col justify-between`}
                  >
                    <span className="text-[10px] font-mono text-slate-500">Быстрый переход</span>
                    <span className="text-xs font-bold truncate mt-0.5">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Search & Filter Controls */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск по стилю (автобус, неон, казахский, отырар, золото...)"
                    className="w-full bg-[#0c1017] border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Sort selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 whitespace-nowrap">Сортировка:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-[#0c1017] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="number">По номеру (#01–#20)</option>
                    <option value="rating">По моему рейтингу (★)</option>
                    <option value="title">По названию (А–Я)</option>
                  </select>

                  <button
                    onClick={() => setActiveView('tournament')}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm"
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Батл 1 на 1</span>
                  </button>
                </div>
              </div>

              {/* Functional Category Filter Tabs (Zero-Pill: Interactive buttons with clean active state) */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as LogoCategory)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                          : 'bg-[#0c1017] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Logo Grid */}
            {filteredLogos.length === 0 ? (
              <div className="text-center py-16 bg-[#0c1017] border border-slate-800/80 rounded-2xl space-y-3">
                <SlidersHorizontal className="w-8 h-8 text-slate-500 mx-auto" />
                <h4 className="text-base font-bold text-white">Ничего не найдено</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  По запросу "{searchQuery}" нет совпадений. Попробуйте сбросить фильтры поиска.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 cursor-pointer"
                >
                  Показать все 20 логотипов
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredLogos.map((logo) => (
                  <LogoCard
                    key={logo.id}
                    logo={logo}
                    isFavorite={favorites.includes(logo.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onSelectLogo={(l) => setInspectModalLogo(l)}
                    onOpenMockup={handleOpenMockup}
                    rating={ratings[logo.id] || 0}
                    onSetRating={handleSetRating}
                    copiedId={copiedId}
                    onQuickCopySvg={handleQuickCopySvg}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* 2. Tournament / Battle Mode View */}
        {activeView === 'tournament' && (
          <ComparisonArena
            logos={ALL_LOGOS}
            onSelectLogoForModal={(l) => setInspectModalLogo(l)}
            onOpenMockup={handleOpenMockup}
          />
        )}

        {/* 3. Mockup Studio View */}
        {activeView === 'mockups' && (
          <MockupStudio
            logos={ALL_LOGOS}
            selectedLogo={mockupTargetLogo}
            onSelectLogo={(l) => setMockupTargetLogo(l)}
          />
        )}
      </main>

      {/* Detail Modal */}
      <LogoDetailModal
        logo={inspectModalLogo}
        onClose={() => setInspectModalLogo(null)}
        onOpenMockup={handleOpenMockup}
      />

      {/* Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        ratings={ratings}
        logos={ALL_LOGOS}
        onSelectLogo={(l) => setInspectModalLogo(l)}
        onRemoveFavorite={handleToggleFavorite}
        onStartBattleWithFavorites={() => {
          setSelectedCategory('featured');
          setActiveView('tournament');
        }}
      />

      {/* Quiet Editorial Footer */}
      <footer className="mt-16 border-t border-slate-800/80 bg-[#07090e] px-4 md:px-8 py-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white font-display">6 ai Identity Suite</span>
          <span aria-hidden="true">·</span>
          <span>20 профессиональных векторных стилей</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Светящийся LED</span>
          <span>·</span>
          <span>Куфический Отырар</span>
          <span>·</span>
          <span>Казахский Шаңырақ</span>
          <span>·</span>
          <span>Античный меандр</span>
          <span>·</span>
          <span>Big Tech</span>
        </div>
      </footer>
    </div>
  );
}
