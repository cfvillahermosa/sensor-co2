import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsTableComponent } from './measurements-table.component';

describe('MeasurementsTableComponent', () => {
  let component: MeasurementsTableComponent;
  let fixture: ComponentFixture<MeasurementsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
