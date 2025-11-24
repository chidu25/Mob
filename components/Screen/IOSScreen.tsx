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
    <div
      className="w-full h-full bg-cover bg-center rounded-[40px] overflow-hidden relative select-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at 10% 15%, rgba(98,180,255,0.35), transparent 35%), radial-gradient(circle at 85% 10%, rgba(160,255,215,0.35), transparent 40%), radial-gradient(circle at 30% 80%, rgba(255,255,255,0.1), transparent 45%), linear-gradient(135deg, #0c1322 0%, #0a0e19 45%, #0f1728 100%)',
        backgroundColor: '#03050b',
      }}
    >

      {/* Liquid glass flares */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl opacity-40"
          style={{ top: '-120px', left: '-60px' }}
        ></div>
        <div
          className="absolute w-[360px] h-[360px] rounded-full bg-emerald-400/20 blur-3xl opacity-30"
          style={{ bottom: '-140px', right: '-80px' }}
        ></div>
        <div className="absolute inset-10 rounded-[36px] bg-white/5 backdrop-blur-3xl border border-white/10"></div>
      </div>
      
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