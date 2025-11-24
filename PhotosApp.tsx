import React from 'react';
import { ChevronLeft } from 'lucide-react';

const PhotosApp: React.FC = () => {
  const photos = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/${i + 100}/200/200`,
  }));

  return (
    <div className="h-full bg-white flex flex-col text-black">
      <div className="pt-12 px-4 pb-2 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-10 border-b border-zinc-200">
        <div className="flex items-center text-blue-500">
             <ChevronLeft className="w-6 h-6" />
             <span className="text-lg">Albums</span>
        </div>
        <h2 className="text-lg font-bold">Recents</h2>
        <div className="text-blue-500 text-lg">Select</div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-1">
        <div className="grid grid-cols-3 gap-1 mb-8">
            {photos.map(p => (
                <div key={p.id} className="aspect-square bg-zinc-100 overflow-hidden">
                    <img src={p.url} alt="Photo" className="w-full h-full object-cover" loading="lazy" />
                </div>
            ))}
        </div>
      </div>

      <div className="h-16 border-t flex items-center justify-around pb-4 bg-white/95 backdrop-blur">
          <span className="font-semibold text-blue-600">Library</span>
          <span className="text-zinc-400">For You</span>
          <span className="text-zinc-400">Albums</span>
          <span className="text-zinc-400">Search</span>
      </div>
    </div>
  );
};

export default PhotosApp;
