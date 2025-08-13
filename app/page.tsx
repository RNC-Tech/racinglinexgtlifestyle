"use client";

import { useState, useRef } from 'react';
import Hyperspeed from './components/hyperspeed/hyperspeed'
import FloatingNavbar from './components/FloatingNavbar'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHyperspeedActive, setIsHyperspeedActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleContainerMouseDown = () => {
    // Desktop: Activate hyperspeed only
    setIsHyperspeedActive(true);
  };

  const handleContainerMouseUp = () => {
    // Desktop: Deactivate hyperspeed only
    setIsHyperspeedActive(false);
  };

  const handleButtonToggle = () => {
    // Start music if not playing, then toggle hyperspeed effect
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    
    // Toggle hyperspeed effect
    setIsHyperspeedActive(!isHyperspeedActive);
  };

  return (
    <main>
      <FloatingNavbar />
      <Hyperspeed />
      <audio 
        ref={audioRef}
        src={process.env.NODE_ENV === 'production' ? '/racinglinexgtlifestyle/audio/bgmusic.mp3' : '/audio/bgmusic.mp3'} 
        preload="auto"
        onEnded={() => {
          setIsPlaying(false);
          setIsHyperspeedActive(false);
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="flex flex-col items-center justify-center gap-4">
        <img src="https://i.imgur.com/LIlLcW7.png" className="w-2/3 h-auto object-contain"/>
          <p className="text-white text-1xl font-semibold">In collaboration with Racing Line</p>
        </div>
      </div>
      
      {/* Bottom center button for both desktop and mobile */}
      <button
        onClick={handleButtonToggle}
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 rounded-full p-4 shadow-lg border transition-all duration-200 ${
          isHyperspeedActive 
            ? 'bg-red-500/80 border-red-400 hover:bg-red-500' 
            : 'bg-white/20 border-white/30 hover:bg-white/30'
        }`}
        aria-label={isHyperspeedActive ? "Stop Hyperspeed" : "Start Hyperspeed"}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          isHyperspeedActive ? 'bg-white' : 'bg-white/80'
        }`}>
          {isHyperspeedActive ? (
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          )}
        </div>
      </button>
    </main>
  );
}
