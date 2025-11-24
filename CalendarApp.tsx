import React from 'react';
import { ChevronLeft, Plus, Search, List } from 'lucide-react';

const CalendarApp: React.FC = () => {
  // Hardcode logic for 2025 as requested
  const now = new Date();
  const year = 2025;
  // Use current month but in 2025
  const month = now.getMonth(); 
  const displayDate = new Date(year, month, 1);
  const currentDay = now.getDate(); // Highlight today's date number

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  const startDay = displayDate.getDay(); // 0 = Sunday

  const days = Array.from({ length: 42 }, (_, i) => {
    const d = i - startDay + 1;
    return d > 0 && d <= daysInMonth ? d : null;
  });

  return (
    <div className="h-full bg-white text-black flex flex-col">
       <div className="pt-12 px-4 pb-2 flex items-center justify-between border-b border-zinc-100">
           <div className="text-red-500 flex items-center gap-1 font-medium text-base">
               <ChevronLeft className="w-6 h-6" /> <span className="font-semibold">{year}</span>
           </div>
           <div className="flex gap-4 text-red-500">
               <List className="w-6 h-6" />
               <Search className="w-6 h-6" />
               <Plus className="w-6 h-6" />
           </div>
       </div>

       <div className="px-4 pt-2">
           <h1 className="text-3xl font-bold">{monthNames[month]}</h1>
       </div>

       {/* Days Header */}
       <div className="grid grid-cols-7 px-2 mt-4 text-center">
           {['S','M','T','W','T','F','S'].map((d,i) => (
               <div key={i} className="text-xs font-medium text-zinc-400 py-2">{d}</div>
           ))}
       </div>

       {/* Calendar Grid */}
       <div className="grid grid-cols-7 px-2 text-center gap-y-2">
           {days.map((d, i) => (
               <div key={i} className={`h-10 w-10 mx-auto flex items-center justify-center rounded-full text-lg font-medium
                   ${d === currentDay ? 'bg-red-500 text-white' : 'text-black'}
                   ${d === null ? 'invisible' : ''}
               `}>
                   {d}
               </div>
           ))}
       </div>

       {/* Events List */}
       <div className="flex-1 bg-zinc-50 mt-4 border-t border-zinc-200 overflow-y-auto p-4 pb-24">
           <div className="text-sm font-semibold text-zinc-500 mb-2">Today</div>
           <div className="bg-white p-3 rounded-xl border-l-4 border-red-500 shadow-sm mb-3">
               <div className="font-semibold">Team Meeting</div>
               <div className="text-xs text-zinc-500">10:00 AM - 11:00 AM</div>
               <div className="text-xs text-zinc-400 mt-1">Conference Room A</div>
           </div>
           <div className="bg-white p-3 rounded-xl border-l-4 border-blue-500 shadow-sm">
               <div className="font-semibold">Lunch with Sarah</div>
               <div className="text-xs text-zinc-500">12:30 PM - 1:30 PM</div>
               <div className="text-xs text-zinc-400 mt-1">Italian Place</div>
           </div>
       </div>
    </div>
  );
};

export default CalendarApp;