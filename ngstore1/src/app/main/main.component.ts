import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../stores';
// import { Observable } from 'rxjs';
import { User } from '../stores/user/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // user: Observable<User>;
  user: User;

  constructor(private store: Store<AppState>) {
    // this.user = store.select('user');
    store.select('user')
      .subscribe(({ id, name, email }) => {
        this.user = { id, name, email };
        // zohladnis dalsie akcie nad novym userom
      });
  }

  ngOnInit() {
  }

  get enrichedUser(): any {
    return `enrichedUser ${this.user.name} ok`;
  }

}
