import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { CounterPage2Component } from './counter-page2/counter-page2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pagina1', component: CounterComponent },
  { path: 'pagina2', component: CounterPage2Component },
  { path: '', redirectTo: '/pagina1', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 7 // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
