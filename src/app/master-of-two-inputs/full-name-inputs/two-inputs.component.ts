import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-full-name-inputs',
  templateUrl: './two-inputs.component.html',
  styleUrls: ['./two-inputs.component.css']
})
export class FullNameInputsComponent implements OnInit {

  twoInputsValue = 'HEY';

  private inputOne$ = new BehaviorSubject({q: ''});
  private inputTwo$ = new BehaviorSubject({q: ''});

  manyInputsArr = ['first name', 'family name', 'input c', 'input d', 'input e', 'input f', 'input g'];
  manyInputsObj = {};
  manyInputsValue = '';

  constructor() {}

  ngOnInit() {
    this.buildManyInputs();
    this.merageInputs();
  }

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
}



