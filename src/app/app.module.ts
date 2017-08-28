import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AddWidgetModule } from './addwidget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
