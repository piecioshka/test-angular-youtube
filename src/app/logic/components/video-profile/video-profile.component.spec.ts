import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VideoProfileComponent } from './video-profile.component';
import { LogicModule } from '../../logic.module';
import { VideosService } from '../../services/videos.service';
import { FakeVideosService } from '../../services/videos.service.fake';

describe('VideoProfileComponent', () => {
    let component: VideoProfileComponent;
    let fixture: ComponentFixture<VideoProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [LogicModule, RouterTestingModule],
            providers: [
                { provide: VideosService, useClass: FakeVideosService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
