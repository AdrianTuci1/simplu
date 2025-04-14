import { Sparkles } from 'lucide-react';
import TabletMockup from '../mockups/TabletMockup';
import PhoneMockup from '../mockups/PhoneMockup';

const MobileExperienceSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-purple-500" />
          <h2 className="text-lg font-medium text-purple-500">Experienta mobila</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-6xl font-bold mb-6 leading-tight">
              Prezent <br /> oriunde. <br /> Oricand.
            </h1>
            <p className="text-xl text-gray-600 mb-8 mr-24">
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
            {/* Mobile view - Tablet and phone */}
            <div className="md:hidden">
              <div className="w-full max-w-[600px] mx-auto mb-8">
                <TabletMockup />
              </div>
              <div className="absolute -right-20 -top-20 transform rotate-[15deg]">
                <PhoneMockup size="sm" />
              </div>
            </div>

            {/* Desktop view - Three phones */}
            <div className="hidden md:flex items-center justify-center">
              <div className="transform -rotate-6 translate-x-10 translate-y-12">
                <PhoneMockup size="md" />
              </div>
              <div className="transform translate-y-8 z-10">
                <PhoneMockup size="lg" />
              </div>
              <div className="transform rotate-6 -translate-x-10 translate-y-12">
                <PhoneMockup size="md" />
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