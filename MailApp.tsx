import React from 'react';
import { Mail, Star, Archive, ChevronLeft, Edit } from 'lucide-react';

const emails = [
  { id: 1, sender: 'Apple', subject: 'Your Receipt', preview: 'Thank you for your purchase of...', time: '9:41 AM', read: false },
  { id: 2, sender: 'Gemini', subject: 'Welcome to AI', preview: 'Start creating with the power of...', time: 'Yesterday', read: true },
  { id: 3, sender: 'Netflix', subject: 'Coming Soon', preview: 'New season of your favorite show...', time: 'Friday', read: true },
  { id: 4, sender: 'Mom', subject: 'Dinner?', preview: 'Are you coming over this weekend...', time: 'Thursday', read: false },
  { id: 5, sender: 'LinkedIn', subject: 'New Job Alert', preview: 'Senior Frontend Engineer at Google...', time: 'Wednesday', read: true },
  { id: 6, sender: 'Twitter', subject: 'New Login', preview: 'New login from iPhone 16 Pro...', time: 'Tuesday', read: true },
];

const MailApp: React.FC = () => {
  return (
    <div className="h-full bg-white flex flex-col text-black">
      {/* Header */}
      <div className="pt-12 px-4 pb-2 bg-zinc-50 border-b flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center text-blue-500 gap-1">
          <ChevronLeft className="w-6 h-6" />
          <span className="text-base">Mailboxes</span>
        </div>
        <span className="font-semibold text-base">Inbox</span>
        <span className="text-blue-500 text-base">Edit</span>
      </div>

      <div className="px-4 py-2">
         <h1 className="text-3xl font-bold mb-2">Inbox</h1>
         <div className="relative">
            <input type="text" placeholder="Search" className="w-full bg-zinc-100 rounded-xl px-4 py-2 pl-8 text-sm outline-none" />
         </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <div key={email.id} className="px-4 py-3 border-b border-zinc-100 active:bg-zinc-50">
             <div className="flex justify-between items-start mb-1">
                 <span className={`font-semibold text-sm ${!email.read ? 'text-black' : 'text-zinc-600'}`}>
                    {email.read ? '' : <span className="inline-block w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>}
                    {email.sender}
                 </span>
                 <span className="text-xs text-zinc-400 font-medium">{email.time}</span>
             </div>
             <div className="text-sm font-medium mb-0.5">{email.subject}</div>
             <div className="text-xs text-zinc-500 line-clamp-2">{email.preview}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="h-12 border-t bg-zinc-50 flex items-center justify-between px-4 text-blue-500">
         <div className="w-6"></div> {/* Spacer */}
         <span className="text-xs text-black font-medium">Updated Just Now</span>
         <Edit className="w-5 h-5" />
      </div>
    </div>
  );
};

export default MailApp;