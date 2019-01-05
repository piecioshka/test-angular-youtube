import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoListComponent } from './page-video-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { LogicModule } from '../../logic.module';

describe('PageVideoListComponent', () => {
    let component: PageVideoListComponent;
    let fixture: ComponentFixture<PageVideoListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, LogicModule]
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
