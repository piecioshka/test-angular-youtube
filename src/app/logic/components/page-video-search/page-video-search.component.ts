import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { VideosService } from '../../services/videos.service';
import { VideoListInterface } from '../../interfaces/video-list.interface';

@Component({
    selector: 'app-page-video-search',
    templateUrl: './page-video-search.component.html',
    styleUrls: ['./page-video-search.component.css']
})
export class PageVideoSearchComponent implements OnInit {

    public videos: VideoListInterface = null;

    constructor(
        private activatedRoute: ActivatedRoute,
        private videosService: VideosService
    ) { }

    ngOnInit() {
        this.setupVideoSearch();
    }

    private setupVideoSearch() {
        this.activatedRoute.params.subscribe(async (params: Params) => {
            const videoTitle = params['phrase'];
            this.videos = null;
            this.videos = await this.videosService.fetchVideoByTitle(videoTitle);
        });
    }

}
