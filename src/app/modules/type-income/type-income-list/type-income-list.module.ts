import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeIncomeListRoutingModule } from './type-income-list-routing.module';

import { MatTableModule } from '@angular/material/table';
import { TypeIncomeListComponent } from './type-income-list.component';
import { MatButtonModule } from '@angular/material/button';
import { PaginatorComponentModule } from 'src/app/shared/components/paginator/paginator.component.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TypeIncomeListComponent
  ],
  imports: [
    CommonModule,
    TypeIncomeListRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    PaginatorComponentModule
  ]
})
export class TypeIncomeListModule { }
