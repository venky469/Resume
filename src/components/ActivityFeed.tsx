import React from 'react';
import { activityData, weeklyAppointmentsCount } from '../data/appointmentData';

const ActivityFeed: React.FC = () => {
  // Find the maximum count for scaling
  const maxCount = Math.max(...activityData.map(day => day.count), 1);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Activity</h2>
        <span className="text-sm text-blue-600">{weeklyAppointmentsCount} appointments this week</span>
      </div>
      
      <div className="flex items-end justify-between h-32 mt-6">
        {activityData.map((day) => {
          const height = day.count > 0 ? (day.count / maxCount) * 100 : 5;
          const bgColor = day.count > 0 ? 'bg-blue-500' : 'bg-gray-200';
          
          return (
            <div key={day.day} className="flex flex-col items-center">
              <div 
                className={`w-8 ${bgColor} rounded-t-md transition-all duration-300`} 
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-xs text-gray-500 mt-2">{day.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;