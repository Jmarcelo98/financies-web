import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { ExpenseEditComponent } from '../../expense-edit/expense-edit/expense-edit.component';
import { ExpenseViewComponent } from './expense-view.component';
const routes: Routes = [
  {
    path: '',
    component: ExpenseViewComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseViewRoutingModule { }
