import { Injectable } from '@angular/core';
import { BankAccount } from '../Classes/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class HandlingAllBankAccountsService {

  constructor() { }

  allBankAccounts: BankAccount[] =
    [
      new BankAccount("111111", "Hodaya", "Basher", "vip", 100, 5000, false),
      new BankAccount("222222", "Shira", "Hazan", "vip", 233323, 5000, true)
    ]
  newArr: BankAccount[] = []  //בשביל הצינור
  num: number = 0
  newBankAccount: BankAccount = new BankAccount();
  addOrEdit = true
  toShow = false

  //החזרת רשימת כל חשבונות הבנק
  public getAllBankAccounts = (): BankAccount[] => {
    return this.allBankAccounts;
  }

  //הוספת חשבון בנק לרשימת כל החשבונות   
  public AddBankAccount = (bankAccount: BankAccount): void => {
    this.allBankAccounts.push(bankAccount)
    this.toShow = false
    //איפוס הסינון- כדי שיוכלו לראות את החשבון שנוסף
    this.num = 0
    this.newArr.push(bankAccount)
  }

  //מחיקת חשבון בנק מרשימת כל החשבונות
  public DeleteBankAccount = (bankAccountCode: String): void => {
    debugger
    let place

    //בדיקה שיש כזה חשבון
    if (bankAccountCode != undefined) {
      //מחיקה מהמערך המקורי
      for (let index = 0; index < this.allBankAccounts.length; index++) {
        if (this.allBankAccounts[index].bankAccountCode == bankAccountCode)
          place = index
      }
      this.allBankAccounts.splice(place, 1)

      //מחיקה ממערך הסינון
      // place = -1
      // for (let index = 0; index < this.newArr.length; index++) {
      //   if (this.newArr[index].bankAccountCode == bankAccountCode)
      //     place = index
      // }
      // this.newArr.splice(place, 1)

      this.newArr= this.allBankAccounts
    }
  }

  //עריכת פרטי חשבון
  public EditBankAccount = (bankAccount: BankAccount): void => {
    debugger
    let place
    if (bankAccount.bankAccountCode != undefined)
      for (let index = 0; index < this.allBankAccounts.length; index++) {
        if (this.allBankAccounts[index].bankAccountCode == bankAccount.bankAccountCode) {
          this.allBankAccounts[index] = bankAccount
          this.toShow = false
          return
        }
      }
  }

}
