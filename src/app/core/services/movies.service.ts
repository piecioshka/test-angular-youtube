import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, retry } from 'rxjs/operators';

import { IMovie } from '../interfaces/movie.interface';
import { IMovieList } from '../interfaces/movie-list.interface';

import { delay as delayPromise } from '../../shared/helpers/delay';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(
        private http: HttpClient
    ) { }


    fetchMoviesPromise() {
        return this.http.get<IMovieList>(environment.moviesUrl).toPromise();
    }

    async fetchMovieByIdPromise(movieId) {
        const movies = await this.fetchMoviesPromise();
        return movies.find((movie) => {
            return movie.id === movieId;
        });
    }

    // -------------------------------------------------------------------------

    fetchMovies(): Observable<IMovieList> {
        const endpoint = environment.moviesUrl;
        return this.http.get<IMovieList>(endpoint)
            .pipe(
                retry(3),
                delay(20)
            );
    }

    async fetchMovieById(videoId: string): Promise<IMovie> {
        const movies = await this.fetchMovies().toPromise();
        const found = movies.find((movie) => {
            return movie.id === videoId;
        });
        await delayPromise(200);
        return found;
    }

    async search(title: string): Promise<IMovieList> {
        const movies = await this.fetchMovies().toPromise();
        await delayPromise(200);
        return movies.filter((movie) => {
            return new RegExp(title, 'i').test(movie.title);
        });
    }

}
