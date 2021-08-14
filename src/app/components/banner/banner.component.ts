import { Component, OnInit } from '@angular/core';
import { Banner } from '@interfaces/banner.interface';
import { BannerService } from '@services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  bannerData: Banner | undefined;

  constructor(private readonly bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.fetchData().subscribe( (response: Banner) => {
      this.bannerData = response;
    });
  }

  link(): void {
  	window.open(this.bannerData?.product.link);
  }

}
