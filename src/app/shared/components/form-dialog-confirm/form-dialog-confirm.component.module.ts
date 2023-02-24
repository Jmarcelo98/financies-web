import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormDialogConfirmComponent } from './form-dialog-confirm.component';


@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
  ],
  exports: [FormDialogConfirmComponent],
  declarations: [FormDialogConfirmComponent]
})
export class FormDialogConfirmComponentModule {
}
