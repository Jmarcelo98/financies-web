import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseViewRoutingModule } from './expense-view-routing.module';
import { ExpenseViewComponent } from './expense-view.component';
import { PipesModule } from "../../../../../shared/pipes/pipes.module";


@NgModule({
    declarations: [
        ExpenseViewComponent
    ],
    imports: [
        CommonModule,
        ExpenseViewRoutingModule,
        PipesModule
    ]
})
export class ExpenseViewModule { }
