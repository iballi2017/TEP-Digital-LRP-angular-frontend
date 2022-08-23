import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronouncedAsUComponent } from './pronounced-as-u.component';

describe('PronouncedAsUComponent', () => {
  let component: PronouncedAsUComponent;
  let fixture: ComponentFixture<PronouncedAsUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronouncedAsUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronouncedAsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
