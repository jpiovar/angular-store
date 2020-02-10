import { Tutorial } from './tutorial/tutorial.model';
import { User } from './user/types';

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly user: User;
}
