import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageVideoListComponent } from './page-video-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { LogicModule } from '../../logic.module';
import { VideosService } from '../../services/videos.service';
import { FakeVideosService } from '../../services/videos.service.fake';

describe('PageVideoListComponent', () => {
    let component: PageVideoListComponent;
    let fixture: ComponentFixture<PageVideoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, RouterTestingModule, LogicModule],
            providers: [
                { provide: VideosService, useClass: FakeVideosService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageVideoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
