import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsDetailComponent } from './components/films-detail/films-detail.component';
import { FilmsListComponent } from './components/films-list/films-list.component';

export const routes: Routes = [
  { path: 'films',     component: FilmsListComponent   },
  { path: 'films/:id', component: FilmsDetailComponent },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
