import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAddTypeItemComponent } from './modal-add-type-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlExceptionModule } from '../../directives/form-control-exception/form-control-exception.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SnackbarComponentModule } from '../snackbar/snackbar.component.module';


@NgModule({
  declarations: [ModalAddTypeItemComponent],
  exports: [ModalAddTypeItemComponent],
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
export class ModalAddTypeItemModule { }
