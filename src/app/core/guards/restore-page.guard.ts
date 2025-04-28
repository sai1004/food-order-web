import { CanDeactivateFn } from '@angular/router';

export const restorePageGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
