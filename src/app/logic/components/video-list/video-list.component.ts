import { Component, Input } from '@angular/core';

import { VideoInterface } from '../../interfaces/video.interface';

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent {

    public page = 1;

    @Input() videos: Array<VideoInterface> = null;

    public sortAscending() {
        this.videos = this.videos.sort(this.ascending);
    }

    public sortDescending() {
        this.videos = this.videos.sort((a: VideoInterface, b: VideoInterface) => {
            return this.ascending(a, b) * (-1);
        });
    }

    private ascending(a: VideoInterface, b: VideoInterface) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    }

}
