import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { duplicate, reset } from '../store/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-page2',
  standalone: false,
  templateUrl: './counter-page2.component.html',
  styleUrl: './counter-page2.component.css'
})
export class CounterPage2Component {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }

  duplicate() {
    this.store.dispatch(duplicate());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
