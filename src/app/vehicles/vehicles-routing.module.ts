import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesDetailComponent } from './components/vehicles-detail/vehicles-detail.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';

const routes: Routes = [
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'vehicles/:id', component: VehiclesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
