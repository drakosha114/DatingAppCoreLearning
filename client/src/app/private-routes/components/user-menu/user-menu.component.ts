import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {IUserProfile} from "../../../services/interfaces";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent implements OnInit {

  @Input()
  user: IUserProfile | null | undefined;

  @Output()
  logOut: EventEmitter<never> = new EventEmitter<never>();

  get userName(): string {
    return this.user?.name || 'User';
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logoutClickHandler(): void {
    this.logOut.emit();
  }

  public profileClickHandler(): void {
    this.navigateToUserProfile();
  }

  private navigateToUserProfile(): void {
    this.router.navigate(['/profile']).then()
  }

}
