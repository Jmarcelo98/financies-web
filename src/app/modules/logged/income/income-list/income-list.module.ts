import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeListRoutingModule } from './income-list-routing.module';
import { IncomeListComponent } from './income-list.component';
import { PaginatorComponentModule } from 'src/app/shared/components/paginator/paginator.component.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    IncomeListComponent
  ],
  imports: [
    CommonModule,
    IncomeListRoutingModule,
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
export class IncomeListModule { }
