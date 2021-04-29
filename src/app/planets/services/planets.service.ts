import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { baseURL } from 'src/app/shared/baseURL';
import { IPlanet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<IPlanet[]> {
    return this.http
      .get<any>(`${baseURL}/planets`)
      .pipe(
        map(p => p.results),
        catchError(err => throwError(err))
      );
  }

  getPlanet(id: number): Observable<IPlanet> {
    return this.http
      .get<IPlanet>(`${baseURL}/planets/${id}`)
      .pipe(catchError(err => throwError(err)));
  }


  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `An error occurred: ${err.error.message}`;
    } else {
     // server-side error
     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
