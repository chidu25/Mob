import React, { useState } from 'react';
import { Phone, Delete, Star, Clock, Users, GripHorizontal } from 'lucide-react';

const PhoneApp: React.FC = () => {
  const [number, setNumber] = useState('');

  const handlePress = (digit: string) => {
    if (number.length < 15) {
      setNumber(prev => prev + digit);
    }
  };

  const handleDelete = () => {
    setNumber(prev => prev.slice(0, -1));
  };

  const KeypadButton = ({ digit, sub }: { digit: string, sub?: string }) => (
    <button 
      onClick={() => handlePress(digit)}
      className="w-20 h-20 rounded-full bg-zinc-200 active:bg-zinc-400 transition-colors flex flex-col items-center justify-center gap-0.5"
    >
      <span className="text-3xl font-normal text-black">{digit}</span>
      {sub && <span className="text-[10px] font-bold text-black tracking-widest">{sub}</span>}
    </button>
  );

  return (
    <div className="h-full bg-white text-black flex flex-col">
      {/* Number Display */}
      <div className="flex-1 flex flex-col items-center justify-end pb-8">
         <div className="text-4xl font-light h-12 flex items-center gap-2">
            {number}
            {number && (
                <button onClick={handleDelete} className="text-zinc-400 active:text-zinc-600">
                    <Delete className="w-6 h-6" />
                </button>
            )}
         </div>
         {number && <button className="text-blue-500 text-sm mt-2 font-medium">Add Number</button>}
      </div>

      {/* Keypad */}
      <div className="px-8 pb-8">
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mb-6 place-items-center">
            <KeypadButton digit="1" />
            <KeypadButton digit="2" sub="ABC" />
            <KeypadButton digit="3" sub="DEF" />
            <KeypadButton digit="4" sub="GHI" />
            <KeypadButton digit="5" sub="JKL" />
            <KeypadButton digit="6" sub="MNO" />
            <KeypadButton digit="7" sub="PQRS" />
            <KeypadButton digit="8" sub="TUV" />
            <KeypadButton digit="9" sub="WXYZ" />
            <KeypadButton digit="*" />
            <KeypadButton digit="0" sub="+" />
            <KeypadButton digit="#" />
        </div>
        
        <div className="flex justify-center mb-4">
            <button className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center active:bg-green-600 transition-colors shadow-lg">
                <Phone className="w-10 h-10 text-white fill-current" />
            </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="h-20 border-t bg-zinc-50 flex justify-around items-start pt-3 pb-6">
          <Tab icon={<Star className="w-6 h-6" />} label="Favorites" />
          <Tab icon={<Clock className="w-6 h-6" />} label="Recents" />
          <Tab icon={<Users className="w-6 h-6" />} label="Contacts" />
          <Tab icon={<GripHorizontal className="w-6 h-6" />} label="Keypad" active />
          <Tab icon={<div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-bold">oo</div>} label="Voicemail" />
      </div>
    </div>
  );
};

const Tab = ({ icon, label, active = false }: any) => (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-blue-600' : 'text-zinc-400'}`}>
        {icon}
        <span className="text-[10px] font-medium">{label}</span>
    </div>
);

export default PhoneApp;