import { Injectable } from '@angular/core';

import { VideoInterface } from '../interfaces/video.interface';
import { delay } from '../../shared/helpers/delay';

const endpoint = '/assets/db.json';
// const endpoint = '/assets/videos.json';
// const endpoint = 'http://localhost:2095/videos/';

@Injectable({
    providedIn: 'root'
})
export class VideosService {

    async fetchVideos(): Promise<Array<VideoInterface>> {
        const response = await window.fetch(endpoint);
        try {
            const videos = await response.json();
            await delay(200);
            return videos;
        } catch (err) {
            return [];
        }
    }

    async fetchVideoById(videoId: string): Promise<VideoInterface> {
        const videos = await this.fetchVideos();
        const found = videos.find((video) => {
            return video.id === videoId;
        });
        await delay(300);
        return found;
    }

    async fetchVideoByTitle(title: string): Promise<Array<VideoInterface>> {
        const videos = await this.fetchVideos();
        await delay(400);
        return videos.filter((video) => {
            return new RegExp(title, 'i').test(video.title);
        });
    }

}
