import {Optional} from "@angular/core";
import {INotificationsService} from "../interfaces";
import {ActiveToast} from "ngx-toastr/toastr/toastr.service";
import {IndividualConfig} from "ngx-toastr/toastr/toastr-config";

export class NotificationsService implements INotificationsService{
  constructor(@Optional() private notificationsProvider: INotificationsService) {
  }

  clear(toastId?: number): void {
    this.notificationsProvider?.clear(toastId);
  }

  error(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any> {
    return this.notificationsProvider?.error(message, title, override);
  }

  findDuplicate(title: string, message: string, resetOnDuplicate: boolean, countDuplicates: boolean): ActiveToast<any> {
    return this.notificationsProvider?.findDuplicate(title, message, resetOnDuplicate, countDuplicates);
  }

  info(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any> {
    return this.notificationsProvider?.info(message, title, override);
  }

  remove(toastId: number): boolean {
    return this.notificationsProvider?.remove(toastId);
  }

  show(message?: string, title?: string, override?: Partial<IndividualConfig>, type?: string): ActiveToast<any> {
    return this.notificationsProvider?.show(message, title, override, type);
  }

  success(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any> {
    return this.notificationsProvider?.success(message, title, override);
  }

  warning(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any> {
    return this.notificationsProvider?.warning(message, title, override);
  }
}
