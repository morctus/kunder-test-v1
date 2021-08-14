import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerModule } from '@components/banner/banner.module';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.component';


@NgModule({
  imports: [
    HomePageRoutingModule,
    BannerModule
  ],
  declarations: [
    HomePageComponent
  ],
  providers: []
})
export class HomePageModule { }
