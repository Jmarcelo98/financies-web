import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { ExpenseEditComponent } from '../../expense-edit/expense-edit/expense-edit.component';
import { ExpenseViewComponent } from '../../expense-view/expense-view/expense-view.component';
import { ExpenseListComponent } from './expense-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseListComponent ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'view/:id',
    component: ExpenseViewComponent,
    loadChildren: () => import('../../expense-view/expense-view/expense-view.module').then(m => m.ExpenseViewModule)
  },
  {
    path: 'view/edit/:id',
    component: ExpenseEditComponent,
    loadChildren: () => import('../../expense-edit/expense-edit/expense-edit.module').then(m => m.ExpenseEditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseListRoutingModule { }
