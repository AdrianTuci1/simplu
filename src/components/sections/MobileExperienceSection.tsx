import React from 'react';
import { Sparkles } from 'lucide-react';

const MobileExperienceSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-purple-500" />
          <h2 className="text-lg font-medium text-purple-500">Mobile experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Present anywhere. Anytime.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transformă-ți prezentările într-un format optimizat pentru orice dispozitiv. 
              Navighează rapid prin sumar și aprofundează detaliile când este necesar.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-purple-700">Responsive Design</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-700">Cross-platform</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700">Real-time sync</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Tablet mockup */}
            <div className="absolute -right-12 -top-20 w-[400px] transform rotate-[-12deg] z-10 hidden md:block">
              <div className="bg-gray-900 rounded-[40px] p-4 shadow-2xl">
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
            </div>

            {/* Phone mockup */}
            <div className="relative mx-auto w-full max-w-[320px] translate-y-12">
              <div className="bg-gray-900 rounded-[40px] p-4 shadow-2xl">
                <div className="bg-black rounded-[32px] overflow-hidden">
                  <div className="p-6 space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-white text-2xl font-semibold">Monthly expenses</h3>
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                          <span className="text-white">📈</span>
                        </div>
                      </div>
                      <p className="text-gray-400">Improvement vs last month</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                              🍽️
                            </div>
                            <span className="text-white">Food</span>
                          </div>
                          <span className="text-white font-medium">48%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '48%'}}></div>
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              ✈️
                            </div>
                            <span className="text-white">Travel</span>
                          </div>
                          <span className="text-white font-medium">35%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              💻
                            </div>
                            <span className="text-white">Tech</span>
                          </div>
                          <span className="text-white font-medium">23%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '23%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -right-16 top-1/4 transform rotate-12">
                <div className="bg-gray-800 rounded-xl p-4 shadow-lg w-48">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      📊
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">New Report</div>
                      <div className="text-gray-400 text-xs">Just now</div>
                    </div>
                  </div>
                  <div className="text-white text-sm">Monthly report is ready to view</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default MobileExperienceSection; 