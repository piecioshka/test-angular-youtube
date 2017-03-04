import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video-list/video.service';
import { Video } from '../video/video-model';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: [
    '../video/video.component.css',
    '../video-list/video-list.component.css'
  ],
  providers: [
    VideoService
  ]
})
export class VideoSearchComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) {
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
}
