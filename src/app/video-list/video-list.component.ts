import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [
    VideoService
  ]
})
export class VideoListComponent implements OnInit {

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    console.log(this.videoService);
  }

}
