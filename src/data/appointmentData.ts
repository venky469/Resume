import { format, addDays } from 'date-fns';

export interface CalendarAppointment {
  id: string;
  date: Date;
  time: string;
  title: string;
  doctor: string;
}

export interface UpcomingAppointment {
  id: string;
  title: string;
  day: string;
  time: string;
  icon: string;
  color: string;
}

const today = new Date();

export const calendarAppointments: CalendarAppointment[] = [
  {
    id: 'apt1',
    date: today,
    time: '09:00',
    title: 'Annual Checkup',
    doctor: 'Dr. Johnson'
  },
  {
    id: 'apt2',
    date: addDays(today, 2),
    time: '11:00',
    title: 'Dentist',
    doctor: 'Dr. Smith'
  },
  {
    id: 'apt3',
    date: addDays(today, 3),
    time: '13:00',
    title: 'Physiotherapy',
    doctor: 'Dr. Williams'
  },
  {
    id: 'apt4',
    date: addDays(today, 5),
    time: '15:00',
    title: 'Dermatology',
    doctor: 'Dr. Davis'
  }
];

export const upcomingAppointments: UpcomingAppointment[] = [
  {
    id: 'upcoming1',
    title: 'Health checkup complete',
    day: 'Thursday',
    time: '09:00 AM',
    icon: 'check-circle',
    color: 'green'
  },
  {
    id: 'upcoming2',
    title: 'Ophthalmologist',
    day: 'Thursday',
    time: '11:30 AM',
    icon: 'eye',
    color: 'blue'
  },
  {
    id: 'upcoming3',
    title: 'Cardiologist',
    day: 'Saturday',
    time: '02:00 PM',
    icon: 'heart',
    color: 'red'
  },
  {
    id: 'upcoming4',
    title: 'Neurologist',
    day: 'Saturday',
    time: '04:30 PM',
    icon: 'brain',
    color: 'purple'
  }
];

export const currentMonth = format(today, 'MMMM yyyy');

export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

export const activityData = [
  { day: 'Mon', count: 1 },
  { day: 'Tue', count: 0 },
  { day: 'Wed', count: 0 },
  { day: 'Thu', count: 2 },
  { day: 'Fri', count: 0 },
  { day: 'Sat', count: 2 },
  { day: 'Sun', count: 0 }
];

export const weeklyAppointmentsCount = activityData.reduce(
  (sum, day) => sum + day.count,
  0
);