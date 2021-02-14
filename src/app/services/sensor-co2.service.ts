import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SensorCo2Service {
  constructor(private firestore: AngularFirestore) {}
  private db = '/dispositivos/sensor_co2_21850242/mediciones';
  public getMeasurements() {
    return this.firestore
      .collection(this.db)
      .snapshotChanges()
      .pipe(
        map((val) => {
          const arrMeasurementsData = [];
          val.forEach((mData: any) => {
            const data = mData.payload.doc.data();
            data.timestamp = new Date(data.timestamp * 1000);
            arrMeasurementsData.push(data);
          });
          return arrMeasurementsData;
        })
      );
  }
}
