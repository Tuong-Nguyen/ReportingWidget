import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MdTabsModule, MdButtonModule, MdIconModule, MdGridListModule, MdTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdTabsModule,
    MdButtonModule,
    MdIconModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdTooltipModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
