import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidations } from 'src/app/shared/utils/custom-validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  hide: boolean = true;

  hideConfirm: boolean = true;

  formRegister = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    passwordConfirm: new FormControl(null, [Validators.required]),

  }, {validators: CustomValidations.checkPassword});

  ngOnInit(): void {
  }

  register() {

    if (this.formRegister.valid) {

      // this.loginService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe(res => {
      //   this.tokenStorage.saveToken(res)
      //   this.router.navigate([''])
      //     .then(() => {
      //       window.location.reload();
      //     });
      // }, err => {
      //   console.log(err);
      // })

    }

    else {
      this.validaCampos(this.formRegister);
    }

  }

  validaCampos(form: FormGroup) {
    const controls = Object.keys(form.controls);
    for (const control of controls) {
      form.controls[control].updateValueAndValidity();
    }
  }

}
