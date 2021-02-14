import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasurementsViewerComponent } from './pages/measurements/components/measurements-viewer/measurements-viewer.component';

@NgModule({
  declarations: [AppComponent, MeasurementsViewerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
