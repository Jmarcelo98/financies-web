import {Directive, ElementRef, OnInit, Optional} from '@angular/core';
import {FormControlName} from '@angular/forms';

@Directive({
    selector: '[formControlName]',
})
export class FormControlExceptionDirective implements OnInit {
    private messageMap: { [key: string]: string };

    constructor(
        private element: ElementRef,
        @Optional() private formControl: FormControlName,
    ) {
        this.messageMap = {
            default: 'Valor inválido',
            invalid: 'Valor inválido',
            email: 'E-mail inválido',
            cpf: 'CPF inválido',
            cnpj: 'CNPJ inválido',
            required: 'Campo obrigatório',
            length: 'Quantidade de caracteres inválida',
            minlength: 'Quantidade de mínima de caracteres inválida',
            maxlength: 'Quantidade de máxima de caracteres inválida',
            nonIdenticalEmail: 'E-mail e confirmação estão diferentes',
            nonIdenticalPassword: 'Senha e confirmação estão diferentes',
            searchCep: 'Realize a consulta de CEP',
            cepInvalido: 'Cep Inválido',
        };
    }

    ngOnInit() {
        let wrapper: any;
        let messageNode: any;

        // console.log(this.element.nativeElement.tagName);
        let formControlContent = this.element.nativeElement.closest('mat-form-field');


        if (formControlContent) {
            wrapper = formControlContent.getElementsByClassName('mat-form-field-subscript-wrapper')[0] || null;
        } else {

            switch (this.element.nativeElement.tagName) {
                case 'MAT-RADIO-GROUP' :
                    formControlContent = this.element.nativeElement.closest('mat-radio-group');
                    wrapper = formControlContent;  // Vamos pegar o parent do controle para incluir a label de erro automaticamente nele
                    break;

                case 'MAT-CHECKBOX' :
                    formControlContent = this.element.nativeElement.closest('mat-checkbox');
                    wrapper = formControlContent; // Vamos pegar o parent do controle para incluir a label de erro automaticamente nele
                    break;
            }
        }

        if (!formControlContent) {
            console.warn('FormControl without mat-form-field', this.element.nativeElement, this.element.nativeElement.tagName);
            return;
        }


        if (wrapper && wrapper.classList.value.indexOf('mat-error') > -1) {
            messageNode = wrapper;
        } else {
            messageNode = document.createElement('mat-error');

            messageNode.classList.add('mat-error');
            wrapper.appendChild(messageNode);
        }

        // <mat-error>
        // 	Please enter a valid email address
        // </mat-error>

        if (this.formControl.statusChanges) {
            this.formControl.statusChanges.subscribe((status) => {
                if (status === 'INVALID') {
                    formControlContent.classList.add('exception-error');
                    Object.keys(this.formControl.errors).forEach((key) => {
                        messageNode.innerText = this.messageMap.hasOwnProperty(key)
                            ? this.messageMap[key]
                            : this.messageMap.default;
                    });

                    return;
                }

                formControlContent.classList.remove('exception-error');
                messageNode.innerText = '';
            });
        } else {
            console.error(
                'Campo não definido no FormBuilder da pagina',
                this.formControl.name,
            );
        }

        this.formControl.formDirective.ngSubmit.subscribe(() => {
        });
    }
}
