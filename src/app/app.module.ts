import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddWidgetModule } from './addwidget/add-widget.module';
import { UserModule } from './user/user.module';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './user/login-form/login-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {AddWidgetComponent} from './addwidget/add-widget.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'widget', component: AddWidgetComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddWidgetModule,
    UserModule,
    DashboardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
