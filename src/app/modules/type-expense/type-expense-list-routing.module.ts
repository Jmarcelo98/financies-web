import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { TypeExpenseListComponent } from './type-expense-list.component';

const routes: Routes = [
  {
    path: '',
    component: TypeExpenseListComponent,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeExpenseListRoutingModule { }
