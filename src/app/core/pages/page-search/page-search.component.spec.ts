import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgxPaginationModule } from 'ngx-pagination';

import { PageSearchComponent } from './page-search.component';
import { MoviesService } from '../../services/movies.service';
import { FakeMoviesService } from '../../services/movies.service.fake';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';

describe('PageSearchComponent', () => {
    let fixture: ComponentFixture<PageSearchComponent>;
    let component: PageSearchComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule,
                NgxPaginationModule
            ],
            declarations: [
                PageSearchComponent,
                MovieListComponent,
                MovieListItemComponent
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
    });

    afterEach(() => {
        fixture.nativeElement.remove();
    });

    it('should create', () => {
        component.foundMovies = [];
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
