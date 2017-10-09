import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MovieModel} from '../models/movieModel';
import {KeyModel} from './keyModel';
import {Api} from '../../service/api.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() data: MovieModel[];
  // keys: Array<string>;
  @Input() keys: KeyModel[];

  target: object = {
    key: KeyModel,
    data: MovieModel
  };

  constructor(private _searchService: Api) {
  }

  ngOnInit() {
console.info(this.data, 'data');
    // this.getRes('batman');
  }
ngOnChanges(){
  console.info(this.data, 'data');

}

  // set input type for key, use it later in cell(table data) to create the form
  // if not set - cell will use generic type of to decied input.
}
