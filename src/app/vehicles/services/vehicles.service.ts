import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { baseURL } from '../../shared/baseURL';
import { IVehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

constructor(private http : HttpClient) {}

  getVehicles() : Observable<IVehicle[]>{
      return this.http.get<any>(`${baseURL}/vehicles`)
      .pipe(
        map(vehicles => vehicles.results),
        catchError(this.handleError ));
  }

  getVehicle(id: number) : Observable<IVehicle>{
    return this.http.get<IVehicle>(`${baseURL}/vehicles/${id}`)
    .pipe( catchError(this.handleError ));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
     errorMessage = `An error occurred: ${err.error.message}`;
    }
    else {
     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}