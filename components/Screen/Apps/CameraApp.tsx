import React, { useEffect, useRef, useState } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

const CameraApp: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError("Camera access denied or unavailable.");
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="h-full bg-black flex flex-col relative overflow-hidden">
      {error ? (
        <div className="flex-1 flex items-center justify-center text-center p-6 text-zinc-500">
          {error}
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="h-full w-full object-cover"
        />
      )}
      
      {/* UI Overlay */}
      <div className="absolute bottom-0 w-full h-24 bg-black/40 backdrop-blur-sm flex items-center justify-between px-8 pb-4">
        <div className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center">
            {/* Gallery Preview Placeholder */}
            <div className="w-8 h-8 rounded-full bg-white/20"></div>
        </div>
        <button className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full active:scale-90 transition-transform"></div>
        </button>
        <button className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default CameraApp;
