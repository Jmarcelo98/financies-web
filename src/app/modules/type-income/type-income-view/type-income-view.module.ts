import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeIncomeViewRoutingModule } from './type-income-view-routing.module';
import { TypeIncomeViewComponent } from './type-income-view.component';


@NgModule({
  declarations: [
    TypeIncomeViewComponent
  ],
  imports: [
    CommonModule,
    TypeIncomeViewRoutingModule
  ]
})
export class TypeIncomeViewModule { }
