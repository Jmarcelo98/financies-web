import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseListRoutingModule } from './expense-list-routing.module';
import { ExpenseListComponent } from './expense-list.component';


@NgModule({
  declarations: [
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    ExpenseListRoutingModule
  ]
})
export class ExpenseListModule { }
