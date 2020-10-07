import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      adress: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required),
      }),
    });
  }
  submit() {
    console.log('form', this.form);
    if (this.form.valid) {
      console.log('form valid');
    }
  }
  SetCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };
    const cityKey = this.form.get('adress').get('country').value;
    const city = cityMap[cityKey];
    console.log('AppComponent -> SetCapital -> city', city);
    this.form.patchValue({
      adress: { city },
    });
  }
}
