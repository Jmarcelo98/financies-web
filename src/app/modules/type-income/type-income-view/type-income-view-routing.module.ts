import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeIncomeViewComponent } from './type-income-view.component';

const routes: Routes = [
  {
    path: '',
    component: TypeIncomeViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeIncomeViewRoutingModule { }
