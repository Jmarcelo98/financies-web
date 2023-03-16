import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { IncomeViewComponent } from './income-view.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeViewComponent,
    canActivate: [AuthGuardService]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeViewRoutingModule { }
