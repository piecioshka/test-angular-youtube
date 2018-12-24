import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoSearchComponent } from './page-video-search.component';

describe('PageVideoSearchComponent', () => {
    let component: PageVideoSearchComponent;
    let fixture: ComponentFixture<PageVideoSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageVideoSearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageVideoSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
