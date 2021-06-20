export class CurrentAccount {

    depositAmount : number;
    accountType : string;
    email : string;
    withdrawAmount: number;

    constructor( withdrawAmount ?: number, depositAmount ?: number, accountType ?: string, email ?: string){
        this.depositAmount = depositAmount;
        this.accountType = accountType;
        this.email = email;
        this.withdrawAmount = withdrawAmount;
    }
    implConstructor(){}
    }