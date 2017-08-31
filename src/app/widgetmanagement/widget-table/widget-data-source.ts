import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { MdSort } from '@angular/material';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Widget } from '../widget';
import { WidgetService } from '../widget.service';

export class WidgetDataSource extends DataSource<any> {
  private widgetService: WidgetService;
  private sort: MdSort;

  constructor(widgetService: WidgetService, sort: MdSort) {
    super();
    this.widgetService = widgetService;
    this.sort = sort;
  }

  connect(): Observable<Widget[]> {
    return this.widgetService.getWidgets();
  }

  disconnect() {}

  getSortedData(): Widget[] {
    const widgets = [];

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
