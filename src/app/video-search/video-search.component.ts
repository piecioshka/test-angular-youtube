import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video-list/video.service';
import { Video } from '../video/video-model';
import { SortingService } from '../video-list/sorting.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: [
    '../app.component.css',
    '../video/video.component.css',
    '../video-list/video-list.component.css'
  ],
  providers: [
    VideoService,
    SortingService
  ]
})
export class VideoSearchComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService,
              private sortingService: SortingService) {
  }

  ngOnInit() {

  }

  search(phrase) {
    if (!phrase) {
      return;
    }
    this.videoService.searchVideosByTitle(phrase)
      .then((videos) => {
        this.videos = videos;
      })
  }

  sortAscending() {
    this.videos = this.videos.sort(this.sortingService.ascending);
  }

  sortDescending() {
    this.videos = this.videos.sort(this.sortingService.descending);
  }
}
