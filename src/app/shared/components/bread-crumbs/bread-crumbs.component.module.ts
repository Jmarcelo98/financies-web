import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './bread-crumbs.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [BreadCrumbsComponent],
  exports: [BreadCrumbsComponent]
})
export class BreadCrumbsComponentModule {}
