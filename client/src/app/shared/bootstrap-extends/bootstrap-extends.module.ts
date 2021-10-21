import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapNavbarModule } from './bootstrap-navbar/bootstrap-navbar.module';
import { BootstrapGridModule } from './bootstrap-grid/bootstrap-grid.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BootstrapNavbarModule,
    BootstrapGridModule
  ],
  exports: [
    BootstrapNavbarModule,
    BootstrapGridModule
  ]
})
export class BootstrapExtendsModule { }
