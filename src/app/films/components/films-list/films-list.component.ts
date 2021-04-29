import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IFilm } from '../../models/film';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  films$: Observable<IFilm[]> = this.filmService.getFilms();
  pageTitle = "Films";

  constructor(private filmService: FilmsService,private router: Router) { }

  ngOnInit(): void {}

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
}

}
