import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppFacadeService} from "../../services";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  templateUrl: './private-routes-root-screen.component.html',
  styleUrls: ['./private-routes-root-screen.component.scss']
})
export class PrivateRoutesRootScreenComponent implements OnInit, OnDestroy {

  // TODO: until destroy should be implemented
  private sbj$ = new Subject<boolean>();

  constructor(
    private appFacadeProvider: AppFacadeService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sbj$.next(true);
    this.sbj$.complete();
  }

  public logoutClickHandler(): void {
    this.appFacadeProvider.logout().pipe(takeUntil(this.sbj$)).subscribe(() => this.redirectToPublicRoute());
  }

  private redirectToPublicRoute(): void {
    this.router.navigate(['/welcome']).then();
  }
}
