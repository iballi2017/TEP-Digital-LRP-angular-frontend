import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounceBallComponent } from './pronounce-ball.component';

describe('PronounceBallComponent', () => {
  let component: PronounceBallComponent;
  let fixture: ComponentFixture<PronounceBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronounceBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounceBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
