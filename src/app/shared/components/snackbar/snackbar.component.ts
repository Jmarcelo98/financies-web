import { Component, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: [ './snackbar.component.css' ],
})

export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,  public snackBarRef: MatSnackBar) {
    console.log(data);
    console.log(snackBarRef);    
  }
}