import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  group,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({ background: 'blue' })),
      state(
        'end',
        style({
          background: 'red',
        })
      ),
      state(
        'special',
        style({
          background: 'orange',
          transform: 'scale(0.5)',
          borderRadius: '50%',
        })
      ),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        group([
          query(
            'h4',
            animate(
              1500,
              style({
                fontSize: '.5rem',
                color: 'red',
              })
            )
          ),
          style({ background: 'green' }),
          animate(
            '1s',
            style({
              background: 'pink',
            })
          ),
          animate(750),
        ]),
      ]),

      // void => *
      transition(':enter', [style({ opacity: 0 }), animate('800ms ease-out')]),
      // * => void
      transition(':leave', [
        style({ opacity: 1 }),
        group([
          animate(
            '100ms ease-out',
            style({
              color: 'black',
              fontWeight: 'bold',
              fontSize: '20px',
            })
          ),
          animate(
            '1800ms ease-out',
            style({
              opacity: 0,
              transform: 'scale(1.2)',
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }
}
