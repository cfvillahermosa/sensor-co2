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
  data;
  constructor(private sensorCo2Service: SensorCo2Service) {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }

  ngOnInit(): void {
    this.measurements$ = this.sensorCo2Service.getMeasurements();
  }
}
