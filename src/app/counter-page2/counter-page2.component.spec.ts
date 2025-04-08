import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPage2Component } from './counter-page2.component';

describe('CounterPage2Component', () => {
  let component: CounterPage2Component;
  let fixture: ComponentFixture<CounterPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
