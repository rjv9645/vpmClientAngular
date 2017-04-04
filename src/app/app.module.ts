import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ng2-bootstrap'

import { AppComponent }  from './app.component';
import { LocationComponent } from './components/location.component';
import { LocationService } from './services/location.service';
import { MaintenanceService } from './services/maintenance.service';
import { MaintenanceComponent } from './components/maintenance.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, 
      CarouselModule, FormsModule,
      RouterModule.forRoot([
      {
        path: 'maintenance',
        component: MaintenanceComponent
      }])
      ],
  declarations: [ AppComponent, LocationComponent, MaintenanceComponent ],
  bootstrap:    [ AppComponent, LocationComponent],
  providers: [LocationService,MaintenanceService]
})
export class AppModule { }
