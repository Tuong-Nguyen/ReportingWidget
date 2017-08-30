import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-dashboard-creater',
  templateUrl: './new-dashboard-creater.component.html',
  styleUrls: ['./new-dashboard-creater.component.css']
})
export class NewDashboardCreaterComponent implements OnInit {
  public _dialogRef: MdDialogRef<NewDashboardCreaterComponent>;
  @Inject(MD_DIALOG_DATA) _data: any;
  newDashboardForm: FormGroup;
  constructor(dialogRef: MdDialogRef<NewDashboardCreaterComponent>) {
    this._dialogRef = dialogRef;
    // this._data = data;
  }

  ngOnInit() {
    this.newDashboardForm = new FormGroup({
      'dashboardName': new FormControl('', [Validators.required])
      }
    );
  }
  createNewDashboar() {
    console.log(this.newDashboardForm);
  }
  onNoClick(): void {
    this._dialogRef.close();
  }
}
