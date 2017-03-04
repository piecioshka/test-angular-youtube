import { Component, OnInit } from '@angular/core';
import { LatestVideoService } from '../latest-video-list/latest-video.service';
import { Video } from '../video/video-model';
import { SortingService } from '../video-list/sorting.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  providers: [
    LatestVideoService,
    SortingService
  ]
})
export class VideoSearchComponent implements OnInit {
  videos: Video[] = [];

  constructor(private latestVideoService: LatestVideoService,
              private sortingService: SortingService) {
  }

  ngOnInit() {

  }

  search(phrase) {
    if (!phrase) {
      return;
    }
    this.latestVideoService.searchVideosByTitle(phrase)
      .then((videos) => {
        this.videos = videos;
      })
  }
}
