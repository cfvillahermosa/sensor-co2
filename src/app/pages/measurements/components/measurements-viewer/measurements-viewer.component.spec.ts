import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsViewerComponent } from './measurements-viewer.component';

describe('MeasurementsViewerComponent', () => {
  let component: MeasurementsViewerComponent;
  let fixture: ComponentFixture<MeasurementsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementsViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
