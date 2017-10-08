import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-common-text-input',
  templateUrl: './common-text-input.component.html',
  styleUrls: ['./common-text-input.component.css']
})
export class CommonTextInputComponent implements OnInit {

  @Input() label: string;
  inputForm: FormGroup;
  q = '';
  @Output() strValue: EventEmitter<string> = new EventEmitter<string>();


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {

    this.inputForm = this.fb.group({q: ''});

    this.inputForm.valueChanges.subscribe((str) => {
      this.q = str;
      this.strValue.emit(this.q);
    })
  }
}
