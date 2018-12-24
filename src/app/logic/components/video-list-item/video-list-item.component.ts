import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-video-list-item',
    templateUrl: './video-list-item.component.html',
    styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent {

    @Input() video = null;

}
