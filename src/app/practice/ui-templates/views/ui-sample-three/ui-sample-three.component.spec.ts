import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSampleThreeComponent } from './ui-sample-three.component';

describe('UiSampleThreeComponent', () => {
  let component: UiSampleThreeComponent;
  let fixture: ComponentFixture<UiSampleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSampleThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSampleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
