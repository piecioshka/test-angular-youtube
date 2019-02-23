import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, retry } from 'rxjs/operators';

import { VideoInterface } from '../interfaces/video.interface';
import { delay as delayPromise } from '../../shared/helpers/delay';

import { environment } from '../../../environments/environment';
import { VideoListInterface } from '../interfaces/video-list.interface';

@Injectable({
    providedIn: 'root'
})
export class VideosService {

    constructor(
        private http: HttpClient
    ) { }

    fetchVideos(): Observable<VideoListInterface> {
        const endpoint = environment.backendURL;
        return this.http.get<VideoListInterface>(endpoint)
            .pipe(
                retry(3),
                delay(100)
            );
    }

    async fetchVideoById(videoId: string): Promise<VideoInterface> {
        const videos = await this.fetchVideos().toPromise();
        const found = videos.find((video) => {
            return video.id === videoId;
        });
        await delayPromise(500);
        return found;
    }

    async fetchVideoByTitle(title: string): Promise<VideoListInterface> {
        const videos = await this.fetchVideos().toPromise();
        await delayPromise(2000);
        return videos.filter((video) => {
            return new RegExp(title, 'i').test(video.title);
        });
    }

}
