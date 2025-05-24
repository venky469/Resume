import React from 'react';
const AnatomySection: React.FC = () => {
  return (
    <div className="relative h-auto min-h-[16rem] lg:h-64 bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-medium mb-4">Body Status</h2>
      
      <div className="relative h-48 lg:h-52 flex justify-center">
        <div className="relative w-24 sm:w-28 lg:w-32 h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/health2.png" 
              alt="Human anatomy"
              className="h-full object-contain"
            />
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;