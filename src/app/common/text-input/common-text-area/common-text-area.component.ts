import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-common-text-area',
  templateUrl: './common-text-area.component.html',
  styleUrls: ['./common-text-area.component.css'],
})
export class CommonTextAreaComponent implements OnInit {

  @Input() label?: string;
  @Input() debounceTimer?: number;
  @Input() validate?: boolean;
  @Input() initValue?: string;
  inputForm: FormGroup;

  @Output() strValue: EventEmitter<string> = new EventEmitter<string>();


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
  this.inputForm = this.fb.group({q: ['']});
    if (this.debounceTimer) {
      this.inputForm.valueChanges
        .debounceTime(300)
        .subscribe((str) => {
          this.strValue.emit(str);
        })
    } else {
      this.inputForm.valueChanges
        .subscribe((str) => {
          this.strValue.emit(str);
        })
    }

  }
}
