import React, { useState, useEffect } from 'react';
import IPhone3D from './components/IPhone3D';
import { Rotate3D, Keyboard, MousePointer2, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isAutoRotating, setIsAutoRotating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setIsAutoRotating(false);
      const step = 15;
      switch (e.key) {
        case 'ArrowUp':
          setRotation((prev) => ({ ...prev, x: prev.x + step }));
          break;
        case 'ArrowDown':
          setRotation((prev) => ({ ...prev, x: prev.x - step }));
          break;
        case 'ArrowLeft':
          setRotation((prev) => ({ ...prev, y: prev.y - step }));
          break;
        case 'ArrowRight':
          setRotation((prev) => ({ ...prev, y: prev.y + step }));
          break;
        case 'r':
        case 'R':
          setRotation({ x: 0, y: 0 }); // Reset
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoRotating) {
        interval = setInterval(() => {
            setRotation(prev => ({ ...prev, y: prev.y + 1 }));
        }, 50);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans text-white"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(126,191,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(176,255,200,0.35), transparent 40%), linear-gradient(135deg, #0b0f17, #06080f 40%, #0a0d12)',
      }}
    >
      
      {/* Controls Overlay */}
      <div className="absolute top-6 left-6 z-10 bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
        <h1 className="text-2xl font-bold mb-2 tracking-tight">iPhone 17 Magicromatic</h1>
        <p className="text-zinc-300 text-sm mb-4">A glassy, high-class React 3D experience</p>
        
        <div className="space-y-3 text-sm">
           <div className="flex items-center gap-3">
              <Keyboard className="w-5 h-5 text-blue-400" />
              <span>Use <strong>Arrow Keys</strong> to rotate</span>
           </div>
           <div className="flex items-center gap-3">
              <MousePointer2 className="w-5 h-5 text-green-400" />
              <span>Click app icons to interact</span>
           </div>
           <div className="flex items-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center font-bold text-yellow-400 border border-yellow-400 rounded text-xs">R</span>
              <span>Press <strong>R</strong> to reset view</span>
           </div>
           <div className="flex items-center gap-3 text-emerald-200">
              <Sparkles className="w-5 h-5" />
              <span>New liquid-glass UI, fully working apps, and an Arcade mini-game</span>
           </div>
        </div>

        <button 
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`mt-6 w-full py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${isAutoRotating ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-white/10 hover:bg-white/20'}`}
        >
            <Rotate3D className="w-4 h-4" />
            {isAutoRotating ? 'Stop Rotation' : 'Auto Rotate'}
        </button>
      </div>

      {/* 3D Stage */}
      <div className="w-full max-w-4xl h-[800px] flex items-center justify-center scale-75 md:scale-90 lg:scale-100 transition-transform">
        <IPhone3D rotation={rotation} />
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-zinc-600 text-xs">
         Built with React, Tailwind & Gemini API • Run on Desktop for best experience
      </div>
    </div>
  );
};

export default App;