import { Pipe, PipeTransform } from '@angular/core';
import { BankAccount } from '../Classes/BankAccount';
import { HandlingAllBankAccountsService } from '../Services/handling-all-bank-accounts.service';

@Pipe({
  name: 'priceComparison'
})
export class PriceComparisonPipe implements PipeTransform {

  constructor(private HandlingAllBankAccountsSrv: HandlingAllBankAccountsService) { }
  

  transform(value: number): any {
    this.HandlingAllBankAccountsSrv.newArr = []  //איפוס
    //מעבר על כל חשבונות הבנק
    //כל חשבון שיתרתו גדולה מהערך שהתקבל- הוספתו למערך החדש
    this.HandlingAllBankAccountsSrv.allBankAccounts.forEach(element => {
      if (element.bankAccountBalance > value)
        this.HandlingAllBankAccountsSrv.newArr.push(element)
    });
    return this.HandlingAllBankAccountsSrv.newArr;
  }

}
