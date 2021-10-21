import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[lHeader]'
})
export class HeaderDirective {

  @HostBinding('class.l-header') get headerClass() {
    return true;
  }

}
