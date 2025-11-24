import React from 'react';
import { Cloud, CloudRain, Sun, Wind, CloudLightning, MapPin, Menu } from 'lucide-react';

const WeatherApp: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-b from-[#2c3e50] to-[#000000] text-white flex flex-col p-6 overflow-hidden relative">
      {/* Background blobs for atmosphere */}
      <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[60%] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center mt-8">
        <h2 className="text-2xl font-medium tracking-wide">Cupertino</h2>
        <div className="text-8xl font-thin mt-2 ml-4">72°</div>
        <div className="text-lg font-medium text-blue-100 mt-[-5px]">Mostly Clear</div>
        <div className="flex gap-4 text-base font-medium mt-1">
            <span>H:76°</span>
            <span>L:62°</span>
        </div>
      </div>

      <div className="mt-12 space-y-3 relative z-10 overflow-y-auto pb-10 no-scrollbar">
          {/* Hourly Forecast Mock */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="text-xs font-semibold border-b border-white/20 pb-2 mb-3 uppercase opacity-70">Hourly Forecast</div>
              <div className="flex justify-between overflow-x-auto gap-6 pb-2">
                 <div className="flex flex-col items-center gap-2"><span className="text-sm">Now</span><Cloud className="w-5 h-5" /><span className="text-lg font-medium">72°</span></div>
                 <div className="flex flex-col items-center gap-2"><span className="text-sm">10PM</span><CloudRain className="w-5 h-5 text-blue-300" /><span className="text-lg font-medium">68°</span></div>
                 <div className="flex flex-col items-center gap-2"><span className="text-sm">11PM</span><CloudRain className="w-5 h-5 text-blue-300" /><span className="text-lg font-medium">65°</span></div>
                 <div className="flex flex-col items-center gap-2"><span className="text-sm">12AM</span><Cloud className="w-5 h-5" /><span className="text-lg font-medium">63°</span></div>
                 <div className="flex flex-col items-center gap-2"><span className="text-sm">1AM</span><Cloud className="w-5 h-5" /><span className="text-lg font-medium">62°</span></div>
              </div>
          </div>

          {/* 10-Day Forecast Mock */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
               <div className="text-xs font-semibold border-b border-white/20 pb-2 mb-2 uppercase opacity-70">10-Day Forecast</div>
               <div className="space-y-4">
                  <DayRow day="Today" icon={<Cloud className="w-5 h-5" />} min={62} max={76} />
                  <DayRow day="Tue" icon={<Sun className="w-5 h-5 text-yellow-400" />} min={65} max={82} />
                  <DayRow day="Wed" icon={<Sun className="w-5 h-5 text-yellow-400" />} min={68} max={85} />
                  <DayRow day="Thu" icon={<CloudLightning className="w-5 h-5 text-yellow-200" />} min={60} max={75} />
                  <DayRow day="Fri" icon={<CloudRain className="w-5 h-5 text-blue-300" />} min={58} max={68} />
               </div>
          </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#2c3e50]/50 backdrop-blur-lg flex justify-between items-center px-6 border-t border-white/10">
          <MapPin className="w-6 h-6" />
          <div className="flex gap-1.5">
             <div className="w-2 h-2 rounded-full bg-white"></div>
             <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
          <Menu className="w-6 h-6" />
      </div>
    </div>
  );
};

const DayRow = ({ day, icon, min, max }: any) => (
    <div className="flex items-center justify-between text-sm font-medium">
        <div className="w-12">{day}</div>
        <div className="flex items-center justify-center w-8">{icon}</div>
        <div className="flex items-center gap-2 flex-1 ml-4">
             <span className="text-white/60 w-6 text-right">{min}°</span>
             <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden relative">
                 <div className="absolute top-0 h-full bg-gradient-to-r from-green-400 to-yellow-400 w-[60%] left-[20%]"></div>
             </div>
             <span className="w-6">{max}°</span>
        </div>
    </div>
)

export default WeatherApp;