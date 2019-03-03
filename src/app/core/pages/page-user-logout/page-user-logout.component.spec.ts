import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserLogoutComponent } from './page-user-logout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageUserLogoutComponent', () => {
  let component: PageUserLogoutComponent;
  let fixture: ComponentFixture<PageUserLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ PageUserLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
