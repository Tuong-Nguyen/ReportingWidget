import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import { MdMenuTrigger, MdSort} from '@angular/material';

import { Widget } from '../widget';
import { WidgetService } from '../widget.service';
import { WidgetDataSource } from './widget-data-source';

@Component({
  selector: 'app-widget-table',
  templateUrl: './widget-table.component.html',
  styleUrls: ['./widget-table.component.scss'],
  providers: [
    WidgetService
  ]
})
export class WidgetTableComponent implements OnInit, AfterViewChecked {
  displayedColumns = ['name', 'data-type', 'type'];
  contextX: number;
  contextY: number;
  dataSource;

  private contextWidget: Widget;
  private showContextMenu = false;
  private widgetService: WidgetService;

  @ViewChild(MdSort) private sort: MdSort;
  @ViewChild(MdMenuTrigger) private contextMenuTrigger: MdMenuTrigger;

  constructor(widgetService: WidgetService) {
    this.widgetService = widgetService;
  }

  ngOnInit() {
    this.dataSource = new WidgetDataSource(this.widgetService, this.sort);
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
  }
}
