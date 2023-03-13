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
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'type-income',
    loadChildren: () => import('./modules/type-income/type-income-list/type-income-list.module').then(m => m.TypeIncomeListModule),
  },
  {
    path: 'income',
    loadChildren: () => import('./modules/income/income-list/income-list.module').then(m => m.IncomeListModule),
  },
  {
    path: 'type-expense',
    loadChildren: () => import('./modules/type-expense/type-expense-list.module').then(m => m.TypeExpenseListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
