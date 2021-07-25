import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './private-routes-root-screen.component.html',
  styleUrls: ['./private-routes-root-screen.component.scss']
})
export class PrivateRoutesRootScreenComponent implements OnInit {

  users: any = null;
  error: any = null;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  loadUsers(): void {
    this.httpClient.get('https://localhost:44310/api/Users').subscribe((resp) => {
      this.users = resp;
    }, error => {
      this.error = error;
    })
  }
}
