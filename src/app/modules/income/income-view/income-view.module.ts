import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeViewRoutingModule } from './income-view-routing.module';
import { IncomeViewComponent } from './income-view.component';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    IncomeViewComponent
  ],
  imports: [
    CommonModule,
    IncomeViewRoutingModule,
    MatButtonModule,
    PipesModule
  ]
})
export class IncomeViewModule { }
