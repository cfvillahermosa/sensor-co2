import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinValuesComponent } from './max-min-values.component';

describe('MaxMinValuesComponent', () => {
  let component: MaxMinValuesComponent;
  let fixture: ComponentFixture<MaxMinValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxMinValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxMinValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
