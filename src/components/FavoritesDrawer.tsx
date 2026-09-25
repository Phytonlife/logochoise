import React from 'react';
import { X, Star, Trash2, ArrowRight } from 'lucide-react';
import { LogoDefinition } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  ratings: Record<string, number>;
  logos: LogoDefinition[];
  onSelectLogo: (logo: LogoDefinition) => void;
  onRemoveFavorite: (id: string) => void;
  onStartBattleWithFavorites: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  ratings,
  logos,
  onSelectLogo,
  onRemoveFavorite,
  onStartBattleWithFavorites,
}) => {
  if (!isOpen) return null;

  const favoriteLogos = logos.filter((l) => favorites.includes(l.id));

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#0c1017] border-l border-slate-800 h-full flex flex-col p-6 shadow-2xl animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <h3 className="text-base font-bold text-white font-display">
              Ваш шорт-лист ({favoriteLogos.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Favorites */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {favoriteLogos.length === 0 ? (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <Star className="w-8 h-8 mx-auto opacity-30 text-slate-400" />
              <p className="text-xs">
                Вы пока не добавили логотипы в избранное.
              </p>
              <p className="text-[11px] text-slate-600">
                Нажмите звездочку на любой карточке, чтобы добавить стиль сюда.
              </p>
            </div>
          ) : (
            favoriteLogos.map((logo) => {
              const rating = ratings[logo.id] || 0;
              return (
                <div
                  key={logo.id}
                  className="bg-[#07090e] border border-slate-800/80 hover:border-slate-700 rounded-xl p-3 flex items-center gap-3 transition-colors group"
                >
                  {/* Miniature SVG Preview */}
                  <div
                    onClick={() => {
                      onClose();
                      onSelectLogo(logo);
                    }}
                    className="w-20 aspect-[16/10] bg-black/60 rounded-lg p-1.5 flex items-center justify-center cursor-pointer overflow-hidden border border-slate-800"
                  >
                    {logo.renderSvg({})}
                  </div>

                  {/* Title and Rating */}
                  <div
                    onClick={() => {
                      onClose();
                      onSelectLogo(logo);
                    }}
                    className="flex-1 min-w-0 cursor-pointer"
                  >
                    <div className="text-xs font-bold text-white truncate group-hover:text-amber-400 transition-colors">
                      {logo.title}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {logo.categoryLabel}
                    </div>
                    {rating > 0 && (
                      <div className="flex items-center gap-0.5 mt-1">
                        {Array.from({ length: rating }).map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => onRemoveFavorite(logo.id)}
                    className="p-1.5 text-slate-600 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                    title="Удалить из избранного"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        {favoriteLogos.length >= 2 && (
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                onClose();
                onStartBattleWithFavorites();
              }}
              className="w-full py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Сразиться в батле среди избранных</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
