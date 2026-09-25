import React from 'react';
import { Star, Download, Eye, Smartphone, Sparkles, Check } from 'lucide-react';
import { LogoDefinition } from '../types';

interface LogoCardProps {
  logo: LogoDefinition;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectLogo: (logo: LogoDefinition) => void;
  onOpenMockup: (logo: LogoDefinition) => void;
  rating: number;
  onSetRating: (id: string, rating: number) => void;
  copiedId: string | null;
  onQuickCopySvg: (logo: LogoDefinition) => void;
}

export const LogoCard: React.FC<LogoCardProps> = ({
  logo,
  isFavorite,
  onToggleFavorite,
  onSelectLogo,
  onOpenMockup,
  rating,
  onSetRating,
  copiedId,
  onQuickCopySvg,
}) => {
  return (
    <div className="group relative bg-[#0e121a] border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between">
      {/* Visual Canvas Area */}
      <div
        onClick={() => onSelectLogo(logo)}
        className="relative aspect-[16/10] w-full p-4 flex items-center justify-center cursor-pointer overflow-hidden bg-[#090b10] border-b border-slate-800/60"
      >
        <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]">
          {logo.renderSvg({})}
        </div>

        {/* Quick floating action over canvas */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            title="Добавить в избранное"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(logo.id);
            }}
            className={`p-1.5 rounded-lg backdrop-blur-md transition-colors cursor-pointer ${
              isFavorite
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                : 'bg-black/60 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${isFavorite ? 'fill-amber-400' : ''}`} />
          </button>
        </div>

        {/* Number badge (quiet unboxed) */}
        <div className="absolute bottom-2 left-3 text-[11px] font-mono text-slate-500 font-semibold tracking-wider">
          #{String(logo.number).padStart(2, '0')}
        </div>
      </div>

      {/* Card Content & Metadata (zero-pill discipline) */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Unboxed clean metadata line with separators */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
            <span className="text-amber-400/90 font-medium">{logo.categoryLabel}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="truncate">{logo.typography.primary}</span>
          </div>

          <h3
            onClick={() => onSelectLogo(logo)}
            className="text-base font-bold text-white hover:text-amber-400 transition-colors cursor-pointer tracking-tight"
          >
            {logo.title}
          </h3>

          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {logo.description}
          </p>
        </div>

        {/* Interactive Rating & Bottom Bar */}
        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
          {/* Star rating selector */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => onSetRating(logo.id, rating === star ? 0 : star)}
                className="p-0.5 text-slate-600 hover:text-amber-400 transition-colors cursor-pointer"
                title={`Оценка ${star} из 5`}
              >
                <Star
                  className={`w-3.5 h-3.5 ${
                    rating >= star ? 'text-amber-400 fill-amber-400' : 'text-slate-700'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Quick Action buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onOpenMockup(logo)}
              title="Примерить на мерче и табло"
              className="p-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer flex items-center gap-1"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onQuickCopySvg(logo)}
              title="Скопировать SVG код"
              className="p-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
            >
              {copiedId === logo.id ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              onClick={() => onSelectLogo(logo)}
              className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-md transition-colors cursor-pointer flex items-center gap-1"
            >
              <Eye className="w-3 h-3" />
              <span>Обзор</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
