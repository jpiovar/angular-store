import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './../stores';
import { Observable } from 'rxjs';
import { User } from '../stores/user/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  user: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.user = store.select('user');
  }

  ngOnInit() {
  }

  get enrichedUser(): any {
    return () =>
      async () => await this.store.select('user');
  }

  // user: Observable<User>;

  // constructor(private store: Store<AppState>) { }

  // ngOnInit(): void {
  //   this.user = this.store.select('user');
  // }

}
