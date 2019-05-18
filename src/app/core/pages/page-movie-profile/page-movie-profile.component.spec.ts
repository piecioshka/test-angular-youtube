import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { PageMovieProfileComponent } from './page-movie-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesService } from '../../services/movies.service';
import { FakeMoviesService } from '../../services/movies.service.fake';

describe('PageMovieProfileComponent', () => {
    let fixture: ComponentFixture<PageMovieProfileComponent>;
    let component: PageMovieProfileComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                RouterTestingModule,
                HttpClientModule,
            ],
            declarations: [
                PageMovieProfileComponent,
            ],
            providers: [
                { provide: MoviesService, useClass: FakeMoviesService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageMovieProfileComponent);
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
