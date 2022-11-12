import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTestSideNavigationComponent } from './program-test-side-navigation.component';

describe('ProgramTestSideNavigationComponent', () => {
  let component: ProgramTestSideNavigationComponent;
  let fixture: ComponentFixture<ProgramTestSideNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramTestSideNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTestSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
