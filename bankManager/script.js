/*
User Stories:
You should define a class named BankAccount with a constructor. The constructor should set the default balance to 0 and initialize an empty array named transactions to store transaction records as objects.

Each transaction stored in the transactions array should be an object with two properties: type and amount. The type property should be either deposit or withdraw, and the amount property should be the amount deposited or withdrawn.

You should define a method named deposit that takes the deposit amount as a parameter. When the deposit amount is greater than 0, it should:

Push a new object to the transactions array with a type of deposit and the amount deposited.
Update the balance.
Return "Successfully deposited $[amount]. New balance: $[balance]".
If the amount is less than or equal to 0, the deposit method should return "Deposit amount must be greater than zero.".

You should define a method named withdraw that takes an amount as a parameter. This method should update the current balance according to withdrawals. When the amount to be withdrawn is greater than 0 and less than or equal to the current balance, it should:

Push a new object to the transactions array with a type of withdraw and the amount withdrawn.
Update the balance.
Return "Successfully withdrew $[amount]. New balance: $[balance]".
If the amount to be withdrawn is less than or equal to 0 or greater than the current balance, the withdraw method should return "Insufficient balance or invalid amount.".

You should define a method named checkBalance that returns the current balance in the format "Current balance: $[balance]".

You should define a method named listAllDeposits that iterates through the transactions array and returns all deposits in the format "Deposits: amount,amount,...".

You should define a method named listAllWithdrawals that iterates through the transactions array and returns all withdrawals in the format "Withdrawals: amount,amount,...".

You should create a new instance of BankAccount named myAccount.

Your myAccount bank account should have at least five transactions.

Your myAccount bank account should have at least two deposits.

Your myAccount bank account should have at least two withdrawals.

Your myAccount bank account should have a balance greater than $100.


*/

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(depo_amount) {
    if (depo_amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.transactions.push({
      type: "deposit",
      amount: depo_amount,
    });

    this.balance += depo_amount;
    return `Successfully deposited $${depo_amount}. New balance: $${this.balance}`;
  }

  withdraw(with_amount) {
    if (with_amount <= 0 || with_amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    this.transactions.push({
      type: "withdraw",
      amount: with_amount,
    });
    this.balance -= with_amount;
    return `Successfully withdrew $${with_amount}. New balance: $${this.balance}`;
  }

  // checks current balance
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let allDeposits = [];
    this.transactions.forEach((transcation) => {
      if (transcation.type === "deposit") {
        allDeposits.push(transcation.amount);
      }
    });
    return `Deposits: ${allDeposits.join(",")}`;
  }

  listAllWithdrawals() {
    let allWithdrew = [];
    this.transactions.forEach((transcation) => {
      if (transcation.type === "withdraw") {
        allWithdrew.push(transcation.amount);
      }
    });
    return `Withdrawals: ${allWithdrew.join(",")}`;
  }
}

const myAccount = new BankAccount();
console.log(myAccount.deposit(100));
console.log(myAccount.deposit(200));
console.log(myAccount.deposit(300));
console.log(myAccount.deposit(400));

console.log(myAccount.withdraw(400));
console.log(myAccount.withdraw(300));

console.log(myAccount.checkBalance());

console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
