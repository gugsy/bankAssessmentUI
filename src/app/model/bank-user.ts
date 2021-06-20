export class BankUser {
name : string;
surname : string;
email : string;
dob : string;

constructor( name ?: string, surname ?: string, email ?: string, dob ?: string,){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.dob = dob;
}
implConstructor(){}
}