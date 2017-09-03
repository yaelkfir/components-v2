import {Component, Input, OnInit, Output} from '@angular/core';
import {KeyModel} from '../keyModel';
import {MovieModel} from '../../models/movieModel';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchService} from '../../../service/movie.service';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  @Input() key: KeyModel;
  @Input() obj: MovieModel;
  @Output() newData;
  edit = false;
  backgroundImage: string;

  public editor: FormGroup;

  constructor(private _fb: FormBuilder,
              private _api: SearchService) {
  }

  ngOnInit() {
    if (this.key) {
      this.keyToControl();
    }
  }

  keyToControl() {
    if (!this.key.keyClass) {
      this.key['keyClass'] = 'none';
    }
    if (this.key['input']) {
        this.editor = this._fb.group({
          value: [`${this.obj[this.key.keyName]}`]
        });
    }
    if (!this.key['input']) {
      this.editor = this._fb.group({
        value: [`${this.obj[this.key.keyName]}`]
      });
    }
  }

  // getClick(key, obj) {
  //   console.info(key, obj);
  //   // this.target = this.data.find((temp) => temp.id === obj.id);
  // }

  getMyData(key, movie) {
    if (movie[`${key.keyName}`] === true) {
      return 'yes'
    } else if (movie[`${key.keyName}`] === false) {
      return 'no'
    } else if (this.key.keyClass.includes('img') && movie[`${key.keyName}`] !== null) {
      return `${this._api.imgUrl}${movie[`${key.keyName}`]}`
    } else if (movie[`${key.keyName}`] === null) {
      return '';
    } else {
      return movie[`${key.keyName}`];
    }
  }

  log() {
    if (!this.edit) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }
}
