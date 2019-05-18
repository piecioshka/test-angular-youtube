import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieListItemComponent } from './movie-list-item.component';
import { movie } from '../../services/movies.service.fake';
import { SharedModule } from 'src/app/shared/shared.module';

describe('MovieListItemComponent', () => {
    let fixture: ComponentFixture<MovieListItemComponent>;
    let component: MovieListItemComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule
            ],
            declarations: [
                MovieListItemComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieListItemComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.movie = movie;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
