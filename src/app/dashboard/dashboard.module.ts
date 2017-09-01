import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdButtonModule, MdIconModule, MdGridListModule, MdToolbarModule,
  MdTableModule, MdSortModule, MdTooltipModule, MdMenuModule} from '@angular/material';
import { DashboardManagementComponent } from '../dashboard-management/dashboard-management.component';
import { CdkTableModule} from '@angular/cdk';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdToolbarModule,
    MdTableModule,
    MdSortModule,
    CdkTableModule,
    MdTooltipModule,
    MdMenuModule
  ],
  declarations: [
    DashboardManagementComponent
  ],
  exports: [
    DashboardManagementComponent
  ]
})
export class DashboardModule { }
