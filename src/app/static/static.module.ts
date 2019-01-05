import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorListComponent } from './components/author-list/author-list.component';
import { StaticRoutingModule } from './static-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AuthorListComponent
    ],
    imports: [
        CommonModule,
        StaticRoutingModule,
        SharedModule,
    ]
})
export class StaticModule { }
