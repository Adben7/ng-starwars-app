import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IFilm } from '../../models/film';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.scss']
})
export class FilmsDetailComponent implements OnInit {

  filmId = +this.route.snapshot.paramMap.get('id');
  film$: Observable<IFilm> = this.filmService.getFilm(this.filmId);
  pageTitle = "Film details";

  constructor(private filmService: FilmsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {}

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }
}
