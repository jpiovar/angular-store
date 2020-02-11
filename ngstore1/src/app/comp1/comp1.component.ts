import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../stores/tutorial/types';
import { AppState } from './../stores';
import * as TutorialActions from '../stores/tutorial/actions';

const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})

export class Comp1Component implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    // tslint:disable-next-line: no-debugger
    debugger;
    console.log('ooooooo');
    this.tutorials = store.select('tutorial');
  }

  get tut(): string {
    // tslint:disable-next-line: no-debugger
    debugger;
    // return '';
    return this.tutorials.subscribe(myObserver);
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) );
  }

  ngOnInit() {
  }

}
