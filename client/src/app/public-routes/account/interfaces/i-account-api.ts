import {Observable} from "rxjs";
import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../../services/interfaces";

export interface IAccountApi {
  login(data: ILoginPayload): Observable<IAccountResponse>;
  register(data: IRegisterPayload): Observable<IAccountResponse>;
}
