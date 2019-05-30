import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TimedWidgetComponent } from './timed-widget.component';
import { Subscription } from 'rxjs';

describe('TimedWidgetComponent', () => {
  let component: TimedWidgetComponent;
  let fixture: ComponentFixture<TimedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimedWidgetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedWidgetComponent);
    component = fixture.componentInstance;
    // function called every time timer emits
    spyOn(component, 'updateClock');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test for timer initialized in ngOnInit', fakeAsync(() => {
    // triggers ngOnInit and initializes timer
    fixture.detectChanges();
    // timer does not emit until after 0 milliseconds have passed
    expect(component.updateClock).toHaveBeenCalledTimes(0);
    // simulate 0 milliseconds passing 
    tick(0);
    expect(component.updateClock).toHaveBeenCalledTimes(1);
    // timer should also emit after each 1000 milliseconds
    tick(1000);
    expect(component.updateClock).toHaveBeenCalledTimes(2);
    // unsubscribe from the timer
    component.clockSub.unsubscribe();
  }));

  it('test for isolated timer subscription function', fakeAsync(() => {
    // initialize the timer and assign the subscription inside spec
    const newSub: Subscription = component.timerSub();
    expect(component.updateClock).toHaveBeenCalledTimes(0);
    tick(0);
    expect(component.updateClock).toHaveBeenCalledTimes(1);
    tick(1000);
    expect(component.updateClock).toHaveBeenCalledTimes(2);
    // unsubscribe from the timer
    newSub.unsubscribe();
  }));
});


