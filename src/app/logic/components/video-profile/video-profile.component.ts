import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { VideoInterface } from '../../interfaces/video.interface';
import { VideosService } from '../../services/videos.service';

@Component({
    selector: 'app-video-profile',
    templateUrl: './video-profile.component.html',
    styleUrls: ['./video-profile.component.css']
})
export class VideoProfileComponent implements OnInit {

    @Input() video: VideoInterface = null;

    constructor(
        public sanitizer: DomSanitizer,
        private videosService: VideosService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.setupVideoProfile();
    }

    private setupVideoProfile() {
        this.route.params.subscribe(async (params) => {
            const videoId = params['id'];

            const video = await this.videosService.fetchVideoById(videoId);
            if (!video) {
                return this.router.navigate(['video-not-found']);
            }
            this.video = video;
        });
    }

    public getVideoUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video_url);
    }

}
