import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'type-income',
    loadChildren: () => import('./modules/type-income/type-income-list/type-income-list.module').then(m => m.TypeIncomeListModule),
  },
  {
    path: 'type-income/:id',
    loadChildren: () => import('./modules/type-income/type-income-view/type-income-view.module').then(m => m.TypeIncomeViewModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
