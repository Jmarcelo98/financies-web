import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './form-dialog-confirm.component.html',
  styleUrls: ['./form-dialog-confirm.component.css']
})
export class FormDialogConfirmComponent {

  constructor(public dialogRef: MatDialogRef<FormDialogConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }


  secondaryClick() {
    this.dialogRef.close({ secondary: true });
  }

  primaryClick() {
    this.dialogRef.close({ primary: true });
  }

  onNoClick(): void {
    this.dialogRef.close({ close: true });
  }

}
