import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserRegistrationComponent } from './page-user-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('PageUserRegistrationComponent', () => {
    let component: PageUserRegistrationComponent;
    let fixture: ComponentFixture<PageUserRegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule
            ],
            declarations: [PageUserRegistrationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageUserRegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
