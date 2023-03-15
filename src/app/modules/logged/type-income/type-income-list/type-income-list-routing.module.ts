import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { TypeIncomeListComponent } from './type-income-list.component';

const routes: Routes = [
  {
    path: '',
    component: TypeIncomeListComponent,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeIncomeListRoutingModule { }
