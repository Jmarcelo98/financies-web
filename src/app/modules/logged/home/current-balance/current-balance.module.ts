import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CurrentBalanceComponent } from './current-balance.component';



@NgModule({
  declarations: [CurrentBalanceComponent],
  exports: [CurrentBalanceComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class CurrentBalanceModule { }
