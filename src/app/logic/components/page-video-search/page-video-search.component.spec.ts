import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageVideoSearchComponent } from './page-video-search.component';
import { LogicModule } from '../../logic.module';
import { VideosService } from '../../services/videos.service';
import { FakeVideosService } from '../../services/videos.service.fake';

describe('PageVideoSearchComponent', () => {
    let component: PageVideoSearchComponent;
    let fixture: ComponentFixture<PageVideoSearchComponent>;

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
        fixture = TestBed.createComponent(PageVideoSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
