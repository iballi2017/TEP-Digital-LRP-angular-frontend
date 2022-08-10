import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVowelComponent } from './a-vowel.component';

describe('AVowelComponent', () => {
  let component: AVowelComponent;
  let fixture: ComponentFixture<AVowelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVowelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
