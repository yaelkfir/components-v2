import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../../common/models/movieModel';
import {KeyModel} from '../../common/table-v1/keyModel';
import {SearchService} from '../../service/movie.service';
import {MasterTableService} from "app/costume-masters/master-table/master-table.service";

@Component({
  selector: 'app-master-table',
  templateUrl: './master-table.component.html',
  styleUrls: ['./master-table.component.css']
})
export class MasterTableComponent implements OnInit {
  keys: KeyModel[] = [];
  resMovie: MovieModel[];

  constructor(
    private _searchService: SearchService,
    private _TableService: MasterTableService
  ) {
  }

  ngOnInit() {
    this.crateTableKeys();
    this.getRes('space');
    this._TableService.logThis();

  }
  crateTableKeys() {

    // use empty model to create table th

    const tempMovie = new MovieModel(0);
    tempMovie.newMovie({});
    const keys = Object.keys(tempMovie);
    // keys.forEach((key) => this.convertToKey(key));
    this.keys = this._TableService.handelKeys(keys);
  }


  getRes(query: string | null) {
    this._searchService.getMovies(query).subscribe((data) => {
      this.resMovie = data.results.map(res => this.newMovie(res));
    });
  }

  newMovie(res) {
    const test = new MovieModel(res.id);
    return test.newMovie(res);
  }

}

