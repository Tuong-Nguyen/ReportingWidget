import { Component, OnInit, Input} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewDashboardCreaterComponent} from '../new-dashboard-creater/new-dashboard-creater.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() tabs = [
    {name: 'One'},
    {name: 'Two'},
    {name: 'Three'}
  ];
  _createNewDashboardDialog: MdDialog;
  constructor(createNewDashboardDialog: MdDialog) {
    this._createNewDashboardDialog = createNewDashboardDialog;
  }

  ngOnInit() {
  }

  openCreateNewDashboardDialog() {
    const dialog =  this._createNewDashboardDialog.open(NewDashboardCreaterComponent, {
      width: '600px',
      data: {}
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
