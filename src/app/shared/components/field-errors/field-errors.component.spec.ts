import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorsComponent } from './field-errors.component';
import { FormGroup, FormControl } from '@angular/forms';

describe('FieldErrorsComponent', () => {
    let fixture: ComponentFixture<FieldErrorsComponent>;
    let component: FieldErrorsComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FieldErrorsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldErrorsComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.nativeElement.remove();
    });

    it('should create', () => {
        component.formGroupRef = new FormGroup({
            fake: new FormControl('')
        });
        component.fieldName = 'fake';
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
