import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MdTabsModule, MdButtonModule, MdIconModule, MdGridListModule, MdTooltipModule,
  MdInputModule} from '@angular/material';
import { NewDashboardCreaterComponent} from './../new-dashboard-creater/new-dashboard-creater.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MdDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdTabsModule,
    MdButtonModule,
    MdIconModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdTooltipModule,
    FlexLayoutModule,
    MdInputModule,
    ReactiveFormsModule,
    MdDialogModule
  ],
  declarations: [
    DashboardComponent,
    NewDashboardCreaterComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
