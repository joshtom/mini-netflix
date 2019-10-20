import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies;
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    // Setting the items using the movieServices getMovie()
    this.movies = this.movieService.getMovie()
  }

}
