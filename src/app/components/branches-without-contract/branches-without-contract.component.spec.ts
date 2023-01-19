import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesWithoutContractComponent } from './branches-without-contract.component';

describe('BranchesWithoutContractComponent', () => {
  let component: BranchesWithoutContractComponent;
  let fixture: ComponentFixture<BranchesWithoutContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesWithoutContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchesWithoutContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
