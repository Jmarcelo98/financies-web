import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDialogComponent } from './form-dialog.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [ FormDialogComponent ],
  declarations: [ FormDialogComponent ]
})
export class FormDialogComponentModule {
}
