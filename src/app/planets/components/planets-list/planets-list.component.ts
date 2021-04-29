import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPlanet } from '../../models/planet';
import { PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planets$: Observable<IPlanet[]> = this.planetsService.getPlanets();
  pageTitle = "Planets";

  constructor(private planetsService: PlanetsService,private router: Router) { }

  ngOnInit(): void { }

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }

}

