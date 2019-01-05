import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VideoProfileComponent } from './video-profile.component';
import { LogicModule } from '../../logic.module';

describe('VideoProfileComponent', () => {
    let component: VideoProfileComponent;
    let fixture: ComponentFixture<VideoProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [LogicModule, RouterTestingModule],
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
