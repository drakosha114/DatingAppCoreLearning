import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDirective } from './directives/header.directive';
import { FooterDirective } from './directives/footer.directive';
import { ScreenComponent } from './components/screen/screen.component';
import { ContentComponent } from './components/content/content.component';
import { MainContentDirective } from './directives/main-content.directive';
import {BootstrapGridModule} from "../bootstrap-extends/bootstrap-grid/bootstrap-grid.module";

@NgModule({
  declarations: [
    HeaderDirective,
    FooterDirective,
    ScreenComponent,
    ContentComponent,
    MainContentDirective
  ],
  imports: [
    CommonModule,
    BootstrapGridModule
  ],
  exports: [
    HeaderDirective,
    FooterDirective,
    ScreenComponent,
    ContentComponent,
    MainContentDirective
  ]
})
export class LayoutModule { }
