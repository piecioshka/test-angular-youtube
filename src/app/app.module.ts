import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoComponent } from './video/video.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { VideoNotFoundComponent } from './video-not-found/video-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoComponent,
    VideoNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
