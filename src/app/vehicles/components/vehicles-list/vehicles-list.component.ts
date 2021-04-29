import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IVehicle } from '../../models/vehicle';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  vehicles$: Observable<IVehicle[]> = this.vehiclesService.getVehicles();
  pageTitle = "Vehicles";

  constructor(private vehiclesService: VehiclesService, private router: Router) { }

  ngOnInit(): void {}

 goToDetail(url: string){
  let urlTab = url.split('/');
  let id = urlTab[5];
  let resource = urlTab[4];
  this.router.navigate([`${resource}/${id}`]);
}

}
