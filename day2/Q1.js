// simulates basic banking operations such as creating an account, 
// depositing money and withdrawing money using function.
// javascript-- use only const and let.


const bankAccount = (function() {
    let balance = 0;
    const createAccount = (initialDeposit) => {
      balance = initialDeposit;
      console.log(`Account created with balance: ${balance}`);
};
const deposit = (amount) => {
    balance += amount;
    console.log(`Deposited: ${amount}, Current Balance: ${balance}`);
};
const withdraw = (amount) => {
    if (amount > balance) {
        console.log('Insufficient balance');
    } else {
        balance -= amount;
        console.log(`Withdrew: ${amount}, Current Balance: ${balance}`);
    }
};
return {
    createAccount,
    deposit,
    withdraw
};
})();


bankAccount.createAccount(1000);
bankAccount.deposit(500);
bankAccount.withdraw(300);
bankAccount.withdraw(1500);
  