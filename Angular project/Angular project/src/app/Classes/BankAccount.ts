export class BankAccount {
    constructor(
        public bankAccountCode?: String,
        public bankAccountFirstName?: String,
        public bankAccountLastName?: String,
        public bankAccountType?: String,
        public bankAccountBalance?: number,
        public bankAccountLineOfCredit?: number,
        public bankAccountLimited?: boolean,
    ) { }


    //get
    // public getBankAccountCode = (): String => {
    //     return this.bankAccountCode;
    // }
    // public getBankAccountFirstName = (): String => {
    //     return this.bankAccountFirstName;
    // }
    // public getBankAccountLastName = (): String => {
    //     return this.bankAccountLastName;
    // }
    // public getBankAccountType = (): String => {
    //     return this.bankAccountType;
    // }
    // public getBankAccountBalance = (): number => {
    //     return this.bankAccountBalance;
    // }
    // public getBankAccountLineOfCredit = (): number => {
    //     return this.bankAccountLineOfCredit;
    // }
    // public getBankAccountLimited = (): boolean => {
    //     return this.bankAccountLimited;
    // }


    // //set
    // public setBankAccountCode = (bankAccountCode: String): void => {
    //     this.bankAccountCode = bankAccountCode
    // }
    // public setBankAccountFirstName = (bankAccountFirstName: String): void => {
    //     this.bankAccountFirstName = bankAccountFirstName
    // }
    // public setBankAccountLastName = (bankAccountLastName: String): void => {
    //     this.bankAccountLastName = bankAccountLastName
    // }
    // public setBankAccountType = (bankAccountType: String): void => {
    //     this.bankAccountType = bankAccountType
    // }
    // public setBankAccountBalance = (bankAccountBalance: number): void => {
    //     this.bankAccountBalance = bankAccountBalance
    // }
    // public setBankAccountLineOfCredit = (bankAccountLineOfCredit: number): void => {
    //     this.bankAccountLineOfCredit = bankAccountLineOfCredit
    // }
    // public setBankAccountLimited = (bankAccountLimited: boolean): void => {
    //     this.bankAccountLimited = bankAccountLimited
    // }
}
