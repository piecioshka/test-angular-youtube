import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { MovieListComponent } from './movie-list.component';
import { IMovie } from '../../interfaces/movie.interface';

describe('MovieListComponent', () => {
    let component: MovieListComponent;
    let fixture: ComponentFixture<MovieListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxPaginationModule, RouterTestingModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display empty list at start', () => {
        component.movies = null;
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

    it('should display some items when list is noe empty', () => {
        const movie = <IMovie>{ title: 'foo' };
        component.movies = [movie, movie, movie];
        fixture.detectChanges();
        const $items = fixture.nativeElement.querySelectorAll('#movie-list ul li');
        expect($items.length).toEqual(3);
    });
});
