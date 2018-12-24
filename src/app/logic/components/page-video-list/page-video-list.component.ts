import { Component, OnInit } from '@angular/core';

import { VideosService } from '../../services/videos.service';
import { VideoInterface } from '../../interfaces/video.interface';

@Component({
    selector: 'app-page-video-list',
    templateUrl: './page-video-list.component.html',
    styleUrls: ['./page-video-list.component.css'],
})
export class PageVideoListComponent implements OnInit {

    private videos: Array<VideoInterface> = null;

    constructor(
        public videosService: VideosService
    ) { }

    ngOnInit() {
        this.setupVideos();
    }

    private setupVideos() {
        this.videosService.fetchVideos()
            .then((videos: Array<VideoInterface>) => {
                this.videos = videos;
            });
    }

}
