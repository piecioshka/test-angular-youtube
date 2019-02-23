import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageVideoProfileComponent } from './page-video-profile.component';
import { LogicModule } from '../../logic.module';
import { VideosService } from '../../services/videos.service';
import { FakeVideosService } from '../../services/videos.service.fake';

describe('PageVideoProfileComponent', () => {
    let component: PageVideoProfileComponent;
    let fixture: ComponentFixture<PageVideoProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, LogicModule],
            providers: [
                { provide: VideosService, useClass: FakeVideosService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageVideoProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
