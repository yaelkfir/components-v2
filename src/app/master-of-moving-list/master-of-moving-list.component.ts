import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MovingListService} from "./moving-list.service";
import {Observable} from "rxjs/Observable";
import {log} from "util";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-master-of-moving-list',
  templateUrl: './master-of-moving-list.component.html',
  styleUrls: ['./master-of-moving-list.component.scss']

})
export class MasterOfMovingListComponent implements OnInit {

  movieList = [];
  shadowList = [];
  nextList = [];

  callStock: any[][] = [];
  genres = [];
  actors = [];

  popular = 'popularity.desc'; // sort_by=popularity.asc;

  type = 'actor';

  constructor(private service: MovingListService) {
  }

  ngOnInit() {
    const observe = Observable.onErrorResumeNext(this.service.getActors(), this.service.getGenres())
      .subscribe(
        (data) => {
          if (data['genres']) {
            this.genres = data['genres'];
          } else {
            this.actors = data['results'];
          }
        },
        (err) => {
          console.log(err, 'eree?');
        },
        () => {
          console.log('complete');
          this.genres = this.shuffle(this.genres);
          this.actors = this.shuffle(this.actors);
          this.callStock = this.mergeToStock(this.actors, this.genres);
          console.log(this.callStock, 'callStock');

          this.callMovies();
            observe.unsubscribe();
        }
      );
  }

  discover(id, type?: string) {
    this.service.discoverMovie(id, this.popular, type).subscribe(
      (data) => {

        this.shadowList = [...this.shadowList, ...data['results'].slice(0, 3)];
        console.log(this.shadowList, 'shadowList');
        console.log(this.callStock, 'callStock');

        if ( this.callStock[0].length) {
          this.callStock[0].shift();
        } if(!this.callStock[0].length) {
          this.callStock.shift();
        }
        this.type = this.toggle('actor', 'genre', this.type);
        this.addPoster();
      },
      (err) => {
        console.log(err, 'err');
      }
    );
  }
  callMovies() {
    if (this.callStock.length > 0 && this.callStock[0].length !== 0) {
      this.discover(this.callStock[0][0].id, this.type);
    }
  }

  toggle(a, b, current) {
    return current === a ? b : a;
  }

  mergeToStock(actors: any[], genres: any[]) {
    const tempGenres = [...genres];
    const resArr = [];
    console.log(genres.length, actors.length, 'resArr');


    actors.forEach((id, i) => {
      if (i % 3 === 0) {
        resArr.push(actors.slice(i, i + 3));
        if (tempGenres.length > 0) {
          resArr.push(tempGenres.splice(0, 3));
        }
      }
    });
    if (tempGenres.length > 0) {
      resArr.push(tempGenres.slice(0, 3));
    }
    return resArr;
  }


  shuffle(arr) {
    const temp = arr.map(a => a);
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp;
  }

  addPoster() {
    const lst = this.shadowList.length - 1;
    this.callMovies();

      setTimeout(() => {
        console.log(this.callStock, 'this.callStock');
        this.movieList.unshift(this.shadowList[lst]);
        // this.shadowList.pop();


        if (this.movieList.length > 9 && this.movieList.length) {
          this.movieList.pop();
        }
        if(this.shadowList.length !== 0 && this.shadowList.length > 12) {
          this.addPoster();
        }
        // if (this.shadowList.length < 9 && this.callStock.length > 0 && this.callStock[0].length) {
        // }
        else {
          console.log('end')
        }
      }, 3000);
  }
}

// toggle movies by tags/actor
// add to shadow list in order of 3 from eche group.
// get tags and actors
