import React, { useState, useEffect } from 'react';
import { Globe, AlarmClock, Timer, Hourglass } from 'lucide-react';

const ClockApp: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full bg-black text-white flex flex-col">
       <div className="pt-12 px-4 pb-4 border-b border-zinc-900">
           <h1 className="text-3xl font-bold">World Clock</h1>
       </div>

       <div className="flex-1 overflow-y-auto">
           <ClockRow city="Cupertino" offset={0} time={time} sub="Today" />
           <ClockRow city="New York" offset={3} time={time} sub="Today, +3HRS" />
           <ClockRow city="London" offset={8} time={time} sub="Today, +8HRS" />
           <ClockRow city="Tokyo" offset={16} time={time} sub="Tomorrow, +16HRS" />
           <ClockRow city="Sydney" offset={18} time={time} sub="Tomorrow, +18HRS" />
       </div>

       <div className="h-20 bg-zinc-900/50 backdrop-blur border-t border-zinc-800 flex justify-around items-center pb-4 text-[10px] font-medium text-zinc-500">
            <div className="flex flex-col items-center gap-1 text-orange-400">
                <Globe className="w-6 h-6" />
                <span>World Clock</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <AlarmClock className="w-6 h-6" />
                <span>Alarm</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Hourglass className="w-6 h-6" />
                <span>Stopwatch</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Timer className="w-6 h-6" />
                <span>Timer</span>
            </div>
       </div>
    </div>
  );
};

const ClockRow = ({ city, offset, time, sub }: any) => {
    // Mock offset calc for visual demo
    const localHours = (time.getHours() + offset) % 24;
    const isPM = localHours >= 12;
    const displayHours = localHours % 12 || 12;
    const mins = time.getMinutes().toString().padStart(2, '0');

    return (
        <div className="flex justify-between items-center py-4 px-4 border-b border-zinc-900">
            <div>
                <div className="text-xs text-zinc-500">{sub}</div>
                <div className="text-2xl font-light">{city}</div>
            </div>
            <div className="text-5xl font-thin tracking-tighter">
                {displayHours}:{mins}<span className="text-lg ml-1 text-zinc-500">{isPM ? 'PM' : 'AM'}</span>
            </div>
        </div>
    )
}

export default ClockApp;