import { Component, OnInit } from '@angular/core';
import { SensorCo2Service } from 'src/app/services/sensor-co2.service';

@Component({
  selector: 'app-measurements-viewer',
  templateUrl: './measurements-viewer.component.html',
  styleUrls: ['./measurements-viewer.component.scss'],
})
export class MeasurementsViewerComponent implements OnInit {
  public measurements = [];
  constructor(private sensorCo2Service: SensorCo2Service) {}

  ngOnInit(): void {
    this.sensorCo2Service.getMeasurements().subscribe((val) => {
      val.forEach((mData: any) => {
        this.measurements.push({
          id: mData.payload.doc.id,
          data: mData.payload.doc.data(),
        });
      });
      this.measurements.sort(
        (a, b) =>
          new Date(b.data.timestamp).getTime() -
          new Date(a.data.timestamp).getTime()
      );
    });
  }
}
