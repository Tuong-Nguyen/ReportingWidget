import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.css']
})
export class NewDashboardComponent implements OnInit {
  public _dialogRef: MdDialogRef<NewDashboardComponent>;
  @Inject(MD_DIALOG_DATA) _data: any;
  newDashboardForm: FormGroup;
  constructor(dialogRef: MdDialogRef<NewDashboardComponent>) {
    this._dialogRef = dialogRef;
  }

  ngOnInit() {
    this.newDashboardForm = new FormGroup({
      'dashboardName': new FormControl('', [Validators.required])
      }
    );
  }
  createNewDashboar() {
    this._dialogRef.close(this.newDashboardForm.value);
  }
  onNoClick(): void {
    this._dialogRef.close();
  }
}
