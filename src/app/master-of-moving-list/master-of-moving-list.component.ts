import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-master-of-moving-list',
  templateUrl: './master-of-moving-list.component.html',
  styleUrls: ['./master-of-moving-list.component.scss']

})
export class MasterOfMovingListComponent implements OnInit {

  movieList = [];
  sortedList = [];

  constructor() { }

  ngOnInit() {
    this.movieList.unshift(1);

    if (this.movieList) {
      this.addPoster();
    }
  }

  addPoster() {
    if (this.movieList.length <= 21 && this.movieList.length) {
      setTimeout(() => {
        this.movieList.unshift(1);
        this.addPoster();
      }, 10)
    }

    if (this.movieList.length  > 21 && this.movieList.length) {
      setTimeout(() => {
        this.movieList.unshift( this.movieList[0] + 1);
        this.movieList.pop();
        this.addPoster();
        }, 2500)
    }
    console.log(this.movieList, this.sortedList);
  }
}
