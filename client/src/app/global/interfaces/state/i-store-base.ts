import {Observable} from "rxjs";
import { IEntityBase } from './i-entity-base'

export interface IStoreBase<T> {
  readonly getState: Observable<IEntityBase<T>>;
}
