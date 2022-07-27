import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminBaseComponent } from './admin-base/admin-base.component';
import { MainAdminComponent } from './admin-base/main-admin/main-admin.component';
import { NavbarAdminComponent } from './admin-base/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './admin-base/sidebar-admin/sidebar-admin.component';
import { ChartAdminComponent } from './components/charts/chart-admin/chart-admin.component';


@NgModule({
  declarations: [
    AdminBaseComponent,
    MainAdminComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    ChartAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
