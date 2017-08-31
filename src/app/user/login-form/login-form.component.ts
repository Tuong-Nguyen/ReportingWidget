import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private authenticationService;
  loginForm: FormGroup;

  constructor(authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }

  async onGetAllUsers() {
    const data = await this.authenticationService.getAllUsers();
    console.log('Dataaaaaaaa');
    console.log(data);
  }

}
