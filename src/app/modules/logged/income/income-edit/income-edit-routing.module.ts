import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { IncomeEditComponent } from './income-edit.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeEditComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeEditRoutingModule { }
