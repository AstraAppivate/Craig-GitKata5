type BankAccount = {
    holderName: string,
    currentBalance: number,
    overdraftPermitted: number,
}

class Account implements BankAccount{
    holderName: string
    currentBalance: number
    overdraftPermitted: number
    
    public constructor(accountDetails: BankAccount){
        this.holderName = accountDetails.holderName,
        this.currentBalance = accountDetails.currentBalance | 0,
        this.overdraftPermitted = accountDetails.overdraftPermitted
        }
    
    public displayAccoutnDetails(){
        console.log(`Holder name = ${this.holderName}`);
        console.log(`Current balance = £${this.currentBalance}`);
        console.log(`Overdraft amount = £${this.overdraftPermitted}`);
    }
}

class Bank{
    static add(amount: number, account: BankAccount): string {
        account.currentBalance += amount;
        return `Amount added: ${amount}, ${account.holderName}'s balance is now ${account.currentBalance}`
    }

    static withdraw(amount: number, account: BankAccount): string {
        account.currentBalance -= amount;
        return `Amount withdrawn: ${amount}, ${account.holderName}'s balance is now ${account.currentBalance}`
    }
}

const craig = new Account({holderName: "Craig", currentBalance: 100000, overdraftPermitted: 100});
console.log(craig.displayAccoutnDetails());
console.log(Bank.add(100, craig));
console.log(Bank.withdraw(1000, craig));
console.log(craig.displayAccoutnDetails());


// type BankAccount = {
//     holderName: string,
//     currentBalance: number,
//     overdraftPermitted: number,
// }

// const myAccount: BankAccount = {
//     holderName: "Craig",
//     currentBalance: 10000000,
//     overdraftPermitted: 100,
// }

// const withdraw = (amount: number, account: BankAccount) => {
//     if(account.currentBalance - amount > 0 - account.overdraftPermitted ){
//         account.currentBalance -= amount;
//         console.log(`Withdrew £${amount}, ${account.holderName}'s balance is now £${account.currentBalance}`);
//     }

// }

// const add = (amount: number, account: BankAccount) => {
//         account.currentBalance += amount;
//         console.log(`Added £${amount} to ${account.holderName}'s account`);
//         console.log(`Balance is now £${account.currentBalance}`);
// }

// add(100, myAccount);
// withdraw(200, myAccount);

