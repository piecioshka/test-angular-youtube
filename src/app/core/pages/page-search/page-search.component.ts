import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { filter } from 'rxjs/operators';

import { MoviesService } from '../../services/movies.service';
import { IMovieList } from '../../interfaces/movie-list.interface';

@Component({
    selector: 'app-page-search',
    templateUrl: './page-search.component.html',
    styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent implements OnInit {

    public foundMovies: IMovieList = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private movies: MoviesService
    ) { }

    ngOnInit() {
        this.displayResults();

        this.router.events
            .pipe(
                filter((evt) => evt instanceof NavigationEnd)
            )
            .subscribe(() => {
                this.displayResults();
            });
    }

    async displayResults() {
        const query = this.route.snapshot.paramMap.get('query');
        this.foundMovies = await this.movies.search(query);
    }

}
