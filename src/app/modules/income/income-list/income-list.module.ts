import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeListRoutingModule } from './income-list-routing.module';
import { IncomeListComponent } from './income-list.component';
import { PaginatorComponentModule } from 'src/app/shared/components/paginator/paginator.component.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    IncomeListComponent
  ],
  imports: [
    CommonModule,
    IncomeListRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    PaginatorComponentModule
  ]
})
export class IncomeListModule { }
