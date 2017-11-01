import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

export interface Filter {
  method: String,
  library: String
  offset?: number,
}

export interface MovieFilter extends Filter {
  query?: String,
}

@Injectable()

export class Api {

  key = '8670e251a142060248918513c31bfb34';
  movieUrl = `https://api.themoviedb.org/3`;
  imgUrl = 'http://image.tmdb.org/t/p/w300';

  constructor(private http: Http) {
  }


  getMovies(title) {
    return this.http.get(`${this.movieUrl}/search/movie?api_key=${this.key}&query=${title}`)
      .map((response) => {
        return response.json();
      })
  }

  discovorMovie(filters) {
    return this.http.get(`${this.movieUrl}/discover/movie?api_key=${this.key}&${filters}`)
      .map((response) => {
        return response.json();
      })
  }

  getGenres() {
    return this.http.get(`${this.movieUrl}/genre/movie/list?api_key=${this.key}&language=en-US`)
      .map((response) => {
        return response.json();
      })
  }

  getActors() {
    return this.http.get(`${this.movieUrl}/person/popular?api_key=${this.key}&language=en-US&page=120vw`)
      .map((response) => {
        return response.json();
      })
  }

  getMovieById(id) {
    return this.http.get(`${this.movieUrl}/movie/${id}?api_key=${this.key}`)
      .map(response => response.json())
  }

  getMovieCradit(id) {
    return this.http.get(`${this.movieUrl}/movie/${id}/credits?api_key=${this.key}`)
      .map(response => response.json())
  }

  getGenre() {
    return this.http.get(`${this.movieUrl}/genre/movie/list?api_key=${this.key}`)
      .map(response => response.json())
  }
}
