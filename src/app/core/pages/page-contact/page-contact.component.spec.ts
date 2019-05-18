import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgxPaginationModule } from 'ngx-pagination';

import { PageContactComponent } from './page-contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';

describe('PageContactComponent', () => {
    let fixture: ComponentFixture<PageContactComponent>;
    let component: PageContactComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                NgxPaginationModule,
                RouterTestingModule
            ],
            declarations: [
                PageContactComponent,
                MovieListComponent,
                MovieListItemComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageContactComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.nativeElement.remove();
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
