import { Component, OnInit, Input } from '@angular/core';
import { DataSource} from '@angular/cdk';
import { Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-dashboard-management',
  templateUrl: './dashboard-management.component.html',
  styleUrls: ['./dashboard-management.component.css']
})
export class DashboardManagementComponent implements OnInit {
  @Input() dashboards: any;
  displayedColumns = ['dashboardName', 'Actions'];
  dataSource: DashboardDataSource | null;

  ngOnInit() {
    this.dataSource = new DashboardDataSource(new DashboardDatabase(this.dashboards));
    console.log(this.dataSource);
  }
}
export interface Dashboard {
  id: string;
  name: string;
}

export class DashboardDatabase {
  dataChange: BehaviorSubject<Dashboard[]> = new BehaviorSubject<Dashboard[]>([]);
  get data(): Dashboard[] { return this.dataChange.value; }
  constructor(dbArray: Dashboard[]) {
    console.log(dbArray);
    for (const db of dbArray) { this.addDashboard(db); }
  }
  addDashboard(db: Dashboard) {
    const copiedData = this.data.slice();
    copiedData.push(db);
    this.dataChange.next(copiedData);
  }
}
export class DashboardDataSource extends DataSource<any> {
  private _exampleDatabase: DashboardDatabase;
  constructor(exampleDatabase: DashboardDatabase) {
    super();
    this._exampleDatabase = exampleDatabase;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Dashboard[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() {}
}
