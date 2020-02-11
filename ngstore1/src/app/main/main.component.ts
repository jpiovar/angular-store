import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

}
