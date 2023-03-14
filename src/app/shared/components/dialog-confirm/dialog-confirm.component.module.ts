import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DialogConfirmComponent } from './dialog-confirm.component';


@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
  ],
  exports: [DialogConfirmComponent],
  declarations: [DialogConfirmComponent]
})
export class DialogConfirmComponentModule {
}
