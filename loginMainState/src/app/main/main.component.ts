import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../stores';
import { User } from './../stores/user/types';
import * as UserActions from './../stores/user/actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  logoutUser() {
    debugger;
    const { id, name, email } = { id: 'jj', name: 'eva', email: 'janko@janko'};
    this.store.dispatch(new UserActions.LogoutUser({id, name, email}));
  }

  ngOnInit() {
  }

}
