import React, { useState, useEffect } from 'react';

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  webkitCompassHeading?: number;
}

const CompassApp: React.FC = () => {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
        const e = event as DeviceOrientationEventiOS;
        if (e.webkitCompassHeading) {
             setHeading(e.webkitCompassHeading);
        } else if (e.alpha) {
            setHeading(360 - e.alpha);
        }
    };

    // Fallback animation for desktop since orientation isn't usually available
    let interval: ReturnType<typeof setInterval>;
    if (!window.DeviceOrientationEvent) {
        interval = setInterval(() => {
            setHeading(prev => (prev + 0.5) % 360);
        }, 50);
    } else {
        window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
        if(interval) clearInterval(interval);
    };
  }, []);

  const getCardinal = (deg: number) => {
      const val = Math.floor((deg / 22.5) + 0.5);
      const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
      return arr[(val % 16)];
  }

  return (
    <div className="h-full bg-black text-white flex flex-col items-center justify-center relative">
        <div className="absolute top-16 text-center">
            <div className="text-6xl font-light">{Math.round(heading)}°</div>
            <div className="text-2xl font-medium mt-1">{getCardinal(heading)}</div>
        </div>

        <div className="w-[300px] h-[300px] rounded-full border-4 border-zinc-800 relative flex items-center justify-center">
             {/* Ticks */}
             {[...Array(72)].map((_, i) => (
                 <div 
                    key={i} 
                    className={`absolute top-0 left-1/2 -translate-x-1/2 origin-bottom h-[150px]
                        ${i % 18 === 0 ? 'w-1 bg-white' : i % 2 === 0 ? 'w-0.5 bg-zinc-600' : 'w-px bg-zinc-800'}
                    `}
                    style={{ transform: `rotate(${i * 5}deg) translateY(10px)` }}
                 >
                     <div className="w-full h-[15px] bg-transparent"></div> {/* Spacer for center */}
                 </div>
             ))}

             {/* Cardinal Labels on Compass Ring */}
             <div className="absolute top-2 left-1/2 -translate-x-1/2 font-bold text-red-500">N</div>
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold">S</div>
             <div className="absolute left-2 top-1/2 -translate-y-1/2 font-bold">W</div>
             <div className="absolute right-2 top-1/2 -translate-y-1/2 font-bold">E</div>

             {/* Rotating Crosshair */}
             <div 
                className="w-[240px] h-[240px] relative transition-transform duration-500 ease-out"
                style={{ transform: `rotate(${-heading}deg)` }}
             >
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-red-500 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1px] h-full bg-zinc-800"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-full h-[1px] bg-zinc-800"></div>
             </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center">
             <div className="font-semibold">37°48'N 122°24'W</div>
             <div className="text-sm text-zinc-500">San Francisco, CA</div>
             <div className="text-sm text-zinc-500">Elevation 50 ft</div>
        </div>
    </div>
  );
};

export default CompassApp;