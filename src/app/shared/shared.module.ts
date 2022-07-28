import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbTopbarComponent } from '../literacy-test/components/breadcrumb-topbar/breadcrumb-topbar.component';

@NgModule({
  declarations: [BreadcrumbTopbarComponent],
  imports: [CommonModule],
  exports: [BreadcrumbTopbarComponent],
})
export class SharedModule {}
