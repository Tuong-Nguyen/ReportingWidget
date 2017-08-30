import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdInputModule, MdSelectModule, MdButtonModule } from '@angular/material';

import { AddWidgetComponent } from './add-widget.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule
  ],
  exports: [
    AddWidgetComponent
  ],
  declarations: [
    AddWidgetComponent
  ]
})
export class AddWidgetModule {
}
