import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '@interfaces/banner.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  protected servicePath = 'https://hack.kunderlabs.com/exam/telecom/api/products/new';

  constructor(private readonly httpClient: HttpClient) { }

  fetchData(): Observable<Banner> {
    return this.httpClient.get<Banner>(`${this.servicePath}`).pipe();
  }
}
