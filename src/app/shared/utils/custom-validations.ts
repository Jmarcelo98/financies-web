import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
// para usar a validação customizada basta adicionar a função nas validações do form
// email: new FormControl('', [ Validators.required, emailValidator()])
// o retorno ' return { email: true }; ' deverá ter mesmo nome da msg no FormControlExceptionDirective
// assim ele irá retornar o texto que estiver configurado lá no FormControlExceptionDirective


export class CustomValidations {

    // fullNameValitator = '^[A-Za-zÀ-ÿ]+\\s([A-Za-zÀ-ÿ]\\s?)*[A-Za-zÀ-ÿ]$';
    static fullNameValitator = '.+\\s.+';  // palavra + spaco + palavra
    static birthdateValidator = '^(0[1-9]|[1-2][0-9]|3[0-1])\\/(0[1-9]|1[0-2])\\/(19[4-9]\\d|20[0-1][0-9]|20[2][0-2])$';
    static emailValidator = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

    static checkEmail: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        const email = group.get('email').value;
        const confirEmail = group.get('confirmEmail').value;

        if (confirEmail.length === 0 || email === confirEmail) {
            return null;
        } else {
            // Faz o set do campo desejado
            group.get('confirmEmail').setErrors({ nonIdenticalEmail: true });
            return { nonIdenticalEmail: true };
        }
    };

    static checkPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        const password = group.get('password').value;
        const passwordConfirm = group.get('passwordConfirm').value;

        if (password === passwordConfirm) {
            return null;
        } else {
            group.get('passwordConfirm').setErrors({ nonIdenticalPassword: true });
            return { nonIdenticalPassword: true };
        }
    };

    // static emailValidator(): ValidatorFn {
    //   return (control: AbstractControl): { [ key: string ]: any } => {
    //
    //     if (!control.value || !control.value.trim()) {
    //       return null;
    //     }
    //
    //     // altera o if, está como true para teste
    //     if (true) {
    //       return { email: true };
    //     } else {
    //       return null;
    //     }
    //   };
    // }

    static updateFormControl(formControl: any, keys?: Array<string>) {
        const controls = Object.keys(formControl);
        for (const control of controls) {
            const formCtrl = formControl[control];
            if (formCtrl instanceof FormGroup) {
                this.updateFormControl(formCtrl.controls, keys);
                continue;
            }
            if (keys) {
                const hasKey = keys.some(
                    x => x === control);
                if (hasKey) {
                    formCtrl.updateValueAndValidity();
                }
            } else {
                formCtrl.updateValueAndValidity();
            }
        }
    }
}



