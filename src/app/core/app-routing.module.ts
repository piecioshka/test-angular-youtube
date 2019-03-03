import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions } from '@angular/router';

import { routes } from './app.routes';
import { environment } from 'src/environments/environment';

const options: ExtraOptions = {};

if (environment.enableRoutingHashStrategy) {
    options.useHash = true;
}

@NgModule({
    imports: [
        RouterModule.forRoot(routes, options)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
