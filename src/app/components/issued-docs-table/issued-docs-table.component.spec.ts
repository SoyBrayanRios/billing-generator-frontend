import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedDocsTableComponent } from './issued-docs-table.component';

describe('IssuedDocsTableComponent', () => {
  let component: IssuedDocsTableComponent;
  let fixture: ComponentFixture<IssuedDocsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedDocsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuedDocsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
