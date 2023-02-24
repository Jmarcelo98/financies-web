import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlExceptionModule } from '../../directives/form-control-exception/form-control-exception.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SnackbarComponentModule } from '../snackbar/snackbar.component.module';
import { DialogTypeItemComponent } from './dialog-type-item.component';



@NgModule({
  declarations: [DialogTypeItemComponent],
  exports: [DialogTypeItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormControlExceptionModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    SnackbarComponentModule
  ]
})
export class DialogTypeItemModule { }
