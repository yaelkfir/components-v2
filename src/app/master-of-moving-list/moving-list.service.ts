import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Api} from "../service/api.service";

@Injectable()

export class MovingListService {

  constructor(private api: Api) {
  }
  getMovies(q) {
    return this.api.getMovies(q);
  }

  getGenres() {
    return this.api.getGenres();
    /*
    .map((a) => {
      return {res: a , name: 'genres' }
    });
     */
  }

  getActors() {
    return this.api.getActors();
  }

  discoverMovie(id: number, popularity: string, type?: string) {
    const filter = `language=en-US&sort_by=${popularity}`;
    const filterType = type === 'genre' ? `&with_genres=${id}` : `&with_people=${id}`;

    return this.api.discovorMovie(`${filter}${filterType}`);
  }
}
