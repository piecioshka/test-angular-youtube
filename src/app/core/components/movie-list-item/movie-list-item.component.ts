import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-movie-list-item',
    templateUrl: './movie-list-item.component.html',
    styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent {

    @Input() movie = null;

}
