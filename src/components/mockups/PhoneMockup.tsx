import React from 'react';

interface PhoneMockupProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: {
      container: 'w-[200px] h-[400px]',
      padding: 'p-4',
      text: 'text-sm',
      icon: 'w-6 h-6',
      bar: 'h-1.5',
      spacing: 'space-y-2',
    },
    md: {
      container: 'w-[280px] h-[500px]',
      padding: 'p-5',
      text: 'text-base',
      icon: 'w-7 h-7',
      bar: 'h-1.5',
      spacing: 'space-y-3',
    },
    lg: {
      container: 'w-[300px] h-[540px]',
      padding: 'p-6',
      text: 'text-lg',
      icon: 'w-8 h-8',
      bar: 'h-2',
      spacing: 'space-y-4',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`bg-gray-900 rounded-[40px] p-4 shadow-2xl ${currentSize.container} ${className}`}>
      <div className="bg-black rounded-[32px] overflow-hidden">
        <div className={`${currentSize.padding} ${currentSize.spacing}`}>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className={`text-white font-semibold ${currentSize.text}`}>Monthly expenses</h3>
              <div className={`${currentSize.icon} bg-gray-800 rounded-full flex items-center justify-center`}>
                <span className="text-white">📈</span>
              </div>
            </div>
            <p className={`text-gray-400 ${currentSize.text}`}>Improvement vs last month</p>
          </div>
          
          <div className={currentSize.spacing}>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`${currentSize.icon} bg-purple-500 rounded-full flex items-center justify-center`}>
                    🍽️
                  </div>
                  <span className={`text-white ${currentSize.text}`}>Food</span>
                </div>
                <span className={`text-white font-medium ${currentSize.text}`}>48%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full">
                <div className={`bg-purple-500 rounded-full ${currentSize.bar}`} style={{width: '48%'}}></div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`${currentSize.icon} bg-blue-500 rounded-full flex items-center justify-center`}>
                    ✈️
                  </div>
                  <span className={`text-white ${currentSize.text}`}>Travel</span>
                </div>
                <span className={`text-white font-medium ${currentSize.text}`}>35%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full">
                <div className={`bg-blue-500 rounded-full ${currentSize.bar}`} style={{width: '35%'}}></div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`${currentSize.icon} bg-green-500 rounded-full flex items-center justify-center`}>
                    💻
                  </div>
                  <span className={`text-white ${currentSize.text}`}>Tech</span>
                </div>
                <span className={`text-white font-medium ${currentSize.text}`}>23%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full">
                <div className={`bg-green-500 rounded-full ${currentSize.bar}`} style={{width: '23%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup; 