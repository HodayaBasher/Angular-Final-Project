import { Component, OnInit, ViewChild } from '@angular/core';
import { BankAccount } from '../Classes/BankAccount';
import { OpenBankAccountFormComponent } from '../open-bank-account-form/open-bank-account-form.component';
import { HandlingAllBankAccountsService } from '../Services/handling-all-bank-accounts.service';

@Component({
  selector: 'app-all-bank-accounts',
  templateUrl: './all-bank-accounts.component.html',
  styleUrls: ['./all-bank-accounts.component.css']
})
export class AllBankAccountsComponent implements OnInit {

  constructor(private handlingAllBankAccountsSrv: HandlingAllBankAccountsService) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['bankAccountCode', 'bankAccountFirstName', 'bankAccountLastName', 'bankAccountType', 'bankAccountBalance', 'bankAccountLineOfCredit', 'edit', 'delete'];

  public Edit = (a): void => {
    debugger
    // this.handlingAllBankAccountsSrv.addOrEdit=false
    this.handlingAllBankAccountsSrv.toShow= true
    if (this.handlingAllBankAccountsSrv.newBankAccount == a)
    {
      this.handlingAllBankAccountsSrv.toShow=false
      this.handlingAllBankAccountsSrv.addOrEdit = true
    }
    else {
      this.handlingAllBankAccountsSrv.addOrEdit = false
      this.handlingAllBankAccountsSrv.newBankAccount = a
    }


  }
  public Delete = (bankAccountCode: String): void => {
    //איפוס הסינון
    debugger
    this.handlingAllBankAccountsSrv.num=0
    // alert(this.handlingAllBankAccountsSrv.allBankAccounts.length)
    this.handlingAllBankAccountsSrv.newArr= this.handlingAllBankAccountsSrv.allBankAccounts
    //העברת הטופס לסוג הוספה
    this.handlingAllBankAccountsSrv.addOrEdit = true;
    //מחיקה
    this.handlingAllBankAccountsSrv.DeleteBankAccount(bankAccountCode);
    // alert(this.handlingAllBankAccountsSrv.allBankAccounts.length)
  }

  public Open=()=> {
    debugger
    //איפוס הסינון
    this.handlingAllBankAccountsSrv.num=0
    this.handlingAllBankAccountsSrv.newArr= this.handlingAllBankAccountsSrv.allBankAccounts
    //העברת הטופס לסוג הוספה
    this.handlingAllBankAccountsSrv.addOrEdit = true
    this.handlingAllBankAccountsSrv.toShow= true
    //ריקון שדות העידכון- מוכשר להוספה
    this.handlingAllBankAccountsSrv.newBankAccount = {}
  }

}
