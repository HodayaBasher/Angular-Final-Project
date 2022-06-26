import { Component, OnInit } from '@angular/core';
import { CurrencyExchange } from '../Classes/CurrencyExchange';
import { CurrencyExchangeService } from '../Services/currency-exchange.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent implements OnInit {

  constructor(private CurrencyExchangeSrv: CurrencyExchangeService) { }

  //אובייקט לתפיסת הנתונים מהשרת
  currencyExchange: CurrencyExchange = new CurrencyExchange()

  ngOnInit() {
  }

  Currency:CurrencyExchange= new CurrencyExchange()

  convert(query): void {
    this.CurrencyExchangeSrv.getChangeCurrencyExchange(query.to, query.from, query.amount).subscribe(
      data => {

        //הצגת הנתונים בלוג
        console.log(data);
        //הצבת הנתונים במשתנה מקומי בקומפוננטה עמ להציגו ב-HTML
        this.currencyExchange = data;

      },
      err => {

      }
    )
  }
}
