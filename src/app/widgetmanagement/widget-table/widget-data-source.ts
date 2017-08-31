import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { MdSort } from '@angular/material';
import { EventEmitter } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Widget } from '../widget';

export class WidgetDataSource extends DataSource<any> {
  private widgets: Widget[];
  private sort: MdSort;
  private dataChange = new EventEmitter();

  constructor(widgets: Widget[], sort: MdSort) {
    super();
    this.widgets = widgets;
    this.sort = sort;
  }

  connect(): Observable<Widget[]> {
    const dataSourceChanges = [
      this.sort.mdSortChange,
      this.dataChange
    ];
    return Observable.merge(...dataSourceChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}

  notifyDataSetChanged() {
    this.dataChange.emit(true);
  }

  getSortedData(): Widget[] {
    const widgets = this.widgets.slice();

    if (!this.sort.active || this.sort.direction === '') {
      return widgets;
    }

    return widgets.sort((a, b) => {
      let propertyA = '';
      let propertyB = '';

      switch (this.sort.active) {
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'dataType':
          [propertyA, propertyB] = [a.dataStream, b.dataStream];
          break;
        case 'type':
          [propertyA, propertyB] = [a.type, b.type];
          break;
      }

      return (propertyA < propertyB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
    });
  }
}
