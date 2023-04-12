import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseListRoutingModule } from './expense-list-routing.module';
import { ExpenseListComponent } from './expense-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponentModule } from 'src/app/shared/components/paginator/paginator.component.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    ExpenseListRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    PaginatorComponentModule,
    // NgxMaskModule.forRoot(),
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
    }
  ]
})
export class ExpenseListModule { }
