import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportPanelComponent } from './import-export-panel.component';

describe('ImportExportPanelComponent', () => {
  let component: ImportExportPanelComponent;
  let fixture: ComponentFixture<ImportExportPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportExportPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportExportPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
