import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControlBase} from "../../classes";
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TextInputType} from "../../types";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ],
})
export class TextInputComponent extends FormControlBase implements ControlValueAccessor, OnInit, OnDestroy {

  public internalForm: FormGroup | null = null;
  public internalFormControl = new FormControl('');

  onChange: Function = () => null;
  onTouch: Function = () => null;

  @Input()
  type: TextInputType = 'text';

  @Input()
  label: string | null = null;

  @Input()
  placeholder: string | null = null;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.internalFormControl.valueChanges.subscribe((value) => {
      this.onChange(value);
      this.onTouch();
    });
  }

  ngOnDestroy(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled) {
      this.disableInternalForm();
    } else {
      this.enableInternalForm();
    }
  }

  writeValue(obj: any): void {
    this.updateInternalForm(obj);
  }

  private updateInternalForm(value: any) {
    this.internalFormControl.patchValue(value, {emitEvent: false});
  }

  private disableInternalForm() {
    this.internalFormControl.disable({emitEvent: false});
  }

  private enableInternalForm() {
    this.internalFormControl.enable({emitEvent: false});
  }

}
