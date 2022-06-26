import { TestBed } from '@angular/core/testing';

import { HandlingAllBankAccountsService } from './handling-all-bank-accounts.service';

describe('HandlingAllBankAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandlingAllBankAccountsService = TestBed.get(HandlingAllBankAccountsService);
    expect(service).toBeTruthy();
  });
});
