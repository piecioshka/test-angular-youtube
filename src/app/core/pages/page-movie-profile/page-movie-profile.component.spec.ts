import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { PageMovieProfileComponent } from './page-movie-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PageMovieProfileComponent', () => {
    let component: PageMovieProfileComponent;
    let fixture: ComponentFixture<PageMovieProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                RouterTestingModule,
                HttpClientModule,
            ],
            declarations: [
                PageMovieProfileComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageMovieProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
