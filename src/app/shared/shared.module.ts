import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
    declarations: [
        BreadcrumbComponent,
        SearchFormComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BreadcrumbComponent,
        SearchFormComponent
    ]
})
export class SharedModule { }
