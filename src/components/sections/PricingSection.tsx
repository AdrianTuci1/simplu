import React from 'react';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prețuri simple pentru utilizatori avansați
          </h2>
          <p className="text-gray-600 text-xl">
            Prețurile noastre sunt concepute pentru utilizatorii avansați care au nevoie de mai multe funcționalități și flexibilitate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Hobby Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl text-gray-900 mb-4">Solo</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-2xl text-gray-900">LEI</span>
              <span className="text-7xl font-bold text-gray-900">99</span>
              <span className="text-gray-600 ml-2">/lună</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 mb-8">
              Alege Hobby
            </button>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Acces la rapoarte analitice de bază
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Până la 10.000 puncte de date lunar
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Suport prin email
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Acces la forumul comunității
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Anulare oricând
              </li>
            </ul>
          </div>

          {/* Starter Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-3 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              Recomandat
            </div>
            <h3 className="text-xl text-gray-900 mb-4">Starter</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-2xl text-gray-900">LEI</span>
              <span className="text-7xl font-bold text-gray-900">299</span>
              <span className="text-gray-600 ml-2">/lună</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 mb-8">
              Alege Starter
            </button>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Panou de control analitic avansat
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Rapoarte și grafice personalizabile
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Urmărire date în timp real
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Integrare cu instrumente terțe
              </li>
              <li className="flex items-center text-gray-600 mt-8">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Tot ce include planul Hobby
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl text-gray-900 mb-4">Pro</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-2xl text-gray-900">LEI</span>
              <span className="text-7xl font-bold text-gray-900">1490</span>
              <span className="text-gray-600 ml-2">/lună</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 mb-8">
              Alege Pro
            </button>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Stocare nelimitată de date
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Panouri de control personalizabile
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Segmentare avansată a datelor
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Procesare date în timp real
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Recomandări și analize bazate pe AI
              </li>
              <li className="flex items-center text-gray-600 mt-8">
                <Check className="w-5 h-5 mr-3 text-blue-600" />
                Tot ce include planul Hobby
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 