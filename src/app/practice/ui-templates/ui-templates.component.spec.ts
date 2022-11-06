import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTemplatesComponent } from './ui-templates.component';

describe('UiTemplatesComponent', () => {
  let component: UiTemplatesComponent;
  let fixture: ComponentFixture<UiTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
