import React from 'react';
import { currentMonth, weekDays, calendarDays, calendarAppointments } from '../data/appointmentData';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

const CalendarView: React.FC = () => {
  const today = new Date();
  const currentDay = today.getDate();

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Calendar</h2>
        <div className="flex items-center text-blue-600 text-sm">
          <Calendar size={16} className="mr-1.5" />
          <span>{currentMonth}</span>
        </div>
      </div>
      
      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div 
            key={day} 
            className="text-center text-xs font-medium text-gray-500 py-1"
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day) => {
          const isToday = day === currentDay;
          const hasAppointment = calendarAppointments.some(
            apt => new Date(apt.date).getDate() === day
          );
          
          const appointments = calendarAppointments.filter(
            apt => new Date(apt.date).getDate() === day
          );
          
          return (
            <div 
              key={day} 
              className={`
                relative text-center py-2 rounded-lg text-sm 
                ${isToday ? 'bg-blue-500 text-white' : hasAppointment ? 'bg-blue-50' : ''}
              `}
            >
              <span>{day}</span>
              
              {appointments.length > 0 && (
                <div className="mt-1 px-1">
                  {appointments.map(apt => (
                    <div 
                      key={apt.id} 
                      className="text-xs bg-blue-100 text-blue-700 rounded px-1 py-0.5 my-0.5"
                    >
                      {apt.time}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Appointment previews */}
      <div className="mt-4 space-y-2">
        <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <Clock size={16} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Dentist</h3>
              <p className="text-xs text-gray-500">Dr. Smith</p>
            </div>
          </div>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">11:00</span>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <Clock size={16} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Physiotherapy Appointment</h3>
              <p className="text-xs text-gray-500">Dr. Williams</p>
            </div>
          </div>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">13:00</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;