// BankAccount class definition
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    // Method to deposit money into the account
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount} into account ${this.accountNumber}`);
    }

    // Method to withdraw money from the account
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    // Method to get the current balance of the account
    getBalance() {
        return this.balance;
    }

    // Method to display account information
    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Create two instances of the BankAccount class
const account1 = new BankAccount(1001, "John Doe", 500);
const account2 = new BankAccount(1002, "Jane Smith", 1000);

// Demonstrate the functionality of the methods
account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();

account2.deposit(500);
account2.withdraw(1500); // Should show "Insufficient funds"
account2.displayAccountInfo();
