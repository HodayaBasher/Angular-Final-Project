import { TestBed } from '@angular/core/testing';

import { BankAccountHandlingService } from './bank-account-handling.service';

describe('BankAccountHandlingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankAccountHandlingService = TestBed.get(BankAccountHandlingService);
    expect(service).toBeTruthy();
  });
});
