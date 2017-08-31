import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import { MdMenuTrigger, MdSort} from '@angular/material';

import { Widget } from '../widget';
import { WidgetService } from '../widget.service';
import { WidgetDataSource } from './widget-data-source';

@Component({
  selector: 'app-widget-table',
  templateUrl: './widget-table.component.html',
  styleUrls: ['./widget-table.component.scss']
})
export class WidgetTableComponent implements OnInit, AfterViewChecked {
  displayedColumns = ['name', 'data-type', 'type'];
  contextX: number;
  contextY: number;
  dataSource: WidgetDataSource;

  private widgets: Widget[] = [];
  private contextWidget: Widget;
  private showContextMenu = false;
  private widgetService: WidgetService;

  @ViewChild(MdSort) private sort: MdSort;
  @ViewChild(MdMenuTrigger) private contextMenuTrigger: MdMenuTrigger;

  constructor(widgetService: WidgetService) {
    this.widgetService = widgetService;
  }

  ngOnInit() {
    this.dataSource = new WidgetDataSource(this.widgets, this.sort);
    this.getWidgets();

    this.contextMenuTrigger.onMenuClose.subscribe(() => this.showContextMenu = false);
  }

  ngAfterViewChecked() {
    if (this.showContextMenu) {
      this.contextMenuTrigger.openMenu();
    }
  }

  handleContextMenu(event: any, widget: Widget) {
    event.preventDefault();
    this.contextWidget = widget;
    this.showContextMenu = true;
    this.contextX = event.x;
    this.contextY = event.y;
  }

  handleLaunchWidget() {
  }

  handleEditWidget() {
  }

  handleDeleteWidget() {
    this.widgetService
      .remove(this.contextWidget.id)
      .subscribe(() => this.getWidgets());
  }

  private getWidgets() {
    this.widgetService.getAll().subscribe(widgets => {
      this.widgets.length = 0;
      for (const widget of widgets) {
        this.widgets.push(widget);
        this.dataSource.notifyDataSetChanged();
      }
    });
  }
}
