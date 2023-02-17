import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeIncomeListComponent } from './type-income-list.component';

const routes: Routes = [
  {
    path: '',
    component: TypeIncomeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeIncomeListRoutingModule { }
