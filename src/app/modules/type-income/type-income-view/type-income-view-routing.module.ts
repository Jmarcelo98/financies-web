import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { TypeIncomeViewComponent } from './type-income-view.component';

const routes: Routes = [
  {
    path: '',
    component: TypeIncomeViewComponent,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeIncomeViewRoutingModule { }
