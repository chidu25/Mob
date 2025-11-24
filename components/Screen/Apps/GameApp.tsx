import React, { useEffect, useState } from 'react';
import { Gamepad2, MoveLeft, MoveRight, RotateCcw, Zap } from 'lucide-react';

interface Orb {
  id: number;
  x: number; // percentage
  y: number; // percentage
  speed: number;
  hue: number;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const GameApp: React.FC = () => {
  const [position, setPosition] = useState(50); // player position in percent
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const moveInterval = setInterval(() => {
      setOrbs((prev) => {
        const next: Orb[] = [];
        prev.forEach((orb) => {
          const nextY = orb.y + orb.speed;
          if (nextY >= 100) {
            if (Math.abs(orb.x - position) <= 12) {
              setScore((s) => s + 1);
            } else {
              setMisses((m) => m + 1);
            }
          } else {
            next.push({ ...orb, y: nextY });
          }
        });
        return next;
      });
    }, 70);

    const spawnInterval = setInterval(() => {
      setOrbs((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: 10 + Math.random() * 80,
          y: 0,
          speed: 0.9 + Math.random() * 1.4,
          hue: 180 + Math.random() * 120,
        },
      ]);
    }, 1100);

    return () => {
      clearInterval(moveInterval);
      clearInterval(spawnInterval);
    };
  }, [isPlaying, position]);

  useEffect(() => {
    if (misses >= 5) {
      setIsPlaying(false);
    }
  }, [misses]);

  const movePlayer = (delta: number) => setPosition((p) => clamp(p + delta, 8, 92));

  const resetGame = () => {
    setPosition(50);
    setOrbs([]);
    setScore(0);
    setMisses(0);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col h-full text-white bg-gradient-to-b from-[#081020] via-[#0c1425] to-[#0a0f1f]">
      <div className="pt-10 pb-4 px-5 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-emerald-300" />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/70">Liquid Arcade</p>
            <p className="text-lg font-semibold">Hyper Glide</p>
          </div>
        </div>
        <button
          onClick={resetGame}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="text-sm">Reset</span>
        </button>
      </div>

      <div className="px-5 py-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-wide">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
          <p className="text-white/60">Score</p>
          <p className="text-2xl font-bold text-emerald-200">{score}</p>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
          <p className="text-white/60">Misses</p>
          <p className={`text-2xl font-bold ${misses >= 4 ? 'text-rose-300' : 'text-amber-200'}`}>{misses} / 5</p>
        </div>
      </div>

      <div className="relative flex-1 mx-5 rounded-[28px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f1b30]/80 via-[#13203a]/70 to-[#0b1629]/80 shadow-inner">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[320px] h-[320px] bg-emerald-400/10 blur-3xl -left-24 -top-28"></div>
          <div className="absolute w-[280px] h-[280px] bg-cyan-400/10 blur-3xl right-[-90px] bottom-[-120px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5"></div>
        </div>

        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute w-7 h-7 rounded-full shadow-lg shadow-emerald-500/20 border border-white/30"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle at 30% 30%, #fff, hsla(${orb.hue}, 100%, 70%, 0.9))`,
              boxShadow: `0 0 20px hsla(${orb.hue}, 100%, 70%, 0.4)`,
            }}
          ></div>
        ))}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-4 rounded-full bg-white/5 border border-white/10 shadow-inner">
          <div
            className="absolute -top-2 h-8 w-16 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-300 shadow-xl shadow-emerald-500/40 border border-white/30"
            style={{ left: `${position}%`, transform: 'translate(-50%, 0)' }}
          ></div>
        </div>

        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-xl gap-3 text-center">
            <Zap className="w-10 h-10 text-emerald-200" />
            <p className="text-lg font-semibold">Game Over</p>
            <p className="text-sm text-white/60">You let too many gems slip by. Reset to ride again.</p>
            <button
              onClick={resetGame}
              className="px-4 py-2 rounded-full bg-emerald-500 text-black font-semibold shadow-lg shadow-emerald-500/40"
            >
              Restart
            </button>
          </div>
        )}
      </div>

      <div className="py-4 px-5 flex items-center justify-between gap-2 text-xs uppercase tracking-wide">
        <div className="flex items-center gap-2">
          <MoveLeft className="w-4 h-4 text-white/60" />
          <span>Slide left/right</span>
        </div>
        <div className="flex items-center gap-1 text-white/60">
          <span className="text-white">{isPlaying ? 'Live' : 'Paused'}</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>
        <div className="flex items-center gap-2">
          <MoveRight className="w-4 h-4 text-white/60" />
          <span>Catch the drops</span>
        </div>
      </div>

      <div className="px-5 pb-5 flex items-center gap-3">
        <button
          onClick={() => movePlayer(-8)}
          className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
        >
          Left
        </button>
        <button
          onClick={() => movePlayer(8)}
          className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default GameApp;
