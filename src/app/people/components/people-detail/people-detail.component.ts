import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPeople } from '../../models/people';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  peopleId = +this.route.snapshot.paramMap.get('id');
  people$: Observable<IPeople> = this.peopleService.getPeople(this.peopleId);
  pageTitle = "People details";

  constructor(private peopleService: PeopleService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {}

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }
}
