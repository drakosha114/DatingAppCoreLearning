import {Observable} from "rxjs";

export interface IAuthService {
  getAuthToken(): string | null;
  isUserLoggedIn(): Observable<boolean>;
}
