import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseCategoryComponent } from './expense-category.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ExpenseCategoryComponent],
  exports: [ExpenseCategoryComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ExpenseCategoryModule { }
