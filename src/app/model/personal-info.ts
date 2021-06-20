import { BankUser } from "./bank-user";

export class PersonalInfo {

    name : string;
    surname : string;
    email : string;
    dob : string;
    depositSavingsAmount: number;
    currentDeposit : number;

    
    constructor( depositSavingsAmount?: number, currentDeposit ?: number, name ?: string, surname ?: string, email ?: string, dob ?: string,){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.dob = dob;
        this.currentDeposit = currentDeposit;
        this.depositSavingsAmount = depositSavingsAmount;
    }
    implConstructor(){}
    }