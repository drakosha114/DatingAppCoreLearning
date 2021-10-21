import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components';
import {ReactiveFormsModule, FormsModule } from "@angular/forms";
import {FormControlBase} from "./classes";

@NgModule({
  declarations: [
    TextInputComponent,
    FormControlBase
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TextInputComponent
  ]
})
export class FormssModule { }
