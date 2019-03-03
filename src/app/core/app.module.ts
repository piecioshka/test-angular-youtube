import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './components/app/app.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageMovieNotFoundComponent } from './pages/page-movie-not-found/page-movie-not-found.component';
import { PageMovieProfileComponent } from './pages/page-movie-profile/page-movie-profile.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { PageUserRegistrationComponent } from './pages/page-user-registration/page-user-registration.component';
import { PageUserLoginComponent } from './pages/page-user-login/page-user-login.component';
import { PageUserLogoutComponent } from './pages/page-user-logout/page-user-logout.component';
import { PageAuthorListComponent } from './pages/page-author-list/page-author-list.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        PageHomeComponent,
        PageContactComponent,
        PageMovieListComponent,
        PageMovieNotFoundComponent,
        PageMovieProfileComponent,
        PageSearchComponent,
        PageUserRegistrationComponent,
        PageUserLoginComponent,
        PageUserLogoutComponent,
        PageAuthorListComponent,
        UserMenuComponent,
        MenuComponent,
        MovieListComponent,
        MovieListItemComponent,
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'test-angular-youtube' }),
        AppRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
