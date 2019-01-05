import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { LogicRoutingModule } from './logic-routing.module';

import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { PageVideoNotFoundComponent } from './components/page-video-not-found/page-video-not-found.component';
import { PageVideoSearchComponent } from './components/page-video-search/page-video-search.component';

import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoListItemComponent } from './components/video-list-item/video-list-item.component';
import { VideoProfileComponent } from './components/video-profile/video-profile.component';

import { VideosService } from './services/videos.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PageVideoListComponent,
        PageVideoProfileComponent,
        PageVideoNotFoundComponent,
        PageVideoSearchComponent,

        VideoListComponent,
        VideoListItemComponent,
        VideoProfileComponent
    ],
    imports: [
        CommonModule,
        LogicRoutingModule,
        SharedModule,
        NgxPaginationModule,
        HttpClientModule
    ],
    providers: [
        VideosService
    ],
    exports: []
})
export class LogicModule { }
