import React from 'react';

interface TabletMockupProps {
  className?: string;
}

const TabletMockup: React.FC<TabletMockupProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gray-900 rounded-[40px] p-4 shadow-2xl ${className}`}>
      <div className="bg-black rounded-[32px] overflow-hidden aspect-[4/3]">
        <div className="p-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-white text-2xl font-semibold">Company Overview</h3>
              <p className="text-gray-400">Q4 2024 Performance</p>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white">📊</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white">⚙️</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-2xl p-4">
              <div className="text-purple-400 mb-2">Revenue</div>
              <div className="text-white text-2xl font-bold">$842K</div>
              <div className="text-green-400 text-sm">+12.5%</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4">
              <div className="text-blue-400 mb-2">Users</div>
              <div className="text-white text-2xl font-bold">15.3K</div>
              <div className="text-green-400 text-sm">+24.3%</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4">
              <div className="text-green-400 mb-2">Growth</div>
              <div className="text-white text-2xl font-bold">32%</div>
              <div className="text-green-400 text-sm">+8.1%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletMockup; 