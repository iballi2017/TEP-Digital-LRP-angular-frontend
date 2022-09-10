import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalVidComponent } from './instructional-vid.component';

describe('InstructionalVidComponent', () => {
  let component: InstructionalVidComponent;
  let fixture: ComponentFixture<InstructionalVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionalVidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
