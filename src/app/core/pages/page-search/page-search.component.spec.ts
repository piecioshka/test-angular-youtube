import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageSearchComponent } from './page-search.component';
import { MoviesService } from '../../services/movies.service';
import { FakeMoviesService } from '../../services/movies.service.fake';

describe('PageSearchComponent', () => {
    let component: PageSearchComponent;
    let fixture: ComponentFixture<PageSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                { provide: MoviesService, useClass: FakeMoviesService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
