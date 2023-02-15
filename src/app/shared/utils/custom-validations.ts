import {AbstractControl, ValidatorFn, FormGroup, ValidationErrors} from '@angular/forms';
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
            group.get('confirmEmail').setErrors({nonIdenticalEmail: true});
            return {nonIdenticalEmail: true};
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

    // dateValidator(): ValidatorFn {
    //     return (control: AbstractControl): { [key: string]: any } => {
    //
    //         if (!control.value || !control.value.trim()) {
    //             return null;
    //         }
    //
    //         if (!moment(control.value, 'DD/MM/YYYY', true).isValid()) {
    //             return {dateValidator: true};
    //         } else {
    //             return null;
    //         }
    //     };
    // }
    //

    // static dateYearLessActual(): ValidatorFn {
    //     return (control: AbstractControl): { [key: string]: any } => {
    //
    //         if (!control.value || !control.value.trim()) {
    //             return null;
    //         }
    //
    //         if (moment(control.value, 'DD/MM/YYYY', true).year() < moment(new Date()).year()) {
    //             return null;
    //         } else {
    //             return {dateValidatorLess: true};
    //         }
    //     };
    // }

    static cpfValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value || !control.value.trim()) {
                return null;
            }

            const numbers = control.value.replace(/\D/gi, '');

            if (CustomValidations.cpfIsValid(numbers)) {
                return null
            } else {
                return {'cpf': true};
            }
        }
    }

    static cnpjValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value || !control.value.trim()) {
                return null;
            }

            const numbers = control.value.replace(/\D/gi, '');

            if (CustomValidations.cnpjIsValid(numbers)) {
                return null
            } else {
                return {'cnpj': true};
            }
        }
    }

    static cpfIsValid(value: any) {

        if (!value) return false

        // Aceita receber o valor como string, número ou array com todos os dígitos
        const validTypes =
            typeof value === 'string' || Number.isInteger(value) || Array.isArray(value)

        // Elimina valores com formato inválido
        if (!validTypes) return false

        // Guarda todos os dígitos em um array
        const numbers = value.toString().match(/\d/g).map(Number)

        // Valida quantidade de dígitos
        if (numbers.length !== 11) return false

        // Elimina valores inválidos com todos os dígitos repetidos
        const items = [...new Set(numbers)]
        if (items.length === 1) return false

        // Separa número base do dígito verificador
        const base = numbers.slice(0, 9)
        const digits = numbers.slice(9)

        // Cálculo base
        const calc = (n, i, x) => n * (x - i)

        // Utilitário de soma
        const sum = (r, n) => r + n

        // Cálculo de dígito verificador
        const digit = (n) => {
            const rest = n % numbers.length
            return rest < 2 ? 0 : numbers.length - rest
        }

        // Cálculo sobre o número base
        const calc0 = base.map((n, i) => calc(n, i, numbers.length - 1)).reduce(sum, 0)
        // 1o. dígito verificador
        const digit0 = digit(calc0)

        // Valida 1o. digito verificador
        if (digit0 !== digits[0]) return false

        // Cálculo sobre o número base + 1o. dígito verificador
        const calc1 = base
            .concat(digit0)
            .map((n, i) => calc(n, i, numbers.length))
            .reduce(sum, 0)
        // 2o. dígito verificador
        const digit1 = digit(calc1)

        // Valida 2o. dígito verificador
        return digit1 === digits[1]
    }

    static cnpjIsValid(numbers: any): boolean {

        // Valida a quantidade de dígitos
        if (numbers.length !== 14) {
            return false;
        }

        // Elimina inválidos com todos os dígitos iguais
        const items = [...new Set(numbers)]
        if (items.length === 1) {
            return false;
        }


        // Cálculo validador
        const calc = (x: any) => {
            const slice = numbers.slice(0, x)
            let factor = x - 7
            let sum = 0

            for (let i = x; i >= 1; i--) {
                const n = slice[x - i]
                sum += n * factor--
                if (factor < 2) factor = 9
            }

            const result = 11 - (sum % 11)

            return result > 9 ? 0 : result
        }

        // Separa os 2 últimos dígitos de verificadores
        const digits = numbers.slice(12)

        // Valida 1o. dígito verificador
        const digit0 = calc(12)
        if (digit0.toString() !== digits[0]) {
            return false;
        }

        // Valida 2o. dígito verificador
        const digit1 = calc(13)
        if (digit1.toString() === digits[1]) {
            return true
        } else {
            return false;
        }
    }


    static updateFormControl(formControl: any, keys ?: Array<string>) {
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



