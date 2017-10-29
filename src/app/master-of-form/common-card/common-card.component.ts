import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonCardComponent implements OnInit {

  @Input() cardAuthor: string;
  @Input() cardTitle: string;

  constructor() { }

  ngOnInit() {

  }


}

