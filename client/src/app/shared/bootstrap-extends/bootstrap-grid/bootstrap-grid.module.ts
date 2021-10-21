import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerDirective } from './directives/container.directive';



@NgModule({
  declarations: [
    ContainerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerDirective
  ]
})
export class BootstrapGridModule { }
