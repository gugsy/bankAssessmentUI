import { TestBed } from '@angular/core/testing';

import { BankTransactionsService } from './bank-transactions.service';

describe('BankTransactionsService', () => {
  let service: BankTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
