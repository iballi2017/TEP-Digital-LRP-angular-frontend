import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceApplauseComponent } from './audience-applause.component';

describe('AudienceApplauseComponent', () => {
  let component: AudienceApplauseComponent;
  let fixture: ComponentFixture<AudienceApplauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceApplauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienceApplauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
