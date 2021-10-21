import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FormssModule } from './forms/forms.module';
import { BootstrapExtendsModule } from './bootstrap-extends/bootstrap-extends.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    NgbModule,
    FormsModule,
    FormssModule,
    BootstrapExtendsModule
  ],
  exports: [
    LayoutModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    NgbModule,
    FormssModule,
    FormsModule,
    BootstrapExtendsModule
  ]
})
export class SharedModule { }
