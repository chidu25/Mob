import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import { AppDefinition } from '../../types';
import { Wifi, Battery, Signal } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const IOSScreen: React.FC = () => {
  const [activeApp, setActiveApp] = useState<AppDefinition | null>(null);

  const handleHomeClick = () => {
    setActiveApp(null);
  };

  return (
    <div className="w-full h-full bg-cover bg-center rounded-[40px] overflow-hidden relative select-none"
         style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1695646199484-9c02d753b53a?q=80&w=1000&auto=format&fit=crop")', backgroundColor: '#000' }}>
      
      {/* Status Bar */}
      <div className="absolute top-0 w-full h-12 z-50 flex justify-between items-center px-6 pt-2 text-white mix-blend-difference text-xs font-medium pointer-events-none">
        <span>9:41</span>
        <div className="flex gap-2 items-center">
            <Signal className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <Battery className="w-5 h-5" />
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-50 flex items-center justify-center transition-all duration-300 hover:w-[150px]">
          <div className="w-full h-full relative">
              {/* Camera Lens */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1a1a1a]"></div>
          </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full h-full relative">
         <AnimatePresence>
            {!activeApp ? (
                <motion.div 
                    key="home"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                >
                    <HomeScreen onOpenApp={setActiveApp} />
                </motion.div>
            ) : (
                <motion.div 
                    key="app"
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full h-full absolute top-0 left-0 bg-black z-40"
                >
                    {activeApp.component}
                </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* Home Indicator Bar - Uses mix-blend-difference to be visible on both white and black backgrounds */}
      {/* Increased hit area height to h-14 and z-index to 100 to ensure clickability over app content */}
      <div className="absolute bottom-0 left-0 w-full h-14 z-[100] flex items-end justify-center pb-4 cursor-pointer group" onClick={handleHomeClick}>
          <div className="w-32 h-1 bg-white mix-blend-difference rounded-full shadow-sm group-active:scale-95 transition-transform"></div>
      </div>
    </div>
  );
};

export default IOSScreen;