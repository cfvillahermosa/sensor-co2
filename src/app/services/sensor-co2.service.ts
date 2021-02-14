import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SensorCo2Service {
  constructor(private firestore: AngularFirestore) {}
  private db = '/dispositivos/sensor_co2_21850242/mediciones';
  public getMeasurements() {
    return this.firestore.collection(this.db).snapshotChanges();
  }
}
