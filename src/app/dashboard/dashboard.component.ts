import { Component, OnInit, Input} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewDashboardCreaterComponent} from './../new-dashboard-creater/new-dashboard-creater.component';

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
  // createNewDashboardDialog: MdDialog;
  constructor(public createNewDashboardDialog: MdDialog) {
    this.ngOnInit();
  }

  ngOnInit() {
  }

  openCreateNewDashboardDialog() {
    this.createNewDashboardDialog.open(NewDashboardCreaterComponent, {height: '400px',
      width: '600px'});
  }
}
