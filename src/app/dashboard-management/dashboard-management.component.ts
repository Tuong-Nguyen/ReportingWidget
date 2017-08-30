import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { DataSource} from '@angular/cdk';
import { Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MdSort} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-dashboard-management',
  templateUrl: './dashboard-management.component.html',
  styleUrls: ['./dashboard-management.component.css']
})
export class DashboardManagementComponent implements OnInit {
  @Input() dashboards: any;
  displayedColumns = ['dashboardName', 'Actions'];
  dataSource: DashboardDataSource | null;
  dataSource2: DashboardDataSourceWithoutSort | null;
  dataSource3: DashboardDataSourceWithoutSortWithoutDataBase | null;
  dataSource4: DashboardDataSourceWithoutDataBase | null;

  @ViewChild(MdSort) sort: MdSort;
  ngOnInit() {
    const dataArray = [
      {id: '1', name: 'Aloha'},
      {id: '2', name: 'Hello'},
      {id: '2', name: 'Goodluck'},
      {id: '2', name: 'Xin Chao'},
      {id: '3', name: 'Goodbye'}];
    this.dataSource = new DashboardDataSource(new DashboardDatabase(this.dashboards), this.sort);
    this.dataSource2 = new DashboardDataSourceWithoutSort(new DashboardDatabase(dataArray), this.sort);
    this.dataSource3 = new DashboardDataSourceWithoutSortWithoutDataBase(dataArray, this.sort);
    this.dataSource4 = new DashboardDataSourceWithoutDataBase(dataArray, this.sort);
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
  private _sort: MdSort;
  constructor(exampleDatabase: DashboardDatabase, sort: MdSort) {
    super();
    this._exampleDatabase = exampleDatabase;
    this._sort = sort;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Dashboard[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}

  getSortedData(): Dashboard[] {
    const data = this._exampleDatabase.data.slice();
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'dashboardName':
          [propertyA, propertyB] = [a.name, b.name];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
export class DashboardDataSourceWithoutSort extends DataSource<any> {
  private _exampleDatabase: DashboardDatabase;
  constructor(exampleDatabase: DashboardDatabase, sort: MdSort) {
    super();
    this._exampleDatabase = exampleDatabase;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Dashboard[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() {}

}
export class DashboardDataSourceWithoutSortWithoutDataBase extends DataSource<any> {
  private _exampleDatabase: Dashboard[];
  constructor(exampleDatabase: Dashboard[], sort: MdSort) {
    super();
    this._exampleDatabase = exampleDatabase;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Dashboard[]> {
    return Observable.of(this._exampleDatabase);
  }

  disconnect() {}

}
export class DashboardDataSourceWithoutDataBase extends DataSource<any> {
  private _exampleDatabase: Dashboard[];
  private _sort: MdSort;
  constructor(exampleDatabase: Dashboard[], sort: MdSort) {
    super();
    this._exampleDatabase = exampleDatabase;
    this._sort = sort;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Dashboard[]> {
    const displayDataChanges = [
      this._exampleDatabase,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}

  getSortedData(): Dashboard[] {
    const data = this._exampleDatabase.slice();
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'dashboardName':
          [propertyA, propertyB] = [a.name, b.name];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
