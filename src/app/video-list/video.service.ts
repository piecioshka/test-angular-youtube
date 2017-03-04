import { Injectable } from '@angular/core';
import { VIDEOS } from './mock-videos';
import { Video } from '../video/video-model';

@Injectable()
export class VideoService {

  constructor() {
  }

  getVideos(): Promise<Video[]> {
    return Promise.resolve(VIDEOS);
  }

  getVideo(id: string) {
    return this.getVideos().then((videos) => {
      return videos.find((video) => {
        return video.id === id;
      });
    })
  }
}
