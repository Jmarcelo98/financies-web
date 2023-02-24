import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent {

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>,
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
