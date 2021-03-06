import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../stores';
import { Tutorial } from '../stores/tutorial/types';
import * as TutorialActions from '../stores/tutorial/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name, url}) );
  }

  ngOnInit() {
  }

}
