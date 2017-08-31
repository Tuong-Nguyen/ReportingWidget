import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdInputModule,
  MdSelectModule,
  MdButtonModule,
  MdTableModule,
  MdSortModule,
  MdMenuModule,
  MdIconModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { WidgetTableComponent } from './widget-table/widget-table.component';
import { AddWidgetComponent } from './add-widget/add-widget.component';
import { WidgetService } from './widget.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    CdkTableModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdTableModule,
    MdSortModule,
    MdMenuModule,
    MdIconModule
  ],
  exports: [
    WidgetTableComponent,
    AddWidgetComponent
  ],
  declarations: [
    WidgetTableComponent,
    AddWidgetComponent
  ],
  providers: [
    WidgetService
  ]
})
export class WidgetManagementModule {
}
