import React from 'react';
import { RefreshCw, Shield, ChevronLeft, ChevronRight, Share, Book, Copy, Search } from 'lucide-react';

const SafariApp: React.FC = () => {
  return (
    <div className="h-full bg-white text-black flex flex-col relative">
      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-zinc-50 pb-32">
         <div className="bg-gradient-to-b from-blue-50 to-white pt-16 px-6 pb-8">
             <div className="flex flex-col items-center gap-4 mb-12">
                 <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Favorites
                 </h1>
             </div>
             
             <div className="grid grid-cols-4 gap-y-8 gap-x-4">
                 <FavIcon color="bg-zinc-800" label="Apple" />
                 <FavIcon color="bg-blue-500" label="iCloud" />
                 <FavIcon color="bg-red-500" label="Google" />
                 <FavIcon color="bg-sky-500" label="Twitter" />
                 <FavIcon color="bg-indigo-500" label="Wiki" />
                 <FavIcon color="bg-orange-500" label="News" />
                 <FavIcon color="bg-green-500" label="Maps" />
                 <FavIcon color="bg-yellow-500" label="Notes" />
             </div>
         </div>
         
         <div className="px-6">
             <h3 className="font-bold text-xl mb-4">Privacy Report</h3>
             <div className="bg-white rounded-xl shadow-sm p-4 border border-zinc-100 flex items-center gap-4">
                 <Shield className="w-8 h-8 text-blue-500" />
                 <div>
                     <div className="font-semibold text-sm">In the last 7 days</div>
                     <div className="text-xs text-zinc-500">Safari has prevented 42 trackers from profiling you.</div>
                 </div>
             </div>
         </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-lg border-t border-zinc-200 pb-8 pt-2 z-50">
         {/* URL Bar */}
         <div className="mx-4 mb-3 h-12 bg-zinc-100 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex items-center px-3 gap-2">
             <span className="text-xs font-medium text-zinc-500">AA</span>
             <div className="flex-1 flex items-center justify-center gap-1 text-sm text-black font-medium">
                 <Shield className="w-3 h-3 text-black fill-current" />
                 apple.com
             </div>
             <RefreshCw className="w-4 h-4 text-zinc-500" />
         </div>

         {/* Toolbar */}
         <div className="flex justify-between items-center px-6 text-blue-500">
             <ChevronLeft className="w-6 h-6 text-zinc-300" />
             <ChevronRight className="w-6 h-6 text-zinc-300" />
             <Share className="w-5 h-5" />
             <Book className="w-5 h-5" />
             <Copy className="w-5 h-5" />
         </div>
      </div>
    </div>
  );
};

const FavIcon = ({ color, label }: any) => (
    <div className="flex flex-col items-center gap-2">
        <div className={`w-14 h-14 rounded-xl ${color} shadow-sm flex items-center justify-center text-white font-bold text-xl`}>
            {label[0]}
        </div>
        <span className="text-xs text-zinc-600">{label}</span>
    </div>
);

export default SafariApp;