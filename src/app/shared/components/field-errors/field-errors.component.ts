import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldErrorsComponent implements OnInit {

  @Input() formGroupRef: FormGroup = null;
  @Input() fieldName: string = null;

  get field() {
    return this.formGroupRef.get(this.fieldName);
  }

  constructor() { }

  ngOnInit() {
  }

}
