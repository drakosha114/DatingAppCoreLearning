import {Component, Injectable, Input} from "@angular/core";
import {InputSizeType} from "../types";

@Component({
  template: ''
})
export class FormControlBase {
  @Input()
  id: string | null = null;

  @Input()
  size: InputSizeType | null = null;

  @Input()
  label: string | null = null;
}
