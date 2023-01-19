import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredInvoicesComponent } from './required-invoices.component';

describe('RequiredInvoicesComponent', () => {
  let component: RequiredInvoicesComponent;
  let fixture: ComponentFixture<RequiredInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
