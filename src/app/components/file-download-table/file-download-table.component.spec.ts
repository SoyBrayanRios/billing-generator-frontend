import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDownloadTableComponent } from './file-download-table.component';

describe('FileDownloadTableComponent', () => {
  let component: FileDownloadTableComponent;
  let fixture: ComponentFixture<FileDownloadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDownloadTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDownloadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
