import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video-list/video.service';
import { Video } from '../video/video-model';

@Component({
  selector: 'app-latest-video-list',
  templateUrl: './latest-video-list.component.html',
  styleUrls: ['./latest-video-list.component.css'],
  providers: [
    VideoService
  ]
})
export class LatestVideoListComponent implements OnInit {
  private videos: Video[] = [];

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.videoService.getVideos()
      .then((VIDEOS) => {
        this.videos = VIDEOS;
      })
  }
}
