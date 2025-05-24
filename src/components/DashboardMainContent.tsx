import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent: React.FC = () => {
  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-50 overflow-auto">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
        {/* First column */}
        <div className="space-y-4 sm:space-y-6 lg:col-span-1">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        
        {/* Second column */}
        <div className="lg:col-span-1">
          <CalendarView />
        </div>
        
        {/* Third column */}
        <div className="space-y-4 sm:space-y-6 lg:col-span-1">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;