import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserLogoutComponent } from './page-user-logout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageUserLogoutComponent', () => {
    let fixture: ComponentFixture<PageUserLogoutComponent>;
    let component: PageUserLogoutComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [PageUserLogoutComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageUserLogoutComponent);
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
