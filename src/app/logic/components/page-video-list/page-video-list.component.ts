import { Component, OnInit } from '@angular/core';

import { VideosService } from '../../services/videos.service';
import { VideoListInterface } from '../../interfaces/video-list.interface';

@Component({
    selector: 'app-page-video-list',
    templateUrl: './page-video-list.component.html',
    styleUrls: ['./page-video-list.component.css'],
})
export class PageVideoListComponent implements OnInit {

    public videos: VideoListInterface = null;

    constructor(
        public videosService: VideosService
    ) { }

    ngOnInit() {
        this.setupVideos();
    }

    private setupVideos() {
        this.videosService.fetchVideos()
            .subscribe((videos: VideoListInterface) => {
                this.videos = videos;
            });
    }

}
