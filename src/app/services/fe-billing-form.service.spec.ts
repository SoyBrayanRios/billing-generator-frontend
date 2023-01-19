import { TestBed } from '@angular/core/testing';

import { FeBillingFormService } from './fe-billing-form.service';

describe('FeBillingFormService', () => {
  let service: FeBillingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeBillingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
