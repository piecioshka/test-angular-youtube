import { Routes } from '@angular/router';

import { PageHomeComponent } from 'src/app/core/pages/page-home/page-home.component';
import { PageContactComponent } from 'src/app/core/pages/page-contact/page-contact.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageMovieNotFoundComponent } from './pages/page-movie-not-found/page-movie-not-found.component';
import { PageMovieProfileComponent } from './pages/page-movie-profile/page-movie-profile.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { PageAuthorListComponent } from './pages/page-author-list/page-author-list.component';
import { PageUserRegistrationComponent } from './pages/page-user-registration/page-user-registration.component';
import { PageUserLoginComponent } from './pages/page-user-login/page-user-login.component';
import { PageUserLogoutComponent } from './pages/page-user-logout/page-user-logout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: PageHomeComponent
    },
    {
        path: 'contact',
        component: PageContactComponent
    },
    {
        path: 'movies',
        children: [
            {
                path: '',
                component: PageMovieListComponent
            },
            {
                path: 'not-found',
                component: PageMovieNotFoundComponent
            },
            {
                path: ':id',
                component: PageMovieProfileComponent
            }
        ]
    },
    {
        path: 'search',
        children: [
            {
                path: ':query',
                component: PageSearchComponent
            }
        ]
    },
    {
        path: 'user',
        children: [
            {
                path: 'register',
                component: PageUserRegistrationComponent
            },
            {
                path: 'login',
                component: PageUserLoginComponent
            },
            {
                path: 'logout',
                component: PageUserLogoutComponent
            }
        ]
    },
    {
        path: 'authors',
        children: [
            {
                path: '',
                component: PageAuthorListComponent
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];
