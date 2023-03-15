import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseViewRoutingModule } from './expense-view-routing.module';
import { ExpenseViewComponent } from './expense-view.component';


@NgModule({
  declarations: [
    ExpenseViewComponent
  ],
  imports: [
    CommonModule,
    ExpenseViewRoutingModule
  ]
})
export class ExpenseViewModule { }
