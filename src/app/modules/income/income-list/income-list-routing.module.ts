import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { IncomeEditComponent } from '../income-edit/income-edit.component';
import { IncomeViewComponent } from '../income-view/income-view.component';
import { IncomeListComponent } from './income-list.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'view/:id',
    component: IncomeViewComponent,
    loadChildren: () => import('../income-view/income-view.module').then(m => m.IncomeViewModule)
  },
  {
    path: 'edit/:id',
    component: IncomeEditComponent,
    loadChildren: () => import('../income-edit/income-edit.module').then(m => m.IncomeEditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeListRoutingModule { }
