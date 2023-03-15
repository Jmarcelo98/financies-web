import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { CustomValidations } from 'src/app/shared/utils/custom-validations';
import { validateForm } from 'src/app/shared/utils/utilitarias';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }
 
  ngOnInit(): void {
    if(this.tokenStorage.getToken() != null) {
      this.router.navigate([''])
    }
    
  }

  formLogin = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });

  hide: boolean = true;


  login() {

    if (this.formLogin.valid) {

      this.loginService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe(res => {
        this.tokenStorage.saveToken(res)
        this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });
      }, err => {
        console.log(err);
      })

    }

    else {
      this.validateForm();
    }

  }

  validateForm() {
    validateForm(this.formLogin)
  }

}
