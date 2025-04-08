import React from 'react';
import { CheckCircle, MessageCircle, Layout } from 'lucide-react';

const TemplatesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="w-12 h-12 text-purple-500" />,
      title: "Verificat de experți",
      description: "Template-uri create de experți pentru a vă ajuta să transmiteți o poveste puternică"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-purple-500" />,
      title: "Ghidare contextuală",
      description: "Cele mai bune practici sunt integrate în template - fără a părăsi aplicația"
    },
    {
      icon: <Layout className="w-12 h-12 text-purple-500" />,
      title: "Template-uri pentru orice",
      description: "Fie că sunt prezentări sau pitch-uri, începeți mai aproape de linia de finish cu un template"
    }
  ];

  const categories = [
    "Pitch decks",
    "All hands",
    "Investor update",
    "Product roadmap",
    "Research findings",
    "Marketing strategy",
    "North star goals"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="text-purple-500 text-lg">✦</span>
          <h2 className="text-lg font-medium text-purple-500">Template-uri</h2>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 max-w-3xl mx-auto">
          Începeți mai aproape de linia de finish cu template-uri create de experți din industrie
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all">
              <div className="bg-black rounded-full p-4 inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-100 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-all cursor-pointer"
            >
              <span className="text-purple-500">✦</span>
              <span className="font-medium">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection; 