import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../stores/tutorial/tutorial.model';
import { AppState } from './../stores';
import * as TutorialActions from './../stores/tutorial/tutorial.actions';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    // tslint:disable-next-line: no-debugger
    debugger;
    console.log('ooooooo');
    this.tutorials = store.select('tutorial');
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) );
  }

  ngOnInit() {
  }

}
