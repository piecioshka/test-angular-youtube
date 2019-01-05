import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { VideoListComponent } from './video-list.component';
import { LogicModule } from '../../logic.module';

describe('VideoListComponent', () => {
    let component: VideoListComponent;
    let fixture: ComponentFixture<VideoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxPaginationModule, LogicModule],
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
});
