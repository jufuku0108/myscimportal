import { Member } from './member';
import { Meta } from './meta';
export interface Group {
  schemas: string[];
  id: string;
  externalId: string;
  displayName: string;
  members?: Member;
  meta: Meta;
}
