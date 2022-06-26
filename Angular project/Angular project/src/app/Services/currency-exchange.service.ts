import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyExchange } from '../Classes/CurrencyExchange';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) { }


  payload = {}
  headers: {} = {
    "apikey": "uF85niPra8R0VwLAyEGR1VETOfGS8c3S"
  }

  // response = Request.request("GET", url, headers=headers, data = payload)
  url: string

  //פונקציה המחזירה את המרת המטבע
  getChangeCurrencyExchange(to: string, from: string, amount: number): Observable<CurrencyExchange> {
    debugger
    this.url = `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`
    return this.http.get<CurrencyExchange>(this.url, { headers: this.headers });
  }
}
