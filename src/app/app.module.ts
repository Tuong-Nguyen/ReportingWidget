import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WidgetManagementModule } from './widgetmanagement/widget-management.module';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddWidgetComponent } from './widgetmanagement/add-widget/add-widget.component';
import { WidgetTableComponent } from './widgetmanagement/widget-table/widget-table.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-widget', component: AddWidgetComponent },
  { path: 'widget-table', component: WidgetTableComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetManagementModule,
    UserModule,
    DashboardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
