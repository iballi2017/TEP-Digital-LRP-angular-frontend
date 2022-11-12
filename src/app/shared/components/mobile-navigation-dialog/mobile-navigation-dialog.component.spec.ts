import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavigationDialogComponent } from './mobile-navigation-dialog.component';

describe('MobileNavigationDialogComponent', () => {
  let component: MobileNavigationDialogComponent;
  let fixture: ComponentFixture<MobileNavigationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNavigationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavigationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
