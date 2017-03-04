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
}
