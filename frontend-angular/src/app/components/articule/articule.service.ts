import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Articule } from 'src/app/class/articule';

@Injectable({
  providedIn: 'root'
})
export class ArticuleService {
  private apiURL = "http://localhost:8000/api/articules";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Articule[]> {
   return this.httpClient.get<Articule[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(articule): Observable<Articule> {
   return this.httpClient.post<Articule>(`${this.apiURL}/create`, JSON.stringify(articule), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Articule> {
   return this.httpClient.get<Articule>(`${this.apiURL}/edit/${id}`)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, articule): Observable<Articule> {
   return this.httpClient.put<Articule>(`${this.apiURL}/update/${id}`, JSON.stringify(articule), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Articule>(`${this.apiURL}/delete/${id}`, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
