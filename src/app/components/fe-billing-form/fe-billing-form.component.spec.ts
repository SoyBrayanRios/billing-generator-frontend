import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeBillingFormComponent } from './fe-billing-form.component';

describe('FeBillingFormComponent', () => {
  let component: FeBillingFormComponent;
  let fixture: ComponentFixture<FeBillingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeBillingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeBillingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
