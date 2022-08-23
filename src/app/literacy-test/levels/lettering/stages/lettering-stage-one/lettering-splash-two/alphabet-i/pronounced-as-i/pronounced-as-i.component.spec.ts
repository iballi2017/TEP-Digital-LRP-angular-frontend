import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronouncedAsIComponent } from './pronounced-as-i.component';

describe('PronouncedAsIComponent', () => {
  let component: PronouncedAsIComponent;
  let fixture: ComponentFixture<PronouncedAsIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronouncedAsIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronouncedAsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
