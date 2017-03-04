import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Video } from './video-model';
import { VideoService } from '../video-list/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [
    VideoService
  ]
})
export class VideoComponent implements OnInit {
  video: Video;

  constructor(private videoService: VideoService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return this.videoService.getVideo(params['id']);
      })
      .subscribe(video => {
        this.video = video;
      });
  }

}
