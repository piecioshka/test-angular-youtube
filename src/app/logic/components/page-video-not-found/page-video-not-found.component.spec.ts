import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoNotFoundComponent } from './page-video-not-found.component';

describe('PageVideoNotFoundComponent', () => {
    let component: PageVideoNotFoundComponent;
    let fixture: ComponentFixture<PageVideoNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageVideoNotFoundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageVideoNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
