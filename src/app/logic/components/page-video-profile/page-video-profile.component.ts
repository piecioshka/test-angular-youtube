import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { VideosService } from '../../services/videos.service';
import { VideoInterface } from '../../interfaces/video.interface';

@Component({
    selector: 'app-page-video-profile',
    templateUrl: './page-video-profile.component.html',
    styleUrls: ['./page-video-profile.component.css']
})
export class PageVideoProfileComponent implements OnInit {

    video: VideoInterface = null;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private videosService: VideosService
    ) { }

    ngOnInit() {
        this.setupVideoProfile();
    }

    private setupVideoProfile() {
        this.activatedRoute.params.subscribe(async (params: Params) => {
            const videoId = params['id'];

            const video = await this.videosService.fetchVideoById(videoId);

            if (video) {
                this.video = video;
            } else {
                this.redirectToNotFoundPage();
            }
        });
    }

    private redirectToNotFoundPage() {
        this.router.navigateByUrl('/video-not-found');
    }

}
