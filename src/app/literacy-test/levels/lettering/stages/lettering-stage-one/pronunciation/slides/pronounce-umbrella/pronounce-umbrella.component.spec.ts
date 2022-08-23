import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounceUmbrellaComponent } from './pronounce-umbrella.component';

describe('PronounceUmbrellaComponent', () => {
  let component: PronounceUmbrellaComponent;
  let fixture: ComponentFixture<PronounceUmbrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronounceUmbrellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounceUmbrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
