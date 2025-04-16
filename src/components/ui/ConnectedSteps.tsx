import React from 'react';

interface StepBoxProps {
  title: string;
  description: string;
  stepNumber: number;
  isLast?: boolean;
  isFirstConnection?: boolean;
}

const StepBox: React.FC<StepBoxProps> = ({ title, description, stepNumber, isLast, isFirstConnection }) => {
  return (
    <div className="relative">
      <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#3d3d3d] shadow-lg w-48">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-sm font-medium">
            {stepNumber}
          </div>
          <h4 className="text-white font-medium text-sm">{title}</h4>
        </div>
        <p className="text-gray-400 text-xs">{description}</p>
      </div>
      {!isLast && (
        <div className="absolute top-1/2 right-0 w-12 h-16" style={{ transform: 'translateX(100%)' }}>
          <div className="absolute top-1/2 left-0 w-[30%] h-[2px] bg-[#3d3d3d]"></div>
          
          {isFirstConnection ? (
            <>
              <div className="absolute top-0 left-[30%] w-[2px] h-[50%] bg-[#3d3d3d]"></div>
              <div className="absolute top-0 left-[30%] w-[70%] h-[2px] bg-[#3d3d3d]"></div>
              <div className="absolute right-0 top-0 w-2 h-2 border-t-2 border-r-2 border-[#3d3d3d] transform rotate-45 translate-x-[2px] translate-y-[-1px]"></div>
            </>
          ) : (
            <>
              <div className="absolute top-1/2 left-[30%] w-[2px] h-[50%] bg-[#3d3d3d]"></div>
              <div className="absolute bottom-0 left-[30%] w-[70%] h-[2px] bg-[#3d3d3d]"></div>
              <div className="absolute right-0 bottom-0 w-2 h-2 border-t-2 border-r-2 border-[#3d3d3d] transform rotate-45 translate-x-[2px] translate-y-[1px]"></div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const ConnectedSteps: React.FC = () => {
  const steps = [
    {
      title: "Prezinta-ne afacerea",
      description: "Spune-ne despre proiectul tău și nevoile tale",
      stepNumber: 1
    },
    {
      title: "Alege domeniul",
      description: "Selectează sau conectează domeniul dorit",
      stepNumber: 2
    },
    {
      title: "Selectează un plan",
      description: "Alege planul care se potrivește cel mai bine",
      stepNumber: 3
    }
  ];

  return (
    <div className="flex items-center justify-center gap-12">
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`relative ${index === 1 ? '-translate-y-6' : ''}`}
        >
          <StepBox
            title={step.title}
            description={step.description}
            stepNumber={step.stepNumber}
            isLast={index === steps.length - 1}
            isFirstConnection={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ConnectedSteps; 