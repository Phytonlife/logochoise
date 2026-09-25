import React, { useState } from 'react';
import { Trophy, RefreshCw, CheckCircle2, ArrowRight, Sparkles, Smartphone, Download } from 'lucide-react';
import { LogoDefinition } from '../types';

interface ComparisonArenaProps {
  logos: LogoDefinition[];
  onSelectLogoForModal: (logo: LogoDefinition) => void;
  onOpenMockup: (logo: LogoDefinition) => void;
}

export const ComparisonArena: React.FC<ComparisonArenaProps> = ({
  logos,
  onSelectLogoForModal,
  onOpenMockup,
}) => {
  // Head-to-head tournament state
  const [matchupIndex, setMatchupIndex] = useState(0);
  const [currentWinner, setCurrentWinner] = useState<LogoDefinition | null>(logos[0] || null);
  const [contenderIndex, setContenderIndex] = useState(1);
  const [history, setHistory] = useState<LogoDefinition[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Manual comparison selectors
  const [manualLeftId, setManualLeftId] = useState(logos[0]?.id || '');
  const [manualRightId, setManualRightId] = useState(logos[1]?.id || '');

  const totalRounds = Math.min(10, logos.length - 1);

  const handleVote = (winner: LogoDefinition) => {
    setCurrentWinner(winner);
    setHistory((prev) => [...prev, winner]);

    if (matchupIndex + 1 >= totalRounds) {
      setIsFinished(true);
    } else {
      setMatchupIndex((prev) => prev + 1);
      setContenderIndex((prev) => (prev + 1) % logos.length);
    }
  };

  const restartTournament = () => {
    // Shuffle slightly for fresh tournament
    setMatchupIndex(0);
    setCurrentWinner(logos[Math.floor(Math.random() * logos.length)]);
    setContenderIndex(Math.floor(Math.random() * (logos.length - 1)));
    setHistory([]);
    setIsFinished(false);
  };

  const leftLogo = currentWinner || logos[0];
  const rightLogo = logos[contenderIndex] || logos[1];

  const manualLeftLogo = logos.find((l) => l.id === manualLeftId) || logos[0];
  const manualRightLogo = logos.find((l) => l.id === manualRightId) || logos[1];

  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 py-6">
      {/* Header Info Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
          <Trophy className="w-3.5 h-3.5" />
          <span>Турнир стилей — Интерактивный поиск фаворита</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
          Какой стиль логотипа 6 ai победит?
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Сравнивайте концепты лицом к лицу. Выбирайте лучший вариант в каждом раунде, пока алгоритм не определит ваш персональный Топ-1.
        </p>
      </div>

      {!isFinished ? (
        <div className="bg-[#0c1017] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
          {/* Progress Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono">
              Раунд {matchupIndex + 1} из {totalRounds}
            </span>
            <div className="w-48 bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-400 h-full transition-all duration-300 rounded-full"
                style={{ width: `${((matchupIndex + 1) / totalRounds) * 100}%` }}
              />
            </div>
            <button
              onClick={restartTournament}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Сбросить</span>
            </button>
          </div>

          {/* Side by Side Battle Arena */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Card Left */}
            <div className="group relative bg-[#07090e] border border-slate-800 hover:border-amber-500/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-200">
              <div className="text-xs text-amber-400 font-medium mb-2 flex items-center justify-between">
                <span>Вариант А · {leftLogo.categoryLabel}</span>
                <span className="font-mono text-slate-500">#{leftLogo.number}</span>
              </div>
              
              <div className="aspect-[16/10] w-full flex items-center justify-center p-2 rounded-lg bg-black/40 overflow-hidden my-3">
                {leftLogo.renderSvg({})}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{leftLogo.title}</h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{leftLogo.description}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectLogoForModal(leftLogo)}
                  className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
                >
                  Инфо о стиле
                </button>
                <button
                  onClick={() => handleVote(leftLogo)}
                  className="px-5 py-2 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Выбрать этот стиль</span>
                </button>
              </div>
            </div>

            {/* Card Right */}
            <div className="group relative bg-[#07090e] border border-slate-800 hover:border-amber-500/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-200">
              <div className="text-xs text-amber-400 font-medium mb-2 flex items-center justify-between">
                <span>Вариант Б · {rightLogo.categoryLabel}</span>
                <span className="font-mono text-slate-500">#{rightLogo.number}</span>
              </div>

              <div className="aspect-[16/10] w-full flex items-center justify-center p-2 rounded-lg bg-black/40 overflow-hidden my-3">
                {rightLogo.renderSvg({})}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{rightLogo.title}</h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{rightLogo.description}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectLogoForModal(rightLogo)}
                  className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
                >
                  Инфо о стиле
                </button>
                <button
                  onClick={() => handleVote(rightLogo)}
                  className="px-5 py-2 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Выбрать этот стиль</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Winner Podium */
        <div className="bg-gradient-to-b from-[#121824] to-[#090d14] border border-amber-500/40 rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-400 tracking-widest uppercase font-mono">
              ★ ВАШ АБСОЛЮТНЫЙ ФАВОРИТ ★
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-display">
              {currentWinner?.title}
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
              {currentWinner?.description}
            </p>
          </div>

          {/* Winner Display Preview */}
          <div className="max-w-xl mx-auto aspect-[16/10] bg-[#03060a] border border-slate-700/80 rounded-xl p-6 shadow-2xl flex items-center justify-center">
            {currentWinner?.renderSvg({})}
          </div>

          {/* Action buttons for winner */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => currentWinner && onOpenMockup(currentWinner)}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>Посмотреть на мерче и вывесках</span>
            </button>

            <button
              onClick={() => currentWinner && onSelectLogoForModal(currentWinner)}
              className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Открыть бренд-кит и скачать вектор</span>
            </button>

            <button
              onClick={restartTournament}
              className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Пройти турнир заново</span>
            </button>
          </div>
        </div>
      )}

      {/* Manual Free 1-on-1 Comparison Tool */}
      <div className="bg-[#0a0d14] border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Свободное сравнение любых двух логотипов</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Выберите любые две концепции из выпадающих списков для детального визуального сравнения
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={manualLeftId}
              onChange={(e) => setManualLeftId(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {logos.map((l) => (
                <option key={`left-${l.id}`} value={l.id}>
                  #{l.number} {l.title}
                </option>
              ))}
            </select>

            <span className="text-slate-500 text-xs font-bold">VS</span>

            <select
              value={manualRightId}
              onChange={(e) => setManualRightId(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {logos.map((l) => (
                <option key={`right-${l.id}`} value={l.id}>
                  #{l.number} {l.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Free Comparison Render Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#05070a] border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-white">{manualLeftLogo.title}</span>
              <span className="font-mono text-slate-500">{manualLeftLogo.categoryLabel}</span>
            </div>
            <div className="aspect-[16/10] w-full flex items-center justify-center p-2 rounded-lg bg-black/60">
              {manualLeftLogo.renderSvg({})}
            </div>
            <div className="mt-3 text-xs text-slate-400">
              <span className="text-amber-400 font-medium">Шрифт:</span> {manualLeftLogo.typography.primary} · {manualLeftLogo.typography.style}
            </div>
          </div>

          <div className="bg-[#05070a] border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-white">{manualRightLogo.title}</span>
              <span className="font-mono text-slate-500">{manualRightLogo.categoryLabel}</span>
            </div>
            <div className="aspect-[16/10] w-full flex items-center justify-center p-2 rounded-lg bg-black/60">
              {manualRightLogo.renderSvg({})}
            </div>
            <div className="mt-3 text-xs text-slate-400">
              <span className="text-amber-400 font-medium">Шрифт:</span> {manualRightLogo.typography.primary} · {manualRightLogo.typography.style}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
