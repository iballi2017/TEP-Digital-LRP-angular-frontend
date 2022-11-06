import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSampleOneComponent } from './ui-sample-one.component';

describe('UiSampleOneComponent', () => {
  let component: UiSampleOneComponent;
  let fixture: ComponentFixture<UiSampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSampleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
