import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyTestSideNavigationComponent } from './literacy-test-side-navigation.component';

describe('LiteracyTestSideNavigationComponent', () => {
  let component: LiteracyTestSideNavigationComponent;
  let fixture: ComponentFixture<LiteracyTestSideNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteracyTestSideNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteracyTestSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
