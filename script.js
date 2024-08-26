// let name = "mukesh kumar"
// console.log(name);

// function func1() {
//     let age = 23;
//     console.log(age);

// }
// func1()

// const user = [
//         { id: 1, name: "alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
//         { id: 2, name: "Bob", email: "Bob@example.com", age: 34, balance: 3000, isActive: false },
//         { id: 3, name: "charlie", email: " cahrlie @example.com", age: 22, balance: 7000, isActive: true },
//         { id: 4, name: "Diana", email: "Diana@example.com", age: 29, balance: 4000, isActive: false },
//         { id: 5, name: "Eve", email: "Eve@example.com", age: 35, balance: 1000, isActive: true }
//     ]
// Q1:-find the active user filter function
// let a = user.filter((find) => find.isActive);
// console.log(a);

// Q2:- get the total balance 
// let total = user.reduce((a, fin) => a + fin.balance, 0);
// console.log(total);

// Q3:- find user by imail
// console.log(user[user.length - 3].email);

// Q4:-  sort users by age 
// const b = user.sort((a, b) => a.age - b.age);
// console.log(b);

// Q5:- increse each balance by 10 %
// const b = user.map((ind) => ind.balance);
// console.log(b);

//Q6:- check if any user is under 25
// let b = user.filter((ind) => ind.age < 25);
// console.log(b);

// Q7:-check if all user have a balance over 2000
// let b = user.filter((ind) => ind.balance > 2000);
// console.log(b);

//   Q8:-get a list of user name
// let b = user.map((ind) => ind.name);
// console.log(b);

// Q9:-count user with a balance of at least 5000:
// let b = user.filter((ind) => ind.balance >= 5000);
// console.log(b);

// Q10:-remove a user by id (3)
// let b = user.filter((del) => del.id != 3);
// console.log(b);




// }
// // console.log(totalbalance(user));
// function increseBalance(arr, rate) {
//     if (!Array.isArray(arr)) return "value is not array"
//     if (!arr.length) return "array is empty"
//     if (typeof rate !== "number") return "rate should ne number "
//     if (!rate) return "rat should not be 0"
//     let increse = arr.map((ele) => {
//             return {
//                 ...ele,
//                 increseBalance: ele.balance + ((ele.balance * rate) / 100),
//                 rate: `${rate}%`
//             }
//         })
//         // let increse = arr.map((ele) => ele.balance + ((ele.balance * rate) / 100))
//         // return increse;
//     console.log(increse);




// console.log(increseBalance(user, 10));
// console.log("check");
// setInterval(() => {
//     increseBalance(user, 10)

// }, 2000)



// Q1:- delayed msg display
// setTimeout(() => {
//     console.log("hello world");

// }, 3000)

// Q2:- time logger
// const timer = setInterval(() => {
//     let date = new Date();
//     console.log(`current time=${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);


// }, 2000);

// setTimeout(() => {
//     clearInterval(timer);

// }, 10000);


// Q3-delayed sum calculatin
// function sum(a, b) {
//     c = a + b;
//     console.log(c);

// }
// sum(4, 6);
// setTimeout(() => {
//     console.log(c);

// }, 5000);

// Q5:- delayed multiplicatin

// function multi(a, b) {
//     return a * b;
// };
// setTimeout(() => {
//     console.log(multi(6, 7));

// }, 3000);

// let a = 5;
// let b = 7;

// const timer = setInterval(() => {
//     let c = a * b;
//     console.log(c);
// }, 4000);

// setTimeout(() => {
//     clearInterval(timer);
// }, 13000);

// timer

// const timer = setTimeout(() => {
//     let date = new Date();
//     console.log(`current time=${date.getSeconds()}`);
// }, 5000)

function count(start, end) {
    let current = start;
    const intervalId = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId);
            setTimeout(() => {
                console.log("times up....")
            }, 1000)
        }
        current--;
    }, 1000)
}
count(5, 0)