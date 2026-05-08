// const student ={
//     name : "Anaya", 
//     age :21, 
//     city : "Jaipur", 
//     course : "B.Tech", 
//     marks:[96,86,92]
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.marks[0]);

// student.email = "anaya@example.com";
// student.age=22;
// delete student.city
// console.log(student);

//TASK 2
const bankAccount = {
    holder: "Aarav",
    balance: 5000,

    deposit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance = this.balance - amount;
            return this.balance;
        }
    }
};
console.log(bankAccount.deposit(2000));
console.log(bankAccount.withdraw(1000));
console.log(bankAccount.withdraw(1000000));