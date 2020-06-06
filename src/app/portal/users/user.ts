import { Meta } from './meta';
import { Name } from './name';
import { Phone } from './phone';
import { Email } from './email';
export interface User {
  schemas: string[];
  id: string;
  externalId: string;
  meta?: Meta;
  name?: Name;
  userName: string;
  displayName: string;
  phoneNumbers?: Phone;
  emails?: Email;
  active: boolean;
  userType: string;
}
