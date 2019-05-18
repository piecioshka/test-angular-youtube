import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PageUserRegistrationComponent } from './page-user-registration.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PageUserRegistrationComponent', () => {
    let fixture: ComponentFixture<PageUserRegistrationComponent>;
    let component: PageUserRegistrationComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule,
                SharedModule
            ],
            declarations: [PageUserRegistrationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageUserRegistrationComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.nativeElement.remove();
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
