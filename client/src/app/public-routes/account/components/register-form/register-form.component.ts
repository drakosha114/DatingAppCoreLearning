import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public form: FormGroup | null = null;

  private _hasProcessed: boolean | null = false;
  @Input()
  set hasProcessed(value: boolean | null) {
    this._hasProcessed = value;
    if(this.form) {
      if(value) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    }
  }
  get hasProcessed(): boolean | null {
    return this._hasProcessed;
  }

  private _error: any;
  @Input()
  set error(error: any) {
    this._error = error;
  }
  get error(): any {
    return this._error;
  }

  @Output()
  formSubmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.formSubmit.emit(this.form?.value);
  }
}
