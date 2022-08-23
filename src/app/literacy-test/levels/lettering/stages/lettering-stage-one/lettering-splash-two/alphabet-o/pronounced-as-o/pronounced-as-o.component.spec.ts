import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronouncedAsOComponent } from './pronounced-as-o.component';

describe('PronouncedAsOComponent', () => {
  let component: PronouncedAsOComponent;
  let fixture: ComponentFixture<PronouncedAsOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronouncedAsOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronouncedAsOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
