import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
    }

    public handleEnter(phrase: string) {
        phrase = phrase.trim();
        if (!phrase) {
            return;
        }
        this.router.navigateByUrl(`/video-search/${phrase}`);
    }

}
