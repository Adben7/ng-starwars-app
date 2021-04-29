import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsDetailComponent } from './components/planets-detail/planets-detail.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

const routes: Routes = [
  { path: 'planets', component: PlanetsListComponent },
  { path: 'planets/:id', component: PlanetsDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
