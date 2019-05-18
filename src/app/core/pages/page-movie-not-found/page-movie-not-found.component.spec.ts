import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieNotFoundComponent } from './page-movie-not-found.component';
import { SharedModule } from '../../../shared/shared.module';

describe('PageMovieNotFoundComponent', () => {
    let fixture: ComponentFixture<PageMovieNotFoundComponent>;
    let component: PageMovieNotFoundComponent;

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
    });

    afterEach(() => {
        fixture.nativeElement.remove();
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
