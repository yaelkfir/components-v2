import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-full-name-inputs',
  templateUrl: './master-get-component.html',
  styleUrls: ['./master-get-component.css']
})
export class MasterGetComponent implements OnInit {

  constructor() {}

  ngOnInit() {


  }
}

/*

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

