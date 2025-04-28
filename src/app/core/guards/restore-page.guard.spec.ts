import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { restorePageGuard } from './restore-page.guard';

describe('restorePageGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => restorePageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
