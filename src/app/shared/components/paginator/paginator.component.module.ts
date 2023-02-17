import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from './paginator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [ PaginatorComponent ],
  declarations: [ PaginatorComponent ],
})
export class PaginatorComponentModule {
}
