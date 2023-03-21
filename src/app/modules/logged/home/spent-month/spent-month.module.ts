import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpentMonthComponent } from './spent-month.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [SpentMonthComponent],
  exports: [SpentMonthComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class SpentMonthModule { }
