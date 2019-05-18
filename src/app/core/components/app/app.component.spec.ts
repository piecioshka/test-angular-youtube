import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent> = null;
    let component: AppComponent = null;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule
            ],
            declarations: [
                AppComponent,
                UserMenuComponent,
                HeaderComponent,
                MenuComponent,
                FooterComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    });

    afterEach(() => {
        fixture.nativeElement.remove();
    });

    it('should create the app', async(() => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    }));

});
