import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSampleTwoComponent } from './ui-sample-two.component';

describe('UiSampleTwoComponent', () => {
  let component: UiSampleTwoComponent;
  let fixture: ComponentFixture<UiSampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSampleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
