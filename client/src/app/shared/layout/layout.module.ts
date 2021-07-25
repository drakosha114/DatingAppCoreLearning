import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LScreenComponent } from './l-screen/l-screen.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';



@NgModule({
  declarations: [
    LScreenComponent,
    LayoutHeaderComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LScreenComponent,
    LayoutHeaderComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutContainerComponent
  ]
})
export class LayoutModule { }
