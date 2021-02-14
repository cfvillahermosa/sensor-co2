import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SensorCo2Service } from './../../../../services/sensor-co2.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public measurements$: Observable<any>;
  constructor(private sensorCo2Service: SensorCo2Service) {}

  ngOnInit(): void {
    this.measurements$ = this.sensorCo2Service.getMeasurements();
  }
}
