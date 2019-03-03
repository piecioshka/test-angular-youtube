import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ImageComponent } from './components/image/image.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
    declarations: [
        ImageComponent,
        FieldErrorsComponent,
        BreadcrumbComponent,
        SearchFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ImageComponent,
        FieldErrorsComponent,
        BreadcrumbComponent,
        SearchFormComponent,
    ]
})
export class SharedModule { }
