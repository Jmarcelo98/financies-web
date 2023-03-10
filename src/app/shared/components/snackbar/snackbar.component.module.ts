import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [ SnackbarComponent ],
  declarations: [ SnackbarComponent ]
})
export class SnackbarComponentModule {
}
