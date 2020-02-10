import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from './../stores/user/types';
import { AppState } from './../stores';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  user: Observable<User>;

  constructor(store: Store<AppState>) {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.user = store.select('user');
    console.log('main store', this.user);
  }

  ngOnInit() {
  }

}
