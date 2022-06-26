import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../Classes/BankAccount';
import { HandlingAllBankAccountsService } from '../Services/handling-all-bank-accounts.service';

@Component({
  selector: 'app-open-bank-account-form',
  templateUrl: './open-bank-account-form.component.html',
  styleUrls: ['./open-bank-account-form.component.css']
})
export class OpenBankAccountFormComponent implements OnInit {

  constructor(private handlingAllBankAccountsSrv: HandlingAllBankAccountsService) { }

  
  

  ngOnInit() {
  }

  public Ok = (): void => {
    debugger
    if (this.handlingAllBankAccountsSrv.addOrEdit) {
      //טפיסת כל החשבונות
      let allAccounts = this.handlingAllBankAccountsSrv.getAllBankAccounts()
      for (let index = 0; index < allAccounts.length; index++) {
        if (this.handlingAllBankAccountsSrv.newBankAccount.bankAccountCode == allAccounts[index].bankAccountCode) {
          //במקרה שהקוד תפוס- ריקון שדה הקוד
          this.handlingAllBankAccountsSrv.newBankAccount.bankAccountCode=''
          alert("קוד תפוס")
          return
        }
      }
      this.handlingAllBankAccountsSrv.newBankAccount.bankAccountBalance = 0;
      this.handlingAllBankAccountsSrv.AddBankAccount(this.handlingAllBankAccountsSrv.newBankAccount);
      // alert(this.handlingAllBankAccountsSrv.getAllBankAccounts().length)
      this.handlingAllBankAccountsSrv.newBankAccount = {}
    }
    else {
      this.handlingAllBankAccountsSrv.EditBankAccount(this.handlingAllBankAccountsSrv.newBankAccount);
    }
  }

}
