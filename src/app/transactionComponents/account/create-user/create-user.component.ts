import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonalInfo } from 'src/app/model/personal-info';
import { BankTransactionsService } from 'src/app/service/bank-transactions.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  personalDetails = PersonalInfo;

  userPersonalDetails = new PersonalInfo();

  constructor(private apiService : BankTransactionsService) { }

  postAccountDetails(applicantDetails :NgForm){
    
    // this.generalApplicantDetails.applicationTypeId = "1";
    this.apiService.registerNewUser(this.userPersonalDetails).subscribe(data=>{
      console.log(data)
      
    },error=> {
      console.log(error)
    })
  }

  ngOnInit(): void {
  }

 

}
