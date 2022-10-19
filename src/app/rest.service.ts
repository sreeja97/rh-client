import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "../environments/environment";

const endpoint = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getVideos(): Observable<any> {
    return this.http.get<Video>(endpoint + 'videos').pipe(
      catchError(this.handleError)
    );
  }
}

export interface Video {
  _id: string;
  uploaded_at: Date;
  uploaded_by: string;
  description: string;
  title: string;
}
