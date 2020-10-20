import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `Counter: {{ counter }}`,
})
export class CounterComponent {
  counter = 0;

  @Output() counterEmiter = new EventEmitter();

  increment() {
    this.counter++;
    this.counterEmiter.emit(this.counter);
  }
  decrement() {
    this.counter--;
  }
}
