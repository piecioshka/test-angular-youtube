import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserLoginComponent } from './page-user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageUserLoginComponent', () => {
  let component: PageUserLoginComponent;
  let fixture: ComponentFixture<PageUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedModule,
        RouterTestingModule,
      ],
      declarations: [ PageUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
