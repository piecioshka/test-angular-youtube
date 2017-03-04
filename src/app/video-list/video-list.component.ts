import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from '../video/video-model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [
    VideoService
  ]
})
export class VideoListComponent implements OnInit {
  private videos: Video[];

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.videoService.getVideos().then((VIDEOS) => {
      this.videos = VIDEOS;
    })
  }

}
