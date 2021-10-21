import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {

  constructor(private router: Router) { }

  public registerClickHandler(): void {
    this.navigateToScreen('account/register');
  }

  public signInClickHandler(): void {
    this.navigateToScreen('account/login');
  }

  private navigateToScreen(screen: string): void {
    this.router.navigate([screen]).then();
  }
}
