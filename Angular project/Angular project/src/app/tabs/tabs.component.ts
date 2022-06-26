import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../Classes/BankAccount';
import { HandlingAllBankAccountsService } from '../Services/handling-all-bank-accounts.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private HandlingAllBankAccountsSrv: HandlingAllBankAccountsService) { }

  ngOnInit() {
  }
}
