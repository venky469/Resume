import React from 'react';
import { UpcomingAppointment } from '../data/appointmentData';
import * as Icons from 'lucide-react';

// Define a type for icons
type IconName = keyof typeof Icons;

interface SimpleAppointmentCardProps {
  appointment: UpcomingAppointment;
}

const SimpleAppointmentCard: React.FC<SimpleAppointmentCardProps> = ({ appointment }) => {
  // Determine color based on the appointment's color property
  const bgColor = 
    appointment.color === 'green' ? 'bg-green-50 border-green-100' :
    appointment.color === 'blue' ? 'bg-blue-50 border-blue-100' :
    appointment.color === 'red' ? 'bg-red-50 border-red-100' :
    appointment.color === 'purple' ? 'bg-purple-50 border-purple-100' :
    'bg-gray-50 border-gray-100';
  
  const iconBgColor = 
    appointment.color === 'green' ? 'bg-green-100' :
    appointment.color === 'blue' ? 'bg-blue-100' :
    appointment.color === 'red' ? 'bg-red-100' :
    appointment.color === 'purple' ? 'bg-purple-100' :
    'bg-gray-100';
  
  const iconColor = 
    appointment.color === 'green' ? 'text-green-500' :
    appointment.color === 'blue' ? 'text-blue-500' :
    appointment.color === 'red' ? 'text-red-500' :
    appointment.color === 'purple' ? 'text-purple-500' :
    'text-gray-500';
  
  // Type assertion for icon name
  const IconComponent = Icons[appointment.icon as IconName] || Icons.Calendar;

  return (
    <div className={`${bgColor} border rounded-lg p-3 flex items-center justify-between transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-center space-x-3">
        <div className={`${iconBgColor} p-2 rounded-full`}>
          <IconComponent size={16} className={iconColor} />
        </div>
        <div>
          <h3 className="font-medium text-sm">{appointment.title}</h3>
          <p className="text-xs text-gray-500">{appointment.time}</p>
        </div>
      </div>
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    </div>
  );
};

export default SimpleAppointmentCard;