import {IAccountStore} from "../../interfaces";
import {AccountStoreService} from "./account-store.service";
import {InjectionToken} from "@angular/core";

export function accountStoreFactory(store: Storage): IAccountStore {
  return new AccountStoreService(store);
}

export const ACCOUNT_STORE_TOKEN = new InjectionToken<IAccountStore>('ACCOUNT_STORAGE');
