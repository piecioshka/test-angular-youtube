import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { IMovieList } from '../../interfaces/movie-list.interface';

@Component({
    selector: 'app-page-movie-list',
    templateUrl: './page-movie-list.component.html',
    styleUrls: ['./page-movie-list.component.css']
})
export class PageMovieListComponent implements OnInit {

    public allMovies: IMovieList = null;

    constructor(
        private movies: MoviesService
    ) { }

    async ngOnInit() {
        this.allMovies = await this.movies.fetchMoviesPromise();
    }

}
