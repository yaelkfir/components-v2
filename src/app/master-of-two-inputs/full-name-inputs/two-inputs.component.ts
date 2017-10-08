import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-full-name-inputs',
  templateUrl: './two-inputs.component.html',
  styleUrls: ['./two-inputs.component.css']
})
export class FullNameInputsComponent implements OnInit {

  twoInputsValue = 'HEY';

  private inputOne$ = new BehaviorSubject({q: ''});
  private inputTwo$ = new BehaviorSubject({q: ''});


  constructor() {
  }

  ngOnInit() {
    this.inputOne$.mergeMap((value) => {
      return this.inputTwo$.map( (value2) => {
        return `${value['q']} ${value2['q']}`
      })
    }).subscribe((data) => {
      this.twoInputsValue = data;
    })
  }

  handelInputs(event, input: string) {
    console.log(event, 'yay!');
    if (input === 'one') {
      this.inputOne$.next(event);
    } else {
      this.inputTwo$.next(event);
    }
  }

}
