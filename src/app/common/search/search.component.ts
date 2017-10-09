import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import 'rxjs/Rx';
import {Api} from '../../service/api.service';
import {MovieModel} from '../models/movieModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  @Input() mode;
  @Input() parent: FormGroup;
  @Output() searchData: EventEmitter<any> = new EventEmitter<any>();

  public searchF: FormGroup;
  public resData: Array<MovieModel>;
  private query: string;
  private resCount: number;

  constructor(private _fb: FormBuilder,
              private _searchService: Api) {
  }


  ngOnInit() {

    if (!this.parent) {
      this.parent = this._fb.group({});
    }
    this.searchF = this._fb.group({
      query: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.parent.controls['search'] = this.searchF;
    this.subToForm();
  }

  subToForm() {
    this.searchF.valueChanges
      .debounceTime(500)
      .subscribe((formValue) => {
        this.query = formValue.query;
        formValue.query ? this.handelRes() : this.removeRes();
      })
  }

  removeRes() {
    this.resData = [];
    this.searchData.emit([]);
  }

  handelRes() {

    const sub = this.getRes().map((data) => {
      const tempRes = data.map((temp) => this.newMovie(temp));
      this.resData = [tempRes, ...this.resData];
      return tempRes;
    });

    sub.subscribe((data) => {
      this.resData = data;
      this.resCount = data.length;

      if (this.resCount < 20) {
        console.info('more');
      }
    })
  }



  getRes() {
    return this._searchService.getMovies(this.query).map((data) => {
      return data['results'].filter(res => {
        if (res['genre_ids'].length > 0) {
          return res
        }
      });
    })
  }


  newMovie(res) {
    const temp = new MovieModel(res.id);
    temp.newMovie(res);
    return temp;
  }
}
