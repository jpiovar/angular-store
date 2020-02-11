import { Tutorial } from './tutorial/types';
import { User } from './user/types';

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly user: User;
}
