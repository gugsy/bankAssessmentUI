import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankUser } from '../model/bank-user';
import { PersonalInfo } from '../model/personal-info';
import { CurrentAccount } from '../model/current-account';

@Injectable({
  providedIn: 'root'
})
export class BankTransactionsService {

  constructor(private httpClient: HttpClient) { }

  registerNewUser(userAccountDetails : PersonalInfo):Observable<any>{
  
    console.log('registration request is being processed');
    return this.httpClient.post("http://localhost:8080/openAccount",userAccountDetails, {responseType:'text' as 'json'})
   
  } 

  withdrawFromCurrentAccount(userAccountDetails : CurrentAccount):Observable<any>{
  
    console.log('registration request is being processed');
    return this.httpClient.post("http://localhost:8080/withdrawFromAccount",userAccountDetails, {responseType:'text' as 'json'})
   
  } 

  depositIntoCurrentAccount(userAccountDetails : CurrentAccount):Observable<any>{
  
    console.log('registration request is being processed');
    return this.httpClient.post("http://localhost:8080/depositIntoAccount",userAccountDetails, {responseType:'text' as 'json'})
   
  } 
}
