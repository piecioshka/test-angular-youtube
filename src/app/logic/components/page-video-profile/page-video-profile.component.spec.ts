import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoProfileComponent } from './page-video-profile.component';

describe('PageVideoProfileComponent', () => {
    let component: PageVideoProfileComponent;
    let fixture: ComponentFixture<PageVideoProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageVideoProfileComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageVideoProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
