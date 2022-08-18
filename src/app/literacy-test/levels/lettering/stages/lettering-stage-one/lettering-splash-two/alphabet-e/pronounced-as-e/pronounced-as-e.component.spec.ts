import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronouncedAsEComponent } from './pronounced-as-e.component';

describe('PronouncedAsEComponent', () => {
  let component: PronouncedAsEComponent;
  let fixture: ComponentFixture<PronouncedAsEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronouncedAsEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronouncedAsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
