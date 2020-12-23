import { User } from '../user/user.model';

export interface Match {
  id?: number;
  score: number;
  created: Date;
  accepted: boolean;
  initiator: User;
  target: User;
}
