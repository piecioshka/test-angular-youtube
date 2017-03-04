import { Component, OnInit } from '@angular/core';
import { LatestVideoService } from './latest-video.service';
import { Video } from '../video/video.model';

@Component({
  selector: 'app-latest-video-list',
  templateUrl: './latest-video-list.component.html',
  styleUrls: ['./latest-video-list.component.css'],
  providers: [
    LatestVideoService
  ]
})
export class LatestVideoListComponent implements OnInit {
  private videos: Video[] = [];

  constructor(private latestVideoService: LatestVideoService) {
  }

  ngOnInit() {
    this.latestVideoService.getVideos()
      .then((VIDEOS) => {
        this.videos = VIDEOS;
      })
  }
}
