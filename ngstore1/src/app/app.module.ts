import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './stores/tutorial/tutorial.reducer';
import { reducerUser } from './stores/user/reducers';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1';
import { Comp2Component } from './comp2';
import { Comp3Component } from './comp3';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer,
      user: reducerUser
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
