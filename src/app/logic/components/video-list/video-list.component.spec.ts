import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { VideoListComponent } from './video-list.component';
import { LogicModule } from '../../logic.module';
import { VideoInterface } from '../../interfaces/video.interface';

describe('VideoListComponent', () => {
    let component: VideoListComponent;
    let fixture: ComponentFixture<VideoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxPaginationModule, RouterTestingModule, LogicModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display empty list at start', () => {
        component.videos = null;
        fixture.detectChanges();
        const $items = fixture.nativeElement.querySelectorAll('#video-list ul li');
        expect($items.length).toEqual(0);
    });

    it('should display fallback text when list is empty', () => {
        component.videos = [];
        fixture.detectChanges();
        const $message = fixture.nativeElement.querySelector('.alert p');
        expect($message.textContent).toContain('pusta');
    });

    it('should display some items when list is noe empty', () => {
        const video = <VideoInterface>{ title: 'foo' };
        component.videos = [video, video, video];
        fixture.detectChanges();
        const $items = fixture.nativeElement.querySelectorAll('#video-list ul li');
        expect($items.length).toEqual(3);
    });
});
