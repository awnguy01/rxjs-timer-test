import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimedWidgetComponent } from './timed-widget/timed-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TimedWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
