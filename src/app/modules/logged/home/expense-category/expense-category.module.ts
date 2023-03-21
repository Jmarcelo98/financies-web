import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseCategoryComponent } from './expense-category.component';



@NgModule({
  declarations: [ExpenseCategoryComponent],
  exports: [ExpenseCategoryComponent],
  imports: [
    CommonModule
  ]
})
export class ExpenseCategoryModule { }
