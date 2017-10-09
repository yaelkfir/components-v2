import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Api} from '../../service/api.service';

@Component({
  selector: 'app-full-name-inputs',
  templateUrl: './master-get-component.html',
  styleUrls: ['./master-get-component.css']
})
export class MasterGetComponent implements OnInit {

  getlist = ['Space', 'Earth', 'Sun', 'moon', 'Saturn', 'Mars', 'Neptune', 'star'];
  results = [];

  isDone = false;
  constructor(private api: Api) {
  }
  ngOnInit() {
    this.forkJoinGet();
  }
  forkJoinGet() {
    const observableArr = [];
    this.getlist.forEach((q) => {
      console.log('push to forkJoin Observable');
      observableArr.push(this.api.getMovies(q));
    });

    Observable.forkJoin(observableArr).subscribe((data) => {
      data.map(m => this.results = [...m['results'], ...this.results]);
      console.log(this.results, 'results works!');
      this.isDone = true;
    })
  }
}

/*

const example = Rx.Observable
  .zip(
    sourceOne,
    sourceTwo.delay(1000),
    sourceThree.delay(2000),
    sourceFour.delay(3000)
  );
//output: ["Hello", "World!", "Goodbye", "World!"]
const subscribe = example.subscribe(val => console.log(val));


 buildManyInputs() {
    this.manyInputsArr.forEach(str => this.manyInputsObj[str] = '');
  }

  handelInputs(event, input: string) {
    if (input === 'one') {
      this.inputOne$.next(event);
    } else if (input === 'two') {
      this.inputTwo$.next(event);
    } else {
      this.freeStyleInputs(event['q'], input)
    }
  }

  merageInputs() {
    this.inputOne$.mergeMap((value) => {
      return this.inputTwo$.map((value2) => {
        return `${value['q']} ${value2['q']}`
      })
    }).subscribe((data) => {
      this.twoInputsValue = data;
    })
  }

  freeStyleInputs(event, i: string) {
    this.manyInputsObj[i] = event;
    let value = '';
    for (const k in this.manyInputsObj) {
      if (this.manyInputsObj.hasOwnProperty(k)) {
        value = `${value} ${this.manyInputsObj[k]}`
      }
    }
    this.manyInputsValue = value;
  }

 */

