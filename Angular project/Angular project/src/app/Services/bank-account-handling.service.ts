import { Injectable } from '@angular/core';
import { BankAccount } from 'src/app/Classes/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class BankAccountHandlingService {

  constructor() { }

  //הפקדה לחשבון
  public Deposit = (bankAccount: BankAccount, sum: number): void => {
    bankAccount.bankAccountBalance += sum
  }

  //משיכה מהחשבון
  public Attraction = (bankAccount: BankAccount, sum: number) => {

    //במקרה ויש ניסיון חריגה של עד 20 אחוז- הגבלת החשבון
    if (sum > bankAccount.bankAccountLineOfCredit * 1.2)
      bankAccount.bankAccountLimited = true
    //בדיקה שהחשבון לא מוגבל
    if (!bankAccount.bankAccountLimited)
      //משיכה בתנאי שסכום המשיכה פחות או שווה ליתרה
      if (sum <= bankAccount.bankAccountBalance)
        bankAccount.bankAccountBalance -= sum
      else {
        alert(`משכת ${bankAccount.bankAccountBalance}, אין מספיק כסף בחשבונך לכל הסכום`)
        bankAccount.bankAccountBalance = 0
      }

    else
      alert("חשבון מוגבל")
  }


}
