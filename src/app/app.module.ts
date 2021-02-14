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
@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    TableModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
