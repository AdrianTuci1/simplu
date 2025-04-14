import React from 'react';
import { Lock } from 'lucide-react';

const EncryptedLock: React.FC = () => {
  const generateRandomHex = () => {
    return Math.floor(Math.random() * 16).toString(16).toUpperCase();
  };

  const generateEncryptedText = () => {
    return Array(8).fill(0).map(() => 
      Array(4).fill(0).map(() => generateRandomHex()).join('')
    ).join(' ');
  };

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Background encrypted text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {Array(5).fill(0).map((_, i) => (
            <div
              key={i}
              className="text-[#3d3d3d] text-[10px] font-mono opacity-30"
              style={{
                transform: `translateY(${(i - 2) * 0.8}rem)`,
                lineHeight: '1',
              }}
            >
              {generateEncryptedText()}
            </div>
          ))}
        </div>
      </div>

      {/* Lock icon with overlay */}
      <div className="relative z-10">
        <div className="w-24 h-24 bg-[#2d2d2d] rounded-full flex items-center justify-center shadow-lg border border-[#3d3d3d]">
          <Lock className="w-12 h-12 text-[#2563eb]" />
        </div>
        
        {/* Animated dots */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-1">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse"
              style={{ animationDelay: `${dot * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating encrypted text */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(4).fill(0).map((_, i) => (
          <div
            key={i}
            className="absolute text-[#3d3d3d] text-[10px] font-mono opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${3 + Math.random() * 2}s infinite ease-in-out`,
              lineHeight: '1',
            }}
          >
            {generateEncryptedText()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EncryptedLock; 