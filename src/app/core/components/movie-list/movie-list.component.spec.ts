import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgxPaginationModule } from 'ngx-pagination';

import { MovieListComponent } from './movie-list.component';
import { IMovie } from '../../interfaces/movie.interface';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('MovieListComponent', () => {
    let fixture: ComponentFixture<MovieListComponent>;
    let component: MovieListComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxPaginationModule,
                RouterTestingModule,
                SharedModule
            ],
            declarations: [
                MovieListComponent,
                MovieListItemComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieListComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.nativeElement.remove();
    });

    it('should create', () => {
        component.movies = null;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create', () => {
        component.movies = null;
        fixture.detectChanges();
        const $message = fixture.nativeElement.querySelector('p');
        expect($message.textContent).toContain('Trwa pobieranie filmów');
    });

    it('should display empty list at start', () => {
        component.movies = [];
        fixture.detectChanges();
        const $items = fixture.nativeElement.querySelectorAll('#movie-list ul li');
        expect($items.length).toEqual(0);
    });

    it('should display fallback text when list is empty', () => {
        component.movies = [];
        fixture.detectChanges();
        const $message = fixture.nativeElement.querySelector('.alert p');
        expect($message.textContent).toContain('pusta');
    });

    it('should display some items when list is not empty', () => {
        const movie = <IMovie>{ title: 'foo' };
        component.movies = [movie, movie, movie];
        fixture.detectChanges();
        const $items = fixture.nativeElement.querySelectorAll('#movie-list ul li');
        expect($items.length).toEqual(3);
    });
});
