import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Breakpoints} from "../../../types";

@Component({
  selector: 'l-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input()
  contentContainerSize: Breakpoints | 'fluid' | null = null;

  @HostBinding('class.l-content') get contentComponentClass() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
