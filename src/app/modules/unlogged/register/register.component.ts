import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { CustomValidations } from 'src/app/shared/utils/custom-validations';
import { validateForm } from 'src/app/shared/utils/utilitarias';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) { }

  hide: boolean = true;

  hideConfirm: boolean = true;

  formRegister = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    passwordConfirm: new FormControl(null, [Validators.required]),

  }, { validators: CustomValidations.checkPassword });

  ngOnInit(): void {
    if (this.tokenStorage.getToken() != null) {
      this.router.navigate([''])
    }
  }

  register() {
    if (this.formRegister.valid) {
      this.authService.register(this.formRegister.value.email, this.formRegister.value.password).subscribe(res => {
        this.login();
      })

    } else {
      this.validateForm();
    }

  }

  login() {
    this.authService.login(this.formRegister.value.email, this.formRegister.value.password).subscribe(res => {
      this.tokenStorage.saveToken(res)
      this.router.navigate([''])
        .then(() => {
          window.location.reload();
        });
    }, err => {
      console.log(err);
    })
  }

  validateForm() {
    validateForm(this.formRegister);
  }

}
