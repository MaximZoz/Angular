import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  beforeEach(() => {
    component = new CounterComponent();
  });

  it('chould decrement counter by -1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });
  it('chould increment counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });
});
