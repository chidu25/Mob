import React from 'react';
import IOSScreen from './Screen/IOSScreen';

interface IPhone3DProps {
  rotation: { x: number; y: number };
}

const IPhone3D: React.FC<IPhone3DProps> = ({ rotation }) => {
  // iPhone Dimensions
  const width = 320;
  const height = 650;
  const depth = 50;

  // Natural Titanium / Silver Colors
  const chassisColor = '#E3E3E3'; // Matte silver glass back
  const frameColor = '#D4D4D4'; // Brushed titanium frame
  const cameraBumpColor = '#F2F2F2'; // Slightly lighter bump

  const wrapperStyle: React.CSSProperties = {
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transformStyle: 'preserve-3d',
    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    width: `${width}px`,
    height: `${height}px`,
    position: 'relative',
  };

  const faceCommon: React.CSSProperties = {
    position: 'absolute',
    backfaceVisibility: 'hidden',
  };

  const Lens = ({ size = 42, className }: { size?: number, className?: string }) => (
      <div className={`rounded-full bg-[#1a1a1a] ring-4 ring-[#C0C0C0] flex items-center justify-center shadow-inner ${className}`} style={{ width: size, height: size }}>
          {/* Inner glass reflection */}
          <div className="w-[70%] h-[70%] bg-[#050505] rounded-full relative overflow-hidden ring-1 ring-[#333]">
              <div className="absolute top-1 right-2 w-2 h-2 bg-white/40 rounded-full blur-[1px]"></div>
              <div className="absolute bottom-2 left-2 w-full h-full bg-blue-900/20 rounded-full"></div>
          </div>
      </div>
  );

  return (
    <div className="perspective-container w-full h-full flex items-center justify-center" style={{ perspective: '1500px' }}>
      <div className="iphone-3d" style={wrapperStyle}>
        
        {/* FRONT FACE (Screen) */}
        <div
          className="absolute inset-0 bg-black rounded-[50px] shadow-2xl border-[4px] border-[#D4D4D4] overflow-hidden"
          style={{ 
             transform: `translateZ(${depth / 2}px)`,
             ...faceCommon,
          }}
        >
           <IOSScreen />
           {/* Glass sheen */}
           <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none skew-x-12 opacity-50"></div>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 rounded-[50px] flex items-center justify-center border border-[#D4D4D4]/30"
          style={{ 
             transform: `rotateY(180deg) translateZ(${depth / 2}px)`,
             backgroundColor: chassisColor,
             ...faceCommon
          }}
        >
             {/* Apple Logo */}
             <div className="opacity-60 brightness-110">
                <svg viewBox="0 0 24 24" width="56" height="56" fill="#888"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3 0 2.52.87 3.29.87.76 0 2.21-.87 3.7-.87 1.24.05 2.37.53 3.26 1.45-3.26 2.03-2.34 6.69 1.5 8.16-.36 1.05-.8 2.05-1.86 3zM13 3.5c.55 1.26.15 2.87-1.09 4.15-1.11 1.15-2.85 1.51-3.37.76-.74-1.22.19-2.82 1.31-4.04 1.06-1.15 2.94-1.63 3.15-.87z"/></svg>
             </div>
             
             {/* Triple Camera System Bump */}
             <div 
                className="absolute top-6 left-6 w-[150px] h-[160px] rounded-[38px] shadow-xl border border-white/40"
                style={{ backgroundColor: cameraBumpColor }}
             >
                 {/* Top Left Lens (Wide) */}
                 <div className="absolute top-3 left-3">
                    <Lens size={52} />
                 </div>
                 
                 {/* Bottom Left Lens (Ultra Wide) */}
                 <div className="absolute bottom-3 left-3">
                    <Lens size={52} />
                 </div>
                 
                 {/* Center Right Lens (Telephoto) */}
                 <div className="absolute top-1/2 -translate-y-1/2 right-3">
                    <Lens size={52} />
                 </div>

                 {/* LiDAR Sensor (Bottom Right) */}
                 <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-[#111] ring-1 ring-[#999] opacity-80"></div>

                 {/* Flash (Top Right) */}
                 <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-yellow-100/20 ring-1 ring-white/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white/50 blur-[2px]"></div>
                 </div>

                 {/* Mic Hole */}
                 <div className="absolute bottom-5 right-16 w-1 h-1 rounded-full bg-black/50"></div>
             </div>
        </div>

        {/* RIGHT FACE (Power Button) */}
        <div
          className="absolute"
          style={{
            width: `${depth}px`,
            height: `${height - 90}px`,
            top: '45px',
            right: `-${depth/2}px`,
            transform: 'rotateY(90deg)',
            transformOrigin: 'center',
            backgroundColor: frameColor,
            borderLeft: '1px solid rgba(255,255,255,0.4)',
            borderRight: '1px solid rgba(0,0,0,0.1)',
          }}
        >
             {/* Antenna Band */}
             <div className="absolute top-10 w-full h-[2px] bg-gray-400/30"></div>
             
             {/* Power Button */}
             <div className="absolute top-24 left-1/2 -translate-x-1/2 w-2 h-24 bg-[#BFBFBF] rounded-sm transform translate-z-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
             
             {/* Antenna Band */}
             <div className="absolute bottom-10 w-full h-[2px] bg-gray-400/30"></div>
        </div>

        {/* LEFT FACE (Volume Buttons) */}
        <div
          className="absolute"
          style={{
            width: `${depth}px`,
            height: `${height - 90}px`,
            top: '45px',
            left: `-${depth/2}px`,
            transform: 'rotateY(-90deg)',
            transformOrigin: 'center',
            backgroundColor: frameColor,
            borderLeft: '1px solid rgba(0,0,0,0.1)',
            borderRight: '1px solid rgba(255,255,255,0.4)',
          }}
        >
             {/* Antenna Band */}
             <div className="absolute top-10 w-full h-[2px] bg-gray-400/30"></div>

             {/* Mute Switch */}
             <div className="absolute top-16 left-1/2 -translate-x-1/2 w-2 h-8 bg-[#BFBFBF] rounded-sm"></div>

             {/* Vol Up */}
             <div className="absolute top-32 left-1/2 -translate-x-1/2 w-2 h-14 bg-[#BFBFBF] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
             
             {/* Vol Down */}
             <div className="absolute top-52 left-1/2 -translate-x-1/2 w-2 h-14 bg-[#BFBFBF] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>

             {/* SIM Tray */}
             <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-1.5 h-12 rounded-full border border-black/10">
                 <div className="absolute top-[50%] left-[-4px] w-1 h-1 bg-black/20 rounded-full"></div>
             </div>

             {/* Antenna Band */}
             <div className="absolute bottom-10 w-full h-[2px] bg-gray-400/30"></div>
        </div>

        {/* TOP FACE */}
        <div
            className="absolute flex items-center justify-center"
             style={{
                width: `${width - 80}px`,
                height: `${depth}px`,
                top: `-${depth/2}px`,
                left: '40px',
                transform: 'rotateX(90deg)',
                transformOrigin: 'center',
                backgroundColor: frameColor,
              }}
        >
             <div className="absolute left-10 w-[2px] h-full bg-gray-400/30"></div>
             <div className="absolute right-10 w-[2px] h-full bg-gray-400/30"></div>
        </div>

        {/* BOTTOM FACE */}
        <div
            className="absolute flex items-center justify-center gap-6"
             style={{
                width: `${width - 80}px`,
                height: `${depth}px`,
                bottom: `-${depth/2}px`,
                left: '40px',
                transform: 'rotateX(-90deg)',
                transformOrigin: 'center',
                backgroundColor: frameColor,
              }}
        >
            <div className="absolute left-10 w-[2px] h-full bg-gray-400/30"></div>
            <div className="absolute right-10 w-[2px] h-full bg-gray-400/30"></div>

            {/* Speaker Grills */}
            <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/80 shadow-inner"></div>)}
            </div>

            {/* Lightning/USB-C Port */}
            <div className="w-10 h-3 bg-[#111] rounded-full border border-white/10 shadow-inner relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-[#555]"></div>
            </div>

            {/* Mic Grills */}
             <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/80 shadow-inner"></div>)}
            </div>
        </div>

      </div>
    </div>
  );
};

export default IPhone3D;