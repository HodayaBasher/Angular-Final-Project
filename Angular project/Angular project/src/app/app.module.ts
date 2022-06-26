import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { OpenBankAccountFormComponent } from './open-bank-account-form/open-bank-account-form.component'
import { AllBankAccountsComponent } from './all-bank-accounts/all-bank-accounts.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';

//Servies
import { HandlingAllBankAccountsService } from './Services/handling-all-bank-accounts.service';
import { BankAccountHandlingService } from './Services/bank-account-handling.service';
import {CurrencyExchangeService} from './Services/currency-exchange.service'
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';


//Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { PriceComparisonPipe } from './Pipes/price-comparison.pipe';
import { RouterModule } from '@angular/router'
import { mySpecialRouter } from './myRouter';
import { EditDirective } from './Directives/edit.directive';






@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OpenBankAccountFormComponent,
    AllBankAccountsComponent,
    HomeComponent,
    TabsComponent,
    CurrencyExchangeComponent,
    PriceComparisonPipe,
    EditDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    mySpecialRouter
  ],
  providers: [BankAccountHandlingService, HandlingAllBankAccountsService, CurrencyExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
