import {AfterViewChecked, Component, OnInit, Input, ViewChild} from '@angular/core';
import { DataSource} from '@angular/cdk';
import { Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MdMenuTrigger, MdSort} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard-management',
  templateUrl: './dashboard-management.component.html',
  styleUrls: ['./dashboard-management.component.css']
})
export class DashboardManagementComponent implements OnInit, AfterViewChecked {
  @Input() dashboards: any;
  contextMenuX: number;
  contextMenuY: number;
  showContextMenu: boolean;
  displayedColumns = ['index', 'dashboardName'];
  dataSource: DashboardDataSource | null;
  private selectedRow: any;
  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdMenuTrigger) menuTriger: MdMenuTrigger;
  ngOnInit() {
    this.dataSource = new DashboardDataSource(new DashboardDatabase(this.dashboards), this.sort);
    console.log(this.dataSource);
    this.menuTriger.onMenuClose.subscribe(() => this.showContextMenu = false);
  }
  ngAfterViewChecked() {
    if (this.showContextMenu) {
      this.menuTriger.openMenu();
      }
    }
  openActionMenu(event, row) {
    event.preventDefault();
    this.selectedRow = row;
    this.contextMenuX = event.x;
    this.contextMenuY = event.y;
    this.showContextMenu = true;
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
