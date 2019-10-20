import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = [];


  getMovie() {
    return this.http.get('/assets/movies.json');
  }
  constructor(
    private http: HttpClient
  ) { }
}
