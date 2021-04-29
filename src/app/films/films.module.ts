import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmsDetailComponent } from './components/films-detail/films-detail.component';

@NgModule({
  declarations: [
    FilmsListComponent,
    FilmsDetailComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
  ]
})
export class FilmsModule { }
