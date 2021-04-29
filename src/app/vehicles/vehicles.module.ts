import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';

import { VehiclesDetailComponent } from './components/vehicles-detail/vehicles-detail.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';


@NgModule({
  declarations: [
    VehiclesDetailComponent,
    VehiclesListComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
