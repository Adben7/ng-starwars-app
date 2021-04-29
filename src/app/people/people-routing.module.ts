import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

const routes: Routes = [
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:id', component: PeopleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
