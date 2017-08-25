import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
