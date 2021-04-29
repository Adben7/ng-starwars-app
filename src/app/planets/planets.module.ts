import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';

import { PlanetsDetailComponent } from './components/planets-detail/planets-detail.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';


@NgModule({
  declarations: [PlanetsListComponent, PlanetsDetailComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
