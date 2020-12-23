import { Availability } from '../availability/availability.model';

export interface User {
  id: string;
  fullName: string;
  bio: string;
  averagePace: number;
  weeklyRuns: number;
  intensity: string;
  availability: Availability[];
  paceStr: string;
  profilePic: string;
}
