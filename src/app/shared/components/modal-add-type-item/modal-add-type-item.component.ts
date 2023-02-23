import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarProvider } from '../../provider/snackbar.provider';
import { TypeIncomeService } from '../../services/type-income.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-modal-add-type-item',
  templateUrl: './modal-add-type-item.component.html',
  styleUrls: ['./modal-add-type-item.component.css']
})
export class ModalAddTypeItemComponent {

  constructor(public dialogRef: MatDialogRef<ModalAddTypeItemComponent>, private snackBar: SnackbarProvider, @Inject
    (MAT_DIALOG_DATA) public data: any, private typeIncomeService: TypeIncomeService, private router: Router) {
  }

  formType = new FormGroup({
    description: new FormControl(null, [Validators.required])
  });

  secondaryClick() {
    this.dialogRef.close({ secondary: true });
  }

  primaryClick() {
    this.dialogRef.close({ primary: true });
  }

  onNoClick(): void {
    this.dialogRef.close({ close: true });
  }

  addTypeIncome() {

    if (this.formType.valid) {

      this.typeIncomeService.create(this.formType.getRawValue()).subscribe(suc => {
        this.showSnackSucesso('Type of recipe successfully registered');
        this.dialogRef.close()

        setTimeout(() => {
          window.location.reload();
        }, 2000);

      }, err => {
        console.log(err);
      })

    } else {
      this.validaCampos(this.formType)
    }

  }


  addTypeExpense() {
    console.log("b");
  }

  validaCampos(form: FormGroup) {
    const controls = Object.keys(form.controls);
    for (const control of controls) {
      form.controls[control].updateValueAndValidity();
    }
  }

  showSnackSucesso(msg: string) {
    this.snackBar.showSnackSuccess(msg);
  }


}
