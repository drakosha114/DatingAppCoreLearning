import {Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent {

  @HostBinding('class.container') get valid() { return true; }
  constructor() { }

}
