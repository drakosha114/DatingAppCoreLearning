import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAccountApi} from "../interfaces/i-account-api";
import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../../services/interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class AccountApiService implements IAccountApi{

  constructor(private httpClient: HttpClient) { }

  login(data: ILoginPayload): Observable<IAccountResponse> {
    return <Observable<IAccountResponse>>this.httpClient.post('https://localhost:44310/api/account/login', data);
  }

  register(data: IRegisterPayload): Observable<IAccountResponse> {
    return <Observable<IAccountResponse>>this.httpClient.post('https://localhost:44310/api/account/register', data);
  }

}
