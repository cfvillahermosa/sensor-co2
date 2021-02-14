import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/containers/dashboard/dashboard.component';
import { MeasurementsTableComponent } from './pages/dashboard/components/measurements-table/measurements-table.component';
import { DoughnutChartComponent } from './pages/dashboard/components/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './pages/dashboard/components/line-chart/line-chart.component';
import { MaxMinValuesComponent } from './pages/dashboard/components/max-min-values/max-min-values.component';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MeasurementsTableComponent,
    DoughnutChartComponent,
    LineChartComponent,
    MaxMinValuesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    TableModule,
    BrowserAnimationsModule,
    ChartModule,
    CardModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
