import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowControlsComponent } from './arrow-controls.component';

describe('ArrowControlsComponent', () => {
  let component: ArrowControlsComponent;
  let fixture: ComponentFixture<ArrowControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
