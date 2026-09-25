import React, { useState } from 'react';
import { X, Download, Copy, Check, Smartphone, Palette, BookOpen, Layers, ShieldCheck } from 'lucide-react';
import { LogoDefinition } from '../types';

interface LogoDetailModalProps {
  logo: LogoDefinition | null;
  onClose: () => void;
  onOpenMockup: (logo: LogoDefinition) => void;
}

export const LogoDetailModal: React.FC<LogoDetailModalProps> = ({
  logo,
  onClose,
  onOpenMockup,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'brandkit' | 'svgcode'>('preview');

  if (!logo) return null;

  const handleCopySvg = () => {
    // Generate clean SVG string for export
    const svgElement = document.getElementById(`modal-svg-${logo.id}`);
    if (svgElement) {
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);
      navigator.clipboard.writeText(svgString);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleDownloadSvg = () => {
    const svgElement = document.getElementById(`modal-svg-${logo.id}`);
    if (svgElement) {
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `6_ai_${logo.id}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const handleDownloadPng = () => {
    const svgElement = document.getElementById(`modal-svg-${logo.id}`);
    if (!svgElement) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.fillStyle = logo.defaultColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = `6_ai_${logo.id}_hd.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = url;
  };

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-amber-400 font-bold text-sm">
              #{String(logo.number).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight font-display">
                {logo.title}
              </h3>
              <p className="text-xs text-slate-400">{logo.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 pt-3 border-b border-slate-800/80 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-slate-800 text-white border-b-2 border-amber-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Векторный просмотр
          </button>
          <button
            onClick={() => setActiveTab('brandkit')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'brandkit'
                ? 'bg-slate-800 text-white border-b-2 border-amber-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Бренд-гайд & Шрифты
          </button>
          <button
            onClick={() => setActiveTab('svgcode')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'svgcode'
                ? 'bg-slate-800 text-white border-b-2 border-amber-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            SVG Код
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {/* Large Vector Canvas */}
              <div
                id={`modal-svg-${logo.id}`}
                className="w-full aspect-[16/10] bg-[#05070a] border border-slate-800 rounded-xl p-8 flex items-center justify-center shadow-inner"
              >
                {logo.renderSvg({})}
              </div>

              {/* Quick Actions Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadSvg}
                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Скачать SVG (Вектор)</span>
                  </button>

                  <button
                    onClick={handleDownloadPng}
                    className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>Скачать PNG (1200x720)</span>
                  </button>

                  <button
                    onClick={handleCopySvg}
                    className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Скопировано!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Копировать SVG</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOpenMockup(logo);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Открыть в мокапах (Табло, Мерч, Иконка)</span>
                </button>
              </div>

              {/* Color Palette Swatches */}
              <div className="bg-[#0e131d] border border-slate-800/80 rounded-xl p-4 space-y-2">
                <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-amber-400" />
                  <span>Фирменная цветовая палитра:</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {Object.entries(logo.defaultColors).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => copyColor(val)}
                      className="group flex items-center gap-2 bg-slate-900 border border-slate-700/80 hover:border-slate-500 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                      title="Кликните чтобы скопировать HEX код"
                    >
                      <span
                        className="w-4 h-4 rounded-md border border-white/20 shadow-sm"
                        style={{ backgroundColor: val }}
                      />
                      <span className="text-xs font-mono text-slate-300 uppercase">
                        {val}
                      </span>
                      {copiedHex === val ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <span className="text-[10px] text-slate-500 font-sans group-hover:text-slate-300">
                          {key}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'brandkit' && (
            <div className="space-y-6">
              {/* Design Rationale */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Концептуальное описание & Философия</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-[#0e121a] p-4 rounded-xl border border-slate-800">
                  {logo.description}
                </p>
              </div>

              {/* Cultural or Historic roots */}
              {logo.culturalBackground && (
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span>Культурный код и исторический контекст</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-[#0e121a] p-4 rounded-xl border border-slate-800">
                    {logo.culturalBackground}
                  </p>
                </div>
              )}

              {/* Design Highlights */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Ключевые детали конструкции</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {logo.designHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#0e121a] border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-amber-400 font-mono font-bold">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Use */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">Рекомендованные сферы применения</h4>
                <p className="text-xs text-slate-300 bg-[#0e121a] p-3 rounded-lg border border-slate-800">
                  {logo.recommendedUse}
                </p>
              </div>

              {/* Typography specs */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">Шрифтовая гармония</h4>
                <div className="p-3 bg-[#0e121a] border border-slate-800 rounded-lg flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400">Рекомендуемый шрифт: </span>
                    <span className="text-amber-400 font-semibold">{logo.typography.primary}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{logo.typography.style}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'svgcode' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Чистый векторный SVG код (готов для вставки в Figma / Illustrator / Web):</span>
                <button
                  onClick={handleCopySvg}
                  className="px-3 py-1 bg-amber-400 text-slate-950 font-bold rounded hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  {copiedCode ? 'Скопировано!' : 'Копировать всё'}
                </button>
              </div>

              <div className="bg-[#05070a] border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 max-h-72 overflow-y-auto">
                <pre className="whitespace-pre-wrap break-all">
                  {`<!-- 6 AI Logo - ${logo.title} -->
<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
  <!-- Style: ${logo.subtitle} -->
  <!-- Colors: ${JSON.stringify(logo.defaultColors)} -->
</svg>`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
