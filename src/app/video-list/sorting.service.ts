import { Injectable } from '@angular/core';
import { Video } from '../video/video-model';

@Injectable()
export class SortingService {

  constructor() {
  }

  ascending(a: Video, b: Video) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }

  descending(a: Video, b: Video) {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  }
}
