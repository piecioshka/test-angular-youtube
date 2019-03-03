import { Component, OnInit } from '@angular/core';

import { IMovieList } from '../../interfaces/movie-list.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-page-home',
    templateUrl: './page-home.component.html',
    styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

    perPage = 3;
    promoMovies: IMovieList = [];

    constructor(
        private movies: MoviesService
    ) { }

    ngOnInit() {
        this.setupMovies();
    }

    async setupMovies() {
        const allMovies = await this.movies.fetchMoviesPromise();
        allMovies.length = this.perPage;
        this.promoMovies = allMovies;
    }

}
