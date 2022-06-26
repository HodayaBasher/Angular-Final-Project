import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllBankAccountsComponent } from "./all-bank-accounts/all-bank-accounts.component";
import { CurrencyExchangeComponent } from "./currency-exchange/currency-exchange.component";
import { HomeComponent } from "./home/home.component";
import { OpenBankAccountFormComponent } from "./open-bank-account-form/open-bank-account-form.component";
import { TabsComponent } from "./tabs/tabs.component";


const myRouter: Routes = [
    {
        path: "Tabs", component: TabsComponent, children: [
            { path: "home", component: HomeComponent },
            { path: "openBankAcccount", component: OpenBankAccountFormComponent },
            {path: "allBankAccounts", component: AllBankAccountsComponent},
            {path: "currencyExchange", component: CurrencyExchangeComponent},

        ]
    },
    { path: "", component: TabsComponent },

]


@NgModule({
    imports: [RouterModule.forRoot(myRouter), CommonModule],
    declarations: []
})


export class mySpecialRouter { }