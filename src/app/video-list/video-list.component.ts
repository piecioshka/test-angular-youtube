import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from '../video/video-model';
import { SortingService } from './sorting.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: [
    './video-list.component.css',
    '../app.component.css'
  ],
  providers: [
    VideoService,
    SortingService
  ]
})
export class VideoListComponent implements OnInit {
  private videos: Video[] = [];

  constructor(private videoService: VideoService,
              private sortingService: SortingService) {
  }

  ngOnInit() {
    this.videoService.getVideos()
      .then((VIDEOS) => {
        this.videos = VIDEOS;
      })
  }

  sortAscending() {
    this.videos = this.videos.sort(this.sortingService.ascending);
  }

  sortDescending() {
    this.videos = this.videos.sort(this.sortingService.descending);
  }
}
