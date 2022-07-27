import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBaseComponent } from './admin-base/admin-base.component';
import { ChartAdminComponent } from './components/charts/chart-admin/chart-admin.component';

const routes: Routes = [
  { path: '', component: AdminBaseComponent, children: [
    {path:'chart',component:ChartAdminComponent}] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
