import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { IMovie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-page-movie-profile',
    templateUrl: './page-movie-profile.component.html',
    styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {

    movie: IMovie = null;

    constructor(
        private sanitizer: DomSanitizer,
        private movies: MoviesService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    async ngOnInit() {
        this.setupVideoProfile();
    }

    private setupVideoProfile() {
        this.route.params.subscribe(async (params: Params) => {
            const videoId = params['id'];

            const movie = await this.movies.fetchMovieById(videoId);

            if (movie) {
                this.movie = movie;
            } else {
                this.redirectToNotFoundPage();
            }
        });
    }

    private redirectToNotFoundPage() {
        this.router.navigateByUrl('/movies/not-found');
    }

    public getVideoUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.movie_url);
    }

}
