import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-form',
  templateUrl: './master-form.component.html',
  styleUrls: ['./master-form.component.scss']
})
export class MasterFormComponent implements OnInit {

  cardTitle: string;
  cardAuthor = 'yael hard coded';
  validate: boolean;

  constructor() { }

  ngOnInit() {}

  updateCard(event) {
    this.handelForm(event);
  }
  handelForm(event) {
    if (event.trim().length > 0) {
      this.cardTitle = event;
      this.validate = true;
    } else {
      this.validate = false;
      this.cardTitle = 'card title';
    }
  }
}
