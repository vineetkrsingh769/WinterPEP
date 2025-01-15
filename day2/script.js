// simulates basic banking operations such as creating an account, 
// depositing money and withdrawing money using function.
// javascript-- use only const and let.


const bankAccount = (function() {
    let balance = 0;

    const createAccount = (initialDeposit) => {
        balance = initialDeposit;
        alert(`Account created with balance: ${balance}`);
    };

    const deposit = (amount) => {
        balance += amount;
        alert(`Deposited: ${amount}, Current Balance: ${balance}`);
    };

    const withdraw = (amount) => {
        if (amount > balance) {
            alert('Insufficient balance');
        } else {
            balance -= amount;
            alert(`Withdrew: ${amount}, Current Balance: ${balance}`);
        }
    };

    return {
        createAccount,
        deposit,
        withdraw
    };
})();

function generateAccount() {
    const min = 1000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setAccount() {
    document.getElementById('account').value = generateAccount();
}

function createNewAccount() {
    const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
    if (!isNaN(initialDeposit) && initialDeposit > 0) {
        bankAccount.createAccount(initialDeposit);
    } else {
        alert('Please enter a valid initial deposit.');
    }
}

function depositAmount() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    if (!isNaN(amount) && amount > 0) {
        bankAccount.deposit(amount);
    } else {
        alert('Please enter a valid deposit amount.');
    }
}

function withdrawAmount() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    if (!isNaN(amount) && amount > 0) {
        bankAccount.withdraw(amount);
    } else {
        alert('Please enter a valid withdrawal amount.');
    }
}
