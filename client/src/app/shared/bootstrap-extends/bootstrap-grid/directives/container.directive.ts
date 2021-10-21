import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Breakpoints} from "../../../types";

const CONTAINER_CLASS_PREFIX: string = 'container';

@Directive({
  selector: '[bExContainer]'
})
export class ContainerDirective implements OnInit {

  @Input('bExContainerType')
  bExContainerType: Breakpoints | 'fluid' | null = null;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const containerClass = this.bExContainerType ? `${CONTAINER_CLASS_PREFIX}-${this.bExContainerType}` : CONTAINER_CLASS_PREFIX;
    this.el.nativeElement.classList.add(containerClass);
  }

}
