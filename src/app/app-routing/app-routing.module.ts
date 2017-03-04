import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from '../video-list/video-list.component';
import { VideoComponent } from '../video/video.component';

const routes: Routes = [
  { path: '', component: VideoListComponent },
  { path: 'video/:id', component: VideoComponent }
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
