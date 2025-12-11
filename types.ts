export type Role = 'admin' | 'manager' | 'staff';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  department: string;
  apps: string[]; // List of app identifiers (e.g., 'slack', 'figma')
  avatarUrl: string;
  status: 'active' | 'inactive';
}

export interface StatMetric {
  label: string;
  value: number;
  trend?: number; // percentage growth
  colorClass: string;
  iconName: string;
}
