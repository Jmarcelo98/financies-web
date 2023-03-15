import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeEditRoutingModule } from './income-edit-routing.module';
import { IncomeEditComponent } from './income-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlExceptionModule } from 'src/app/shared/directives/form-control-exception/form-control-exception.module';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';


export const MY_FORMATS_DD = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@NgModule({
  declarations: [
    IncomeEditComponent
  ],
  imports: [
    CommonModule,
    IncomeEditRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FormControlExceptionModule,
    MatSelectModule,
    MatRadioModule,
    NgxCurrencyModule,
    MatDatepickerModule
  ],providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS_DD },
  ]
})
export class IncomeEditModule { }
