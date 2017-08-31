import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  declarations: [
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [AuthenticationService]
})
export class UserModule { }
