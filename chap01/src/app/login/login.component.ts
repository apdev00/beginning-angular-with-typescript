import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../passwordValidator';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  form: FormGroup;

  constructor (fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
    });
  }

  login() {
    let result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
  }

  // form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace]))
  // });

  // login() {
  //   console.log(this.form.value); // prints form values in json format
  // }
}
