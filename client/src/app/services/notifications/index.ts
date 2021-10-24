import {InjectionToken} from "@angular/core";
import {INotificationsService} from "../interfaces";

export * from './notifications-service';

export const NOTIFICATIONS_SERVICE_TOKEN = new InjectionToken<INotificationsService>('NOTIFICATIONS_SERVICE_TOKEN')
