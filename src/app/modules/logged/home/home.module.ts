import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CurrentBalanceModule } from './current-balance/current-balance.module';
import { SpentMonthComponent } from './spent-month/spent-month.component';
import { SpentMonthModule } from './spent-month/spent-month.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CurrentBalanceModule,
    SpentMonthModule
  ]
})
export class HomeModule { }
