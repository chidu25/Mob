import React from 'react';
import { Search, Map as MapIcon, Navigation, Info } from 'lucide-react';

const MapsApp: React.FC = () => {
  return (
    <div className="h-full bg-[#fcfcfc] flex flex-col relative text-black">
        {/* Map Visualization (CSS Pattern) */}
        <div className="absolute inset-0 bg-[#e5e3df] z-0 overflow-hidden">
             {/* Roads */}
             <div className="absolute top-0 left-[30%] w-[40px] h-full bg-white border-x-4 border-white shadow-sm"></div>
             <div className="absolute top-[40%] left-0 w-full h-[30px] bg-white border-y-4 border-white shadow-sm transform rotate-12 origin-left"></div>
             <div className="absolute bottom-[20%] left-0 w-full h-[20px] bg-white border-y-2 border-white"></div>
             
             {/* Parks */}
             <div className="absolute top-10 right-10 w-40 h-40 bg-[#b8e9b8] rounded-3xl opacity-80"></div>
             <div className="absolute bottom-20 left-[-20px] w-56 h-32 bg-[#c9e8c9] rounded-full opacity-80"></div>
             
             {/* Water */}
             <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-[#aadaff] rounded-full"></div>

             {/* Location Dot */}
             <div className="absolute top-[45%] left-[50%] w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 animate-pulse flex items-center justify-center">
                 <div className="w-10 h-10 bg-blue-500/20 rounded-full absolute"></div>
             </div>
             
             {/* Map Labels */}
             <div className="absolute top-[20%] left-[35%] text-[10px] font-bold text-zinc-400 uppercase tracking-widest rotate-90">Main Street</div>
             <div className="absolute top-[45%] left-[10%] text-[10px] font-bold text-zinc-400 uppercase tracking-widest rotate-12">Broadway</div>
             <div className="absolute top-[15%] right-[15%] text-xs font-semibold text-green-800">Central Park</div>
        </div>

        {/* Search Bar */}
        <div className="relative z-20 pt-14 px-4">
            <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                <Search className="w-5 h-5 text-zinc-400" />
                <input type="text" placeholder="Search Maps" className="flex-1 outline-none text-sm font-medium" />
                <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-xs font-bold text-zinc-600">JD</div>
            </div>
            
            <div className="flex gap-2 mt-2 overflow-x-auto pb-2 no-scrollbar">
                <div className="bg-white rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold border flex items-center gap-1"><span className="text-orange-500">🍔</span> Restaurants</div>
                <div className="bg-white rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold border flex items-center gap-1"><span className="text-blue-500">⛽</span> Gas</div>
                <div className="bg-white rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold border flex items-center gap-1"><span className="text-green-500">🛒</span> Groceries</div>
            </div>
        </div>

        {/* Bottom Sheet */}
        <div className="mt-auto relative z-20 bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-4 pb-8">
            <div className="w-10 h-1.5 bg-zinc-200 rounded-full mx-auto mb-4"></div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl">San Francisco</h3>
                <button className="bg-zinc-100 p-1.5 rounded-full"><Info className="w-4 h-4 text-zinc-500" /></button>
            </div>
            <div className="flex gap-4">
                <div className="flex-1 bg-blue-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-semibold shadow-md active:scale-95 transition-transform">
                    <Navigation className="w-5 h-5 fill-current" />
                    Directions
                </div>
                 <div className="flex-1 bg-zinc-100 text-blue-600 rounded-xl py-3 flex items-center justify-center gap-2 font-semibold active:scale-95 transition-transform">
                    Search Nearby
                </div>
            </div>
        </div>
    </div>
  );
};

export default MapsApp;