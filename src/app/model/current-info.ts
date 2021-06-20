export class CurrentInfo {

currentAccountNumber : number;
currentDeposit : number;
withdrawAmount: number;

constructor( currentAccountNumber ?: number, currentDeposit ?: number, withdrawAmount?: number){
    this.currentAccountNumber = currentAccountNumber;
    this.currentDeposit = currentDeposit;
    this.withdrawAmount = withdrawAmount;
}
implConstructor(){}
}