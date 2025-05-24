export interface NavLink {
  id: string;
  title: string;
  icon: string;
}

export const navLinks: NavLink[] = [
  { id: 'dashboard', title: 'Dashboard', icon: 'layout-dashboard' },
  { id: 'history', title: 'History', icon: 'history' },
  { id: 'calendar', title: 'Calendar', icon: 'calendar' },
  { id: 'appointments', title: 'Appointments', icon: 'clipboard-list' },
  { id: 'statistics', title: 'Statistics', icon: 'bar-chart-2' },
  { id: 'tests', title: 'Tests', icon: 'flask-conical' },
  { id: 'chat', title: 'Chat', icon: 'message-square' },
  { id: 'support', title: 'Support', icon: 'life-buoy' },
  { id: 'settings', title: 'Settings', icon: 'settings' }
];