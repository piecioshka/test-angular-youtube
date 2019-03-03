import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';

import * as debug from 'debug';

const console = {
    log: debug('youtube:image:log')
};

// localStorage.debug = '*'
// localStorage.debug = 'youtube:*';
// localStorage.debug = 'youtube:image:*';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {

    @Input() src: string = null;

    constructor(
        private $el: ElementRef
    ) { }

    ngOnInit() {
        this.updateSource();
    }

    updateSource() {
        // Pobieramy ref. do obrazka w DOM
        const $image = this.$el.nativeElement.querySelector('img');

        // Tworzymy instancję "słuchacza"
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    console.log(`Image is visible in viewport: ${this.src}`);

                    // Ładujemy obrazek
                    entry.target.setAttribute('src', this.src);

                    // Kończymy obserwować widoczność obrazka
                    observer.disconnect();
                }
            });
        });

        // Zaczynamy słuchać na
        observer.observe($image);
    }

}
