import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-timed-widget',
  templateUrl: './timed-widget.component.html',
  styleUrls: ['./timed-widget.component.scss']
})
export class TimedWidgetComponent implements OnInit {
  // variable holding the current date time
  clockData = new Date().toISOString();

  constructor() { }

  // variable holding the subscription
  clockSub = new Subscription();

  ngOnInit() {
    // assign the timer subscription to the variable
    this.clockSub = this.timerSub();
  }

  // function returning the timer subscription
  // moving this to a separate function makes it more easily testable
  timerSub(): Subscription {
    return timer(0, 1000).subscribe(() => {
      this.updateClock();
    });
  }

  // function being spied upon in the test
  // updates the current date time every second
  updateClock() {
    this.clockData = new Date().toISOString();
  }

}
