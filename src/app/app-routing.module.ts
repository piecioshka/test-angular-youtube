import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'authors',
        loadChildren: './static/static.module#StaticModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true // when SSR is disabled
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
