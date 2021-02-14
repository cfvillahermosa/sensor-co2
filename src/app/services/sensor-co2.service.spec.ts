import { TestBed } from '@angular/core/testing';

import { SensorCo2Service } from './sensor-co2.service';

describe('SensorCo2Service', () => {
  let service: SensorCo2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorCo2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
