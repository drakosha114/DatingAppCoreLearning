import {RouterGuardsEnum} from "../../../types";
import {IGuardCheck, IGuardCheckHandler} from "../../../interfaces";
import {CanActivate, CanActivateChild, CanLoad} from "@angular/router";
import {CanActivateClass} from "./can-activate";
import {CanActivateChildClass} from "./can-activate-child";
import {CanLoadClass} from "./can-load";

export function guardsFactory(guardType: RouterGuardsEnum, guardCheckProvider: IGuardCheck, guardCheckHandlerProvider?: IGuardCheckHandler): CanActivate | CanActivateChild | CanLoad {
  switch (guardType) {
    case RouterGuardsEnum.CanActivate: {
      return new CanActivateClass(guardCheckProvider, guardCheckHandlerProvider);
    }
    case RouterGuardsEnum.CanActivateChild: {
      return new CanActivateChildClass(guardCheckProvider, guardCheckHandlerProvider);
    }
    case RouterGuardsEnum.CanLoad: {
      return new CanLoadClass(guardCheckProvider, guardCheckHandlerProvider)
    }
    default: {
      throw new Error(`Unsupported guard type: ${guardType}`);
    }
  }
}
