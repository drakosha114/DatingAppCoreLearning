import { Component, OnInit } from '@angular/core';
import {AppFacadeService} from "../../services";
import {Router} from "@angular/router";

@Component({
  templateUrl: './private-routes-root-screen.component.html',
  styleUrls: ['./private-routes-root-screen.component.scss']
})
export class PrivateRoutesRootScreenComponent implements OnInit {

  constructor(
    private appFacadeProvider: AppFacadeService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  public logoutClickHandler(): void {
    this.appFacadeProvider.logout(() => this.redirectToPublicRoute());
  }

  private redirectToPublicRoute(): void {
    this.router.navigate(['/welcome']).then();
  }
}
