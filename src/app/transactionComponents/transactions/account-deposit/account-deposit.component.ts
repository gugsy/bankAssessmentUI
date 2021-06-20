import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrentAccount } from 'src/app/model/current-account';
import { BankTransactionsService } from 'src/app/service/bank-transactions.service';

@Component({
  selector: 'app-account-deposit',
  templateUrl: './account-deposit.component.html',
  styleUrls: ['./account-deposit.component.css']
})
export class AccountDepositComponent implements OnInit {
  personalDetails = CurrentAccount;

  userPersonalDetails = new CurrentAccount();

  constructor(private apiService : BankTransactionsService) { }

  postAccountDetails(applicantDetails :NgForm){
    
    // this.generalApplicantDetails.applicationTypeId = "1";
    this.apiService.depositIntoCurrentAccount(this.userPersonalDetails).subscribe(data=>{
      console.log(data)
      
    },error=> {
      console.log(error)
    })
  }

  ngOnInit(): void {
  }

 

}
