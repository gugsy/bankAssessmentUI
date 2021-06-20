import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactionComponents/transactions/transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {MatSelectModule} from '@angular/material/select';
import { CreateUserComponent } from './transactionComponents/account/create-user/create-user.component';
import { AppRoutingModule } from './app-routing-module';
import { AccountWithdrawalComponent } from './transactionComponents/transactions/account-withdrawal/account-withdrawal.component';
import { AccountDepositComponent } from './transactionComponents/transactions/account-deposit/account-deposit.component';
import {MatButtonModule} from '@angular/material/button';
import { PersonalInfo } from './model/personal-info';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    CreateUserComponent,
    AccountWithdrawalComponent,
    AccountDepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatCardModule, 
    MatInputModule, 
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,    
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
