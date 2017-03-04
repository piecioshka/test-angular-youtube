import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Video } from './video-model';
import { LatestVideoService } from '../latest-video-list/latest-video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [
    LatestVideoService
  ]
})
export class VideoComponent implements OnInit {
  video: Video;

  constructor(private latestVideoService: LatestVideoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return this.latestVideoService.getVideo(params['id']);
      })
      .subscribe(video => {
        if (!video) {
          return this.router.navigate(['video-not-found']);
        }
        this.video = video;
      });
  }

  togglePlay($node) {
    if ($node.paused) {
      $node.play();
    } else {
      $node.pause();
    }
  }
}
