import { Accesslog } from './accesslog';
export interface Statistics {
  usersCount: number;
  groupsCount: number;
  accessLogs: Accesslog[];
}
