import {Component, OnInit} from '@angular/core';
import {Observable, of, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'The Dating Application';
  public users$: Subject<any[]> = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
   this.getUsers();
  }

  private getUsers() {
    return this.httpClient.get('https://localhost:44310/api/users').subscribe((resp) => {
      this.users$.next(resp as any[]);
    }, (e) => {
      console.log(e);
    })
  }

}
