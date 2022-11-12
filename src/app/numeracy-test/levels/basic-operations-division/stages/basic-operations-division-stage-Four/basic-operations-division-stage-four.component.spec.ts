import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicOperationsDivisionStageFourComponent } from './basic-operations-division-stage-four.component';


describe('BasicOperationsDivisionStageFourComponent', () => {
  let component: BasicOperationsDivisionStageFourComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
