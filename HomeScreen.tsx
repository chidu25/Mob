import React, { useState, useEffect } from 'react';
import { AppDefinition } from '../../types';
import { Camera, MessageSquare, Image, Settings, Clock, Cloud, Music, Mail, Map, Calendar, Calculator, Compass, Phone, Compass as CompassIcon } from 'lucide-react';
import ChatApp from './Apps/ChatApp';
import CameraApp from './Apps/CameraApp';
import PhotosApp from './Apps/PhotosApp';
import SettingsApp from './Apps/SettingsApp';
import MailApp from './Apps/MailApp';
import WeatherApp from './Apps/WeatherApp';
import MapsApp from './Apps/MapsApp';
import CalendarApp from './Apps/CalendarApp';
import MusicApp from './Apps/MusicApp';
import CalculatorApp from './Apps/CalculatorApp';
import CompassApp from './Apps/CompassApp';
import ClockApp from './Apps/ClockApp';
import PhoneApp from './Apps/PhoneApp';
import SafariApp from './Apps/SafariApp';

interface HomeScreenProps {
  onOpenApp: (app: AppDefinition) => void;
}

const phoneApp: AppDefinition = { id: 'phone', name: 'Phone', icon: <Phone className="w-8 h-8 text-white" />, color: 'bg-green-500', component: <PhoneApp /> };
const safariApp: AppDefinition = { id: 'safari', name: 'Safari', icon: <CompassIcon className="w-8 h-8 text-white" />, color: 'bg-blue-500', component: <SafariApp /> };

const apps: AppDefinition[] = [
  { id: 'chat', name: 'Gemini', icon: <MessageSquare className="w-8 h-8 text-white" />, color: 'bg-gradient-to-br from-blue-500 to-purple-600', component: <ChatApp /> },
  { id: 'photos', name: 'Photos', icon: <Image className="w-8 h-8 text-white" />, color: 'bg-white', component: <PhotosApp /> },
  { id: 'camera', name: 'Camera', icon: <Camera className="w-8 h-8 text-zinc-800" />, color: 'bg-zinc-300', component: <CameraApp /> },
  { id: 'settings', name: 'Settings', icon: <Settings className="w-8 h-8 text-white" />, color: 'bg-zinc-500', component: <SettingsApp /> },
  { id: 'mail', name: 'Mail', icon: <Mail className="w-8 h-8 text-white" />, color: 'bg-blue-500', component: <MailApp /> },
  { id: 'clock', name: 'Clock', icon: <Clock className="w-8 h-8 text-white" />, color: 'bg-black border border-zinc-700', component: <ClockApp /> },
  { id: 'weather', name: 'Weather', icon: <Cloud className="w-8 h-8 text-white" />, color: 'bg-blue-400', component: <WeatherApp /> },
  { id: 'maps', name: 'Maps', icon: <Map className="w-8 h-8 text-white" />, color: 'bg-green-500', component: <MapsApp /> },
  { id: 'calendar', name: 'Calendar', icon: <Calendar className="w-8 h-8 text-red-500" />, color: 'bg-white', component: <CalendarApp /> },
  { id: 'music', name: 'Music', icon: <Music className="w-8 h-8 text-white" />, color: 'bg-red-500', component: <MusicApp /> },
  { id: 'calculator', name: 'Calc', icon: <Calculator className="w-8 h-8 text-white" />, color: 'bg-zinc-800', component: <CalculatorApp /> },
  { id: 'compass', name: 'Compass', icon: <Compass className="w-8 h-8 text-white" />, color: 'bg-black', component: <CompassApp /> },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenApp }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

  return (
    <div className="h-full w-full flex flex-col pt-12 pb-6 px-4">
      {/* Grid */}
      <div className="grid grid-cols-4 gap-y-6 gap-x-4">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onOpenApp(app)}
            className="flex flex-col items-center gap-1 group active:scale-90 transition-transform duration-200"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md overflow-hidden ${app.color}`}>
                {app.id === 'photos' ? (
                     <div className="relative w-full h-full bg-white flex items-center justify-center">
                        {/* Custom Photos Icon */}
                        <div className="absolute w-full h-full flex flex-wrap">
                            <div className="w-1/2 h-1/3 bg-orange-200/50"></div>
                            <div className="w-1/2 h-1/3 bg-pink-200/50"></div>
                            <div className="w-1/2 h-1/3 bg-purple-200/50"></div>
                            <div className="w-1/2 h-1/3 bg-blue-200/50"></div>
                            <div className="w-1/2 h-1/3 bg-green-200/50"></div>
                            <div className="w-1/2 h-1/3 bg-yellow-200/50"></div>
                        </div>
                        <Image className="w-8 h-8 text-black z-10 relative" />
                     </div>
                ) : app.id === 'calendar' ? (
                    <div className="w-full h-full bg-white flex flex-col items-center justify-center pt-1">
                        <span className="text-red-500 text-[9px] font-bold uppercase">{currentTime.toLocaleString('default', { weekday: 'short' })}</span>
                        <span className="text-zinc-800 text-2xl font-light -mt-1">{currentTime.getDate()}</span>
                    </div>
                ) : app.id === 'clock' ? (
                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                        <div className="absolute w-12 h-12 rounded-full border border-zinc-600"></div>
                        <div className="text-white text-[10px] font-mono">{currentTime.getHours()}:{currentTime.getMinutes().toString().padStart(2, '0')}</div>
                        {/* Animated Seconds Hand */}
                         <div 
                            className="absolute top-1/2 left-1/2 w-0.5 h-5 bg-orange-500 origin-bottom rounded-full"
                            style={{ transform: `translate(-50%, -100%) rotate(${currentTime.getSeconds() * 6}deg)` }}
                         ></div>
                    </div>
                ) : (
                    app.icon
                )}
            </div>
            <span className="text-[11px] font-medium text-white drop-shadow-md tracking-tight">{app.name}</span>
          </button>
        ))}
      </div>

      {/* Dock */}
      <div className="mt-auto mb-2">
         <div className="bg-white/20 backdrop-blur-xl rounded-[28px] p-4 flex justify-between items-center gap-4 mx-2">
            <button className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg active:scale-90 transition-transform" onClick={() => onOpenApp(phoneApp)}>
                <div className="w-6 h-6 bg-white rounded-full mask-phone" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-500 w-full h-full p-1"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.59 3.98a1 1 0 00-1-.98h-2.9A1 1 0 003.7 4.02c.23 4.96 2.24 9.38 5.61 12.74 3.37 3.37 7.79 5.38 12.75 5.61a1 1 0 001.02-1.01v-2.9a1 1 0 00-.97-.98z" fill="white"/></svg>
                </div>
            </button>
            <button className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg active:scale-90 transition-transform" onClick={() => onOpenApp(safariApp)}>
               <CompassIcon className="w-8 h-8 text-white" />
            </button>
            <button className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center shadow-lg active:scale-90 transition-transform" onClick={() => onOpenApp(apps.find(a => a.id === 'settings')!)}>
                <Settings className="w-7 h-7 text-zinc-400" />
            </button>
            <button className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg active:scale-90 transition-transform" onClick={() => onOpenApp(apps.find(a => a.id === 'chat')!)}>
                <MessageSquare className="w-7 h-7 text-white" />
            </button>
         </div>
      </div>
    </div>
  );
};

export default HomeScreen;