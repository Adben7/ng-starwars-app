import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPlanet } from '../../models/planet';
import { PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.scss']
})
export class PlanetsDetailComponent implements OnInit {

  planetId = +this.route.snapshot.paramMap.get('id');
  planet$: Observable<IPlanet> = this.planetService.getPlanet(this.planetId);
  pageTitle = "Planet details";

  constructor(private planetService: PlanetsService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {}

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }
}