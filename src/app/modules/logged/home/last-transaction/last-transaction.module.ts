import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastTransactionComponent } from './last-transaction.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [LastTransactionComponent],
  exports: [LastTransactionComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class LastTransactionModule { }
