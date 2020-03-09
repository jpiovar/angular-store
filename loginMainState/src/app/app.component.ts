import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app/stores';
import { User } from '../app/stores/user/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loginMain';
  user: User;

  constructor(private store: Store<AppState>) {
    store.select('user')
      .subscribe(({ id, name, email }) => {
        this.user = { id, name, email };
      });
  }

}
