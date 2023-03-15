import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { ITypeExpense } from 'src/app/shared/interfaces/typeExpense';
import { ITypeIncome } from 'src/app/shared/interfaces/typeIncome';
import { SnackbarProvider } from 'src/app/shared/provider/snackbar.provider';
import { ExpenseService } from 'src/app/shared/services/expense.service';
import { TypeExpenseService } from 'src/app/shared/services/type-expense.service';
import { CustomValidations } from 'src/app/shared/utils/custom-validations';
import { validateForm, validateRadio } from 'src/app/shared/utils/utilitarias';


export const MY_FORMATS_DD = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS_DD}]
})
export class ExpenseEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private expenseService: ExpenseService,
    private typeExpenseService: TypeExpenseService, private snackBar: SnackbarProvider) {
      this.expenseId = this.activatedRoute.snapshot.params.id;
     }

     expenseId: 0;

     typesExpense: ITypeExpense;

     formPage = new FormGroup({
      id: new FormControl(null),
      description: new FormControl(null),
      value: new FormControl(null, Validators.required),
      isReceived: new FormControl(null, Validators.required),
      typeIncome: new FormControl(null),
      dateReference: new FormControl(null, Validators.required),
    },
      {
        validators: CustomValidations.checkValueGreaterThanZero
      });     

  ngOnInit(): void {
    this.getById();
    this.getListTypeExpense();
  }

  getById() {

    this.expenseService.getById(this.expenseId).subscribe(res => {
      
      this.formPage.patchValue(res)
      validateRadio(this.formPage)
    })

  }

  getListTypeExpense() {

    this.typeExpenseService.getAll().subscribe(res => {
      
      this.typesExpense = res;

    }, err => {
      console.log(err);
    })
  }

  update() {

    if(this.formPage.valid) {

      this.expenseService.update(this.formPage.getRawValue()).subscribe(res => {
        this.snackBar.showSnackSuccess('Expense succesfully updated');
        setTimeout(() => {
          window.location.reload();
        }, 1200)
      }, err => {
        console.log(err);
      })
    
    } else {
      this.validateForm();
    }

  }

  validateForm() {
    validateForm(this.formPage)
  }

  validateRadio() {
    validateRadio(this.formPage);
  }

}
