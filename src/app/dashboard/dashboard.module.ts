import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MdTabsModule, MdButtonModule, MdIconModule, MdGridListModule } from '@angular/material';
import { TabcontentComponent } from './../tabcontent/tabcontent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdTabsModule,
    MdButtonModule,
    MdIconModule,
    BrowserAnimationsModule,
    MdGridListModule
  ],
  declarations: [
    DashboardComponent,
    TabcontentComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
