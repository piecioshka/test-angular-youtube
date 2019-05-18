import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { PageMovieListComponent } from './page-movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';
import { MoviesService } from '../../services/movies.service';
import { FakeMoviesService } from '../../services/movies.service.fake';

describe('PageMovieListComponent', () => {
    let fixture: ComponentFixture<PageMovieListComponent>;
    let component: PageMovieListComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                RouterTestingModule,
                HttpClientModule,
                NgxPaginationModule,
            ],
            declarations: [
                PageMovieListComponent,
                MovieListComponent,
                MovieListItemComponent,
            ],
            providers: [
                { provide: MoviesService, useClass: FakeMoviesService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageMovieListComponent);
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
