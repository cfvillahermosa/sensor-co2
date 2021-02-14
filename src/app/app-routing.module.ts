import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementsViewerComponent } from './pages/measurements/components/measurements-viewer/measurements-viewer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'measurements',
    pathMatch: 'full',
  },
  { path: 'measurements', component: MeasurementsViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
