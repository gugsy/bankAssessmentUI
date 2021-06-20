import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './transactionComponents/account/create-user/create-user.component';
import { AccountDepositComponent } from './transactionComponents/transactions/account-deposit/account-deposit.component';
import { AccountWithdrawalComponent } from './transactionComponents/transactions/account-withdrawal/account-withdrawal.component';

const routes: Routes = [
  
  {path: 'register', component: CreateUserComponent},
  {path: 'withdraw', component: AccountWithdrawalComponent},  
  {path: 'deposit', component: AccountDepositComponent},
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateUserComponent, AccountWithdrawalComponent, AccountDepositComponent]
