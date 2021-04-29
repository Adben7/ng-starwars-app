import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { baseURL } from '../../shared/baseURL';
import { IFilm } from   '../models/film';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http : HttpClient) {}

  getFilms() : Observable<IFilm[]>{
      return this.http.get<any>(`${baseURL}/films`)
      .pipe(
        map(films => films.results),
        catchError(this.handleError ));
  }

  getFilm(id: number) : Observable<IFilm>{
    return this.http.get<IFilm>(`${baseURL}/films/${id}`)
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
