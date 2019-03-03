import { Component, Input } from '@angular/core';

import { IMovie } from '../../interfaces/movie.interface';
import { IMovieList } from '../../interfaces/movie-list.interface';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {

    public page = 1;

    @Input() movies: IMovieList = null;

    public sortAscending() {
        this.movies = this.movies.sort(this.ascending);
    }

    public sortDescending() {
        this.movies = this.movies.sort((a: IMovie, b: IMovie) => {
            return this.ascending(a, b) * (-1);
        });
    }

    private ascending(a: IMovie, b: IMovie) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    }

}
