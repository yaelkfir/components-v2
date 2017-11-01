import {ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],

})
export class PosterComponent implements OnInit {
  className: string;
  n: any;
  imgUrl: string;

  @Input('n')
  set setN(value) {

if (value) {
    this.n = value;
    console.log(value, 'value');
    this.imgUrl = `http://image.tmdb.org/t/p/w300${this.n.poster_path}`
    }
  }
  constructor() { }

  ngOnInit() {

    // console.log(this.n, 'n');
  }


    // if (event.index.currentValue || event.index.currentValue === 0) {
    //   this.index = event.index.currentValue;
    //   console.log(this.index, 'index');
    // }



}
