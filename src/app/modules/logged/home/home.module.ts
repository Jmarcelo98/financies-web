import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CurrentBalanceModule } from './current-balance/current-balance.module';
import { SpentMonthModule } from './spent-month/spent-month.module';
import { ExpenseCategoryModule } from './expense-category/expense-category.module';
import { LastTransactionModule } from './last-transaction/last-transaction.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CurrentBalanceModule,
    SpentMonthModule,
    ExpenseCategoryModule,
    LastTransactionModule
  ]
})
export class HomeModule { }
