import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { baseURL } from '../../shared/baseURL';
import { IPeople } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http : HttpClient) {}

  getPeoples() : Observable<IPeople[]>{
      return this.http.get<any>(`${baseURL}/people`)
      .pipe(
        map(people => people.results),
        catchError(this.handleError ));
  }

  getPeople(id: number) : Observable<IPeople>{
    return this.http.get<IPeople>(`${baseURL}/people/${id}`)
    .pipe( catchError(this.handleError ));
}


  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
     errorMessage = `An error occurred: ${err.error.message}`;
    } else {
     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }




}