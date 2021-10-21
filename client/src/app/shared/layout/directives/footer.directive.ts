import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[lFooter]'
})
export class FooterDirective {

  @HostBinding('class.l-footer') get footerClass() {
    return true;
  }

}
