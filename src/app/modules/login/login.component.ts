import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { CustomValidations } from 'src/app/shared/utils/custom-validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: AuthService, private tokenStorage: TokenStorageService) { }

  formLogin = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  hide: boolean = true;


  login() {
    this.loginService.login(this.formLogin.getRawValue()).subscribe(res => {
      this.tokenStorage.saveToken(res)
    }, err => {
      console.log(err);
    })
  }

  validaCampos(form: FormGroup) {
    const controls = Object.keys(form.controls);
    for (const control of controls) {
      form.controls[control].updateValueAndValidity();
    }
  }

}
