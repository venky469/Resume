import React from 'react';
import { healthStatusDetails } from '../data/healthData';
import { format, parseISO } from 'date-fns';
import { Heart, Bone, Circle } from 'lucide-react';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; // Updated import

const HealthStatusCards: React.FC = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {healthStatusDetails.map((item) => {
        // Determine color based on status
        const bgColor =
          item.status === 'healthy' ? 'bg-green-50 border-green-200' :
          item.status === 'warning' ? 'bg-yellow-50 border-yellow-200' :
          'bg-red-50 border-red-200';

        const textColor =
          item.status === 'healthy' ? 'text-green-700' :
          item.status === 'warning' ? 'text-yellow-700' :
          'text-red-700';

        // Get the correct icon component
        const IconComponent =
          item.id === 'heart' ? Heart :
          item.id === 'lungs' ? MedicalServicesIcon :
          item.id === 'teeth' ? HealthAndSafetyIcon : // Updated icon
          item.id === 'bone' ? Bone :
          Circle;

        return (
          <div
            key={item.id}
            className={`${bgColor} border rounded-lg p-3 transition-all duration-200 hover:scale-102 hover:shadow-md cursor-pointer`}
          >
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${
                  item.status === 'healthy' ? 'bg-green-100' :
                  item.status === 'warning' ? 'bg-yellow-100' :
                  'bg-red-100'
                } mr-3`}>
                  <IconComponent style={{ color: textColor.includes('green') ? '#047857' : textColor.includes('yellow') ? '#b45309' : '#b91c1c' }} fontSize="small" />
                </div>
                <h3 className="font-medium text-sm sm:text-base">{item.name}</h3>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs sm:text-sm text-gray-500">
                  Last checked: {format(parseISO(item.lastChecked), 'MMM d, yyyy')}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  Next checkup: {format(parseISO(item.nextCheckup), 'MMM d, yyyy')}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
