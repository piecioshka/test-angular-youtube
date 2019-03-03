import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieNotFoundComponent } from './page-movie-not-found.component';
import { SharedModule } from '../../../shared/shared.module';

describe('PageMovieNotFoundComponent', () => {
    let component: PageMovieNotFoundComponent;
    let fixture: ComponentFixture<PageMovieNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [PageMovieNotFoundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageMovieNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
