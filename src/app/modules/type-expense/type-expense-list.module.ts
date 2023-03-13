import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeExpenseListRoutingModule } from './type-expense-list-routing.module';

import { TypeExpenseListComponent } from './type-expense-list.component';
import { MatTableModule } from '@angular/material/table'  
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PaginatorComponentModule } from 'src/app/shared/components/paginator/paginator.component.module';

@NgModule({
    declarations: [
        TypeExpenseListComponent
    ],
    imports: [
        CommonModule,
        TypeExpenseListRoutingModule,
        PaginatorComponentModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        PaginatorComponentModule
    ]
})
export class TypeExpenseListModule { }
