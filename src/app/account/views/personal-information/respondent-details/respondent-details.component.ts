import { select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Occupant } from 'src/app/models/types/occupant';
import { LocationService } from 'src/app/services/location.service';
import { OccupantService } from 'src/app/services/occupant.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/components/boolean-alert-dialog/boolean-alert-dialog.component';

@Component({
  selector: 'app-respondent-details',
  templateUrl: './respondent-details.component.html',
  styleUrls: ['./respondent-details.component.scss'],
})
export class RespondentDetailsComponent implements OnInit, OnDestroy {
  @select((s) => s.occupantsList.singleOccupant) singleOccupant: any;
  UpdateRespondentDetailsForm!: FormGroup;
  title = 'RESPONDENT DETAILS';
  num: number = 7;
  // agesList = [this.num];
  agesList: number[] = [];
  submitBtnLabel = 'Save';
  nigerianStateList: any;
  respondentId: any;
  Subscriptions: Subscription[] = [];
  btnTitle="Button";
  SaveBtnType ="submit";
  deleteBtnType = "Button";
  deleteBtnLabel = "Delete"
  SaveBtnClasses = "btn primary-btn text-uppercase form-btn mr-2";
  DeleteBtnClasses = "btn btn-sm delete-btn danger-btn form-btn";
  constructor(
    private _fb: FormBuilder,
    private _locationSvc: LocationService,
    private _route: ActivatedRoute,
    private _occupantSvc: OccupantService,
    private _router: Router,    
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.onGetNigerianStates();
    this.onGetParams();
    let x: number = this.num;
    this.createNumberArray(x);

    let subscription = this.singleOccupant.subscribe({
      next: (occ: any) => {
        if (occ) {
          this.prefillForm(occ);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
    this.Subscriptions.push(subscription);
  }

  onGetParams() {
    let subscription = this._route.paramMap.subscribe({
      next: (params: any) => {
        // console.log('params: ', params);
        let respondentId = params.get('respondentId');
        this.respondentId = respondentId;
        // console.log('respondentId: ', respondentId);
        this._occupantSvc.FetchOccupantDetails(respondentId);
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
    this.Subscriptions.push(subscription);
  }

  createNumberArray(d: number) {
    while (d < 12) {
      this.agesList.push(d);
      d++;
    }
  }

  onGetNigerianStates() {
    this.nigerianStateList = this._locationSvc.getNigerianStates();
  }

  buildForm() {
    this.UpdateRespondentDetailsForm = this._fb.group({
      FullName: '',
      Age: '',
      Location: '',
      Gender: '',
    });
  }

  prefillForm(data: any) {
    // console.log('prefillForm data: ', data);
    // console.log('prefillForm data?.occ_age: ', data?.occ_age);
    this.UpdateRespondentDetailsForm.controls['FullName'].setValue(
      data?.occ_name
    );
    this.UpdateRespondentDetailsForm.controls['Age'].setValue(
      parseInt(data?.occ_age)
    );
    this.UpdateRespondentDetailsForm.controls['Location'].setValue(
      data?.occ_state
    );
    this.UpdateRespondentDetailsForm.controls['Gender'].setValue(
      data?.occ_gender
    );
  }

  onSubmit() {
    // console.log(
    //   'this.UpdateRespondentDetailsForm: ',
    //   this.UpdateRespondentDetailsForm.value
    // );
    const Payload: Occupant = {
      occ_id: this.respondentId,
      occ_name: this.UpdateRespondentDetailsForm.value.FullName,
      occ_state: this.UpdateRespondentDetailsForm.value.Location,
      occ_age: this.UpdateRespondentDetailsForm.value.Age,
      occ_gender: this.UpdateRespondentDetailsForm.value.Gender,
    };

    // console.log('Payload: ', Payload);
    let subscription = this._occupantSvc
      .UpdateOccupantDetails(Payload)
      .subscribe({
        next: (response: any) => {
          if (response) {
            // console.log('response: ', response);
            this._router.navigate(['/account/personal-information']);
          }
        },
        error: (err: any) => {
          console.warn('Error: ', err);
        },
      });
    this.Subscriptions.push(subscription);
  }


  
  onRemove(item: any) {
    this.openDialog(item);
  }
  openDialog(item: any) {
    console.log("item: ", item)
    const dialogRef = this.dialog.open(BooleanAlertDialogComponent, {
      width: '100%',
      maxWidth: '500px',
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.onDeleteOccupant(item);
      }
    });
  }

  onDeleteOccupant(respondentId: string) {
    const Payload = {
      occ_id: respondentId,
    };

    let subscription = this._occupantSvc.RemoveOccupant(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          // console.log('response: ', response);
          this._router.navigate(['/account']);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
    this.Subscriptions.push(subscription);
  }

  back() {
    history.back();
  }

  ngOnDestroy(): void {
    console.log('destroyed!!!', this.Subscriptions);
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
