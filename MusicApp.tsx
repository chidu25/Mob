import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, ListMusic, MoreHorizontal } from 'lucide-react';

const MusicApp: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="h-full bg-gradient-to-b from-zinc-800 to-black text-white flex flex-col relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-red-500/20 blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="pt-12 px-6 flex justify-center items-center relative z-10">
          <div className="w-10 h-1 bg-white/20 rounded-full"></div>
      </div>

      {/* Album Art */}
      <div className="flex-1 flex items-center justify-center px-8 z-10">
          <div className="w-full aspect-square bg-zinc-800 rounded-xl shadow-2xl overflow-hidden relative group">
              <img src="https://picsum.photos/seed/music/400/400" alt="Album Art" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
          </div>
      </div>

      {/* Controls Area */}
      <div className="px-8 pb-12 z-10">
          <div className="flex justify-between items-center mb-6">
              <div>
                  <h2 className="text-2xl font-bold leading-tight">Midnight City</h2>
                  <p className="text-zinc-400 text-lg">M83</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <MoreHorizontal className="w-5 h-5" />
              </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/20 rounded-full mb-2 cursor-pointer group" onClick={() => setProgress(Math.random() * 100)}>
              <div className="h-full bg-white rounded-full relative" style={{ width: `${progress}%` }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform"></div>
              </div>
          </div>
          <div className="flex justify-between text-xs text-zinc-400 font-medium mb-8">
              <span>1:12</span>
              <span>-2:51</span>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center px-4">
               <SkipBack className="w-8 h-8 fill-current" />
               <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
               >
                   {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
               </button>
               <SkipForward className="w-8 h-8 fill-current" />
          </div>

          {/* Volume */}
          <div className="mt-8 flex items-center gap-3">
              <Volume2 className="w-4 h-4 text-zinc-400" />
              <div className="flex-1 h-1 bg-white/20 rounded-full">
                  <div className="w-[70%] h-full bg-white rounded-full"></div>
              </div>
          </div>
          
           {/* Bottom Actions */}
           <div className="mt-6 flex justify-between px-8 text-zinc-400">
               <div className="flex flex-col items-center gap-1">
                   <div className="text-[10px] uppercase tracking-widest font-bold text-red-400">Lyrics</div>
               </div>
               <ListMusic className="w-5 h-5" />
           </div>
      </div>
    </div>
  );
};

export default MusicApp;