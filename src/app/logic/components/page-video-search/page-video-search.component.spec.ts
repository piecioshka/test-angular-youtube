import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageVideoSearchComponent } from './page-video-search.component';
import { LogicModule } from '../../logic.module';

describe('PageVideoSearchComponent', () => {
    let component: PageVideoSearchComponent;
    let fixture: ComponentFixture<PageVideoSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, LogicModule]
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
