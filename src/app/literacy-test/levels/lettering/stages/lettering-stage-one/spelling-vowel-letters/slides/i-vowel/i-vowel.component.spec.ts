import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVowelComponent } from './i-vowel.component';

describe('IVowelComponent', () => {
  let component: IVowelComponent;
  let fixture: ComponentFixture<IVowelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IVowelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IVowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
