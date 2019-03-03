import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorsComponent } from './field-errors.component';
import { FormGroup, FormControl } from '@angular/forms';

describe('FieldErrorsComponent', () => {
  let component: FieldErrorsComponent;
  let fixture: ComponentFixture<FieldErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldErrorsComponent);
    component = fixture.componentInstance;
    component.formGroupRef = new FormGroup({
      fake: new FormControl('')
    });
    component.fieldName = 'fake';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
