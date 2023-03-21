import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpentMonthComponent } from './spent-month.component';


@NgModule({
  declarations: [SpentMonthComponent],
  exports: [SpentMonthComponent],
  imports: [
    CommonModule
  ]
})
export class SpentMonthModule { }
