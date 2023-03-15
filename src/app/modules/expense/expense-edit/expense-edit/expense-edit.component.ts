import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ITypeExpense } from 'src/app/shared/interfaces/typeExpense';
import { ITypeIncome } from 'src/app/shared/interfaces/typeIncome';
import { SnackbarProvider } from 'src/app/shared/provider/snackbar.provider';
import { ExpenseService } from 'src/app/shared/services/expense.service';
import { TypeExpenseService } from 'src/app/shared/services/type-expense.service';
import { CustomValidations } from 'src/app/shared/utils/custom-validations';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private expenseService: ExpenseService,
    private typeExpenseService: TypeExpenseService, private snackbar: SnackbarProvider) {
      this.expenseId = this.activateRoute.snapshot.params.id;
     }

     expenseId: 0

     typesExpense: ITypeExpense;

     formPage = new FormGroup({
      id: new FormControl(null),
      description: new FormControl(null),
      value: new FormControl(null, Validators.required),
      isReceived: new FormControl(null, Validators.required),
      typeExpense: new FormControl(null),
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
      this.expenseService.update(this.formPage.getRawValue()).subscribe( res => {
        this.snackbar.showSnackSuccess('Expense succesfully updated');
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      
      }, err => {
        console.log(err);
      })

    } else {
      this.validaCampos(this.formPage)
    }
  }

  validaCampos(form: FormGroup) {
    const controls = Object.keys(form.controls);
    for (const control of controls) {
      form.controls[control].updateValueAndValidity();
    }
  }

}
