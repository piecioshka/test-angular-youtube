import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoListComponent } from './page-video-list.component';

describe('PageVideoListComponent', () => {
    let component: PageVideoListComponent;
    let fixture: ComponentFixture<PageVideoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageVideoListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageVideoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
