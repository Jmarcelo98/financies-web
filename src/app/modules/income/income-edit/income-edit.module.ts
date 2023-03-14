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
  ]
})
export class IncomeEditModule { }
