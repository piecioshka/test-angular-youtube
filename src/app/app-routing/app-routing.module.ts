import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from '../video-list/video-list.component';
import { VideoComponent } from '../video/video.component';
import { VideoNotFoundComponent } from '../video-not-found/video-not-found.component';
import { VideoSearchComponent } from '../video-search/video-search.component';

const routes: Routes = [
  { path: '', component: VideoListComponent },
  { path: 'video/:id', component: VideoComponent },
  { path: 'video-not-found', component: VideoNotFoundComponent },
  { path: 'search', component: VideoSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
