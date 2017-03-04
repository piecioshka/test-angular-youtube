import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../video/video.model';
import { SortingService } from './sorting.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [
    SortingService
  ]
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];

  constructor(private sortingService: SortingService) {
  }

  ngOnInit() {
  }

  sortAscending() {
    this.videos = this.videos.sort(this.sortingService.ascending);
  }

  sortDescending() {
    this.videos = this.videos.sort(this.sortingService.descending);
  }
}
