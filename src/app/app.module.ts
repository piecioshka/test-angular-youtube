import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoComponent } from './video/video.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { VideoNotFoundComponent } from './video-not-found/video-not-found.component';
import { VideoSearchComponent } from './video-search/video-search.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoComponent,
    VideoNotFoundComponent,
    VideoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
