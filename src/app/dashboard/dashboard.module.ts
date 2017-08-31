import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MdTabsModule, MdButtonModule, MdIconModule, MdGridListModule, MdTooltipModule,
  MdInputModule} from '@angular/material';
import { NewDashboardComponent} from '../new-dashboard/new-dashboard.component';
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
    NewDashboardComponent
  ],
  entryComponents: [
    NewDashboardComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
