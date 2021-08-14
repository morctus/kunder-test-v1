import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from '@components/banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    BannerComponent
  ],
  providers: [],
  exports:[
    BannerComponent
  ]
})
export class BannerModule { }
