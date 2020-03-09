import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../stores';
import { User } from './../stores/user/types';
import * as UserActions from './../stores/user/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  loginUser() {
    debugger;
    const { id, name, email } = { id: 'jj', name: 'janko', email: 'janko@janko'};
    this.store.dispatch(new UserActions.LoginUser({id, name, email}));
  }

  ngOnInit() {
  }

}
