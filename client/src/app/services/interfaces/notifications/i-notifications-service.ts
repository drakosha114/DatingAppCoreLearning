import {IndividualConfig} from "ngx-toastr/toastr/toastr-config";
import type {ActiveToast} from "ngx-toastr/toastr/toastr.service";

export interface INotificationsService {
  show(message?: string, title?: string, override?: Partial<IndividualConfig>, type?: string): ActiveToast<any>;

  success(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;

  error(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;

  info(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;

  warning(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;

  clear(toastId?: number): void;

  remove(toastId: number): boolean;

  findDuplicate(title: string, message: string, resetOnDuplicate: boolean, countDuplicates: boolean): ActiveToast<any>;
}
