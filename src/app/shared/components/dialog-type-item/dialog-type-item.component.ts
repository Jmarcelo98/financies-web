import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarProvider } from '../../provider/snackbar.provider';
import { TypeIncomeService } from '../../services/type-income.service';
import { validateForm } from '../../utils/utilitarias';

@Component({
  selector: 'app-dialog-type-item',
  templateUrl: './dialog-type-item.component.html',
  styleUrls: ['./dialog-type-item.component.css']
})
export class DialogTypeItemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogTypeItemComponent>, private snackBar: SnackbarProvider, @Inject
    (MAT_DIALOG_DATA) public data: any, private typeIncomeService: TypeIncomeService) {
  }

  ngOnInit(): void {
    if (this.data.objectEdit != null) {
      this.patchForm(this.data.objectEdit)
    }
  }

  formType = new FormGroup({
    id: new FormControl(null),
    description: new FormControl(null, [Validators.required])
  });

  // type income
  addTypeIncome() {

    if (this.formType.valid) {

      this.typeIncomeService.create(this.formType.getRawValue()).subscribe(suc => {
        this.showSnackSucesso('Type of recipe successfully registered');
        this.dialogRef.close()

        setTimeout(() => {
          window.location.reload();
        }, 1200);

      }, err => {
        console.log(err);
      })

    } else {
      this.validateForm()
    }

  }

  editTypeIncome() {

    if (this.formType.valid) {

      this.typeIncomeService.update(this.formType.getRawValue()).subscribe(suc => {
        this.showSnackSucesso('Type of income successfully updated');
        this.dialogRef.close()
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      }, err => {
        console.log(err);
      })
    } else {
      this.validateForm()
    }
  }

  // type expense
  editTypeExpense() {

  }

  addTypeExpense() {
    console.log("b");
  }

  patchForm(form: any) {
    this.formType.patchValue(form)
  }

  cancelClick() {
    this.dialogRef.close({ secondary: true });
  }

  primaryClick() {
    this.dialogRef.close({ primary: true });
  }

  onNoClick(): void {
    this.dialogRef.close({ close: true });
  }

  showSnackSucesso(msg: string) {
    this.snackBar.showSnackSuccess(msg);
  }

  validateForm() {
    validateForm(this.formType);
  }

}
