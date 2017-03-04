import { Injectable } from '@angular/core';
import { VIDEOS } from './mock-videos';
import { Video } from '../video/video-model';

@Injectable()
export class LatestVideoService {

  constructor() {
  }

  getVideos(): Promise<Video[]> {
    return Promise.resolve(VIDEOS);
  }

  getVideo(id: string) {
    return this.getVideos()
      .then((videos) => {
        return videos.find((video) => {
          return video.id === id;
        });
      })
  }

  searchVideosByTitle(title: string): Promise<Video[]> {
    return this.getVideos()
      .then((videos) => {
        return videos.filter((video) => {
          return new RegExp(title, 'i').test(video.name);
        });
      })
  }
}
