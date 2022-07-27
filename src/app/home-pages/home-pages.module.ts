import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesRoutingModule } from './home-pages-routing.module';
import { HomeBaseComponent } from './home-base/home-base.component';


@NgModule({
  declarations: [
    HomeBaseComponent
  ],
  imports: [
    CommonModule,
    HomePagesRoutingModule
  ]
})
export class HomePagesModule { }
