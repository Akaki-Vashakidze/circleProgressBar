import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircleProgressBarComponent } from './circle-progress-bar/circle-progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
