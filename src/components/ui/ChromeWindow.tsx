import React from 'react';

interface ChromeWindowProps {
  domain: string;
}

const ChromeWindow: React.FC<ChromeWindowProps> = ({ domain }) => {
  return (
    <div className="w-full bg-[#1e1e1e] rounded-t-lg overflow-hidden shadow-lg">
      {/* Window Controls */}
      <div className="flex items-center px-3 py-2 bg-[#2d2d2d]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#3d3d3d] rounded-full px-4 py-1 text-xs text-gray-300 flex items-center justify-between">
            <span className="truncate">{domain}</span>
            <span className="ml-2 text-gray-500">⌘</span>
          </div>
        </div>
      </div>
      {/* Content Area */}
      <div className="h-24 bg-[#1e1e1e] flex items-center justify-center border-t border-[#3d3d3d]">
        <div className="text-gray-500 text-sm">Loading {domain}...</div>
      </div>
    </div>
  );
};

export default ChromeWindow; 