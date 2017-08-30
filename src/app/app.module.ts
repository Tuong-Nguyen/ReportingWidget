import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddWidgetModule } from './addwidget/add-widget.module';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AddWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
