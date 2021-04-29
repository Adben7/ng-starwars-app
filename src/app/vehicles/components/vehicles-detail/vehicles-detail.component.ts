import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IVehicle } from '../../models/vehicle';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrls: ['./vehicles-detail.component.scss']
})
export class VehiclesDetailComponent implements OnInit {

  vehicleId = +this.route.snapshot.paramMap.get('id');
  vehicle$: Observable<IVehicle> = this.vehiclesService.getVehicle(this.vehicleId);
  pageTitle = "Vehicle details";

  constructor(private vehiclesService: VehiclesService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {}

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }
}
