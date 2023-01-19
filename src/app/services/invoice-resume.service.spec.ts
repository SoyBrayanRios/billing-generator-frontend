import { TestBed } from '@angular/core/testing';

import { InvoiceResumeService } from './invoice-resume.service';

describe('InvoiceResumeService', () => {
  let service: InvoiceResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
