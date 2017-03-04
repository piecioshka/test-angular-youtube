import { Injectable } from '@angular/core';
import { VIDEOS } from './mock-videos';

@Injectable()
export class VideoService {

  constructor() {
  }

  getVideos() {
    return Promise.resolve(VIDEOS);
  }
}
