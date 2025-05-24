export interface HealthIndicator {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  position: {
    top: string;
    left: string;
  };
}

export interface HealthStatus {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  lastChecked: string;
  nextCheckup: string;
}

export const healthIndicators: HealthIndicator[] = [
  { 
    id: 'heart', 
    name: 'Healthy Heart', 
    status: 'healthy',
    position: { top: '30%', left: '50%' }
  },
  { 
    id: 'lungs', 
    name: 'Lungs', 
    status: 'critical',
    position: { top: '25%', left: '40%' }
  },
  { 
    id: 'teeth', 
    name: 'Teeth', 
    status: 'warning',
    position: { top: '18%', left: '50%' }
  },
  { 
    id: 'bone', 
    name: 'Bone', 
    status: 'healthy',
    position: { top: '55%', left: '35%' }
  }
];

export const healthStatusDetails: HealthStatus[] = [
  { 
    id: 'lungs', 
    name: 'Lungs', 
    status: 'critical', 
    lastChecked: '2023-10-15', 
    nextCheckup: '2023-11-10'
  },
  { 
    id: 'teeth', 
    name: 'Teeth', 
    status: 'warning', 
    lastChecked: '2023-09-22', 
    nextCheckup: '2024-01-15'
  },
  { 
    id: 'bone', 
    name: 'Bone', 
    status: 'healthy', 
    lastChecked: '2023-08-18', 
    nextCheckup: '2024-02-20'
  }
];