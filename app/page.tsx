"use client";

import { useState, useRef } from 'react';
import Hyperspeed from './components/hyperspeed/hyperspeed'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHyperspeedActive, setIsHyperspeedActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleContainerClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setIsHyperspeedActive(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setIsHyperspeedActive(true);
      }
    }
  };

  const handleButtonToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setIsHyperspeedActive(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setIsHyperspeedActive(true);
      }
    }
  };

  return (
    <main className="relative w-full h-screen" onClick={handleContainerClick}>
      <Hyperspeed/>
      <audio 
        ref={audioRef}
        src="/audio/bgmusic.mp3" 
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
      
      {/* Mobile round button */}
      <button
        onClick={handleButtonToggle}
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 md:hidden rounded-full p-4 shadow-lg border transition-all duration-200 ${
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
