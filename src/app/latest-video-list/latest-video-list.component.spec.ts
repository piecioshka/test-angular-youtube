import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestVideoListComponent } from './latest-video-list.component';

describe('LatestVideoListComponent', () => {
  let component: LatestVideoListComponent;
  let fixture: ComponentFixture<LatestVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
