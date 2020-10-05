import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { FilterPipe } from './pipes/filter.pipe';

registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [AppComponent, ExMarksPipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
