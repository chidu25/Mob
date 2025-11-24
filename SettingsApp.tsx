import React from 'react';
import { Moon, Wifi, Bluetooth, Battery, Volume2, User, ChevronRight } from 'lucide-react';

const SettingsApp: React.FC = () => {
  return (
    <div className="h-full bg-zinc-100 text-black flex flex-col">
       <div className="pt-12 pb-2 px-4 bg-zinc-100 sticky top-0 z-10">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="mt-4 bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-zinc-300 flex items-center justify-center">
                <User className="text-zinc-500" />
            </div>
            <div>
                <div className="font-semibold">User</div>
                <div className="text-xs text-zinc-500">Apple ID, iCloud, Media & Purchases</div>
            </div>
            <ChevronRight className="ml-auto text-zinc-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8 space-y-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
             <SettingItem icon={<Wifi className="w-4 h-4 text-white" />} color="bg-blue-500" label="Wi-Fi" value="SuperFast_5G" />
             <SettingItem icon={<Bluetooth className="w-4 h-4 text-white" />} color="bg-blue-500" label="Bluetooth" value="On" />
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
             <SettingItem icon={<Volume2 className="w-4 h-4 text-white" />} color="bg-pink-500" label="Sounds & Haptics" />
             <SettingItem icon={<Moon className="w-4 h-4 text-white" />} color="bg-indigo-500" label="Focus" />
          </div>
          
           <div className="bg-white rounded-xl overflow-hidden shadow-sm">
             <SettingItem icon={<Battery className="w-4 h-4 text-white" />} color="bg-green-500" label="Battery" />
          </div>
      </div>
    </div>
  );
};

const SettingItem: React.FC<{ icon: React.ReactNode, color: string, label: string, value?: string }> = ({ icon, color, label, value }) => (
    <div className="flex items-center gap-3 p-3 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors cursor-pointer">
        <div className={`w-7 h-7 rounded-md ${color} flex items-center justify-center`}>
            {icon}
        </div>
        <span className="flex-1 font-medium text-sm">{label}</span>
        {value && <span className="text-zinc-500 text-sm">{value}</span>}
        <ChevronRight className="text-zinc-300 w-4 h-4" />
    </div>
);

export default SettingsApp;
