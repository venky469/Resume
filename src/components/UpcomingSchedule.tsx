import React from 'react';
import { upcomingAppointments } from '../data/appointmentData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule: React.FC = () => {
  // Group appointments by day
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {} as Record<string, typeof upcomingAppointments>);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-medium mb-4">The Upcoming Schedule</h2>
      
      <div className="space-y-4">
        {Object.entries(appointmentsByDay).map(([day, appointments]) => (
          <div key={day}>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              On {day}
            </h3>
            <div className="space-y-2">
              {appointments.map(appointment => (
                <SimpleAppointmentCard 
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;