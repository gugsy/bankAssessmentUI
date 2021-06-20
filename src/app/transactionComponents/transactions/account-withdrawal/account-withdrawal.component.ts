import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrentAccount } from 'src/app/model/current-account';
import { BankTransactionsService } from 'src/app/service/bank-transactions.service';

@Component({
  selector: 'app-account-withdrawal',
  templateUrl: './account-withdrawal.component.html',
  styleUrls: ['./account-withdrawal.component.css']
})
export class AccountWithdrawalComponent implements OnInit {
 
  personalDetails = CurrentAccount;

  userPersonalDetails = new CurrentAccount();

  constructor(private apiService : BankTransactionsService) { }

  postAccountDetails(applicantDetails :NgForm){
    
    // this.generalApplicantDetails.applicationTypeId = "1";
    this.apiService.withdrawFromCurrentAccount(this.userPersonalDetails).subscribe(data=>{
      console.log(data)
      
    },error=> {
      console.log(error)
    })
  }

  ngOnInit(): void {
  }

 

}
