import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-from-card',
  templateUrl: './from-card.component.html',
  styleUrls: ['./from-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromCardComponent implements OnInit {

  @Output() cardTitle: EventEmitter<string> = new EventEmitter<string>();
  @Input() validate: boolean;

  constructor() { }

  ngOnInit() {

  }

  onFormChange(event) {
    this.cardTitle.emit(event['q']);
  }

}
