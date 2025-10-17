// const arr = [5,1,3,2,6];

// // Double - [10,2,6,4,12];              // Transformation. (arr -> Double)

// // Triple - [15,3,9,6,18];              // Transformation. (arr -> Triple)

// // Binary - ["101", "1", "11", "10", "110"]  // Transformation. (arr -> Binary)

// function double(x){
//     return x * 2;
// };

// function triple(x){
//     return x * 3;
// };

// // function binary(x){
// //     return x.toString(2);
// // };

// let output = arr.map(double);          // access with map() --> double
// let output1 = arr.map(triple);
// let output2 = arr.map(function binary(x){     // you can also write like this way is totaly fine. it's not genrate any error.(it's higher order function)
//     return x.toString(2);
// });

// let output3 = arr.map((x) => x.toString(2));      // you can write like this way also (with arrow (=>) function) anounmus function.

// console.log(output);
// console.log(output1);
// console.log(output2);
// console.log(output3);

const user = [
  { firstName: "Menil", lastName: "jotaniya", age: "23" },
  { firstName: "rimesh", lastName: "jotaniya", age: "23" },
  { firstName: "nitish", lastName: "rajput", age: "45" },
  { firstName: "ganesh", lastName: "mahadev", age: "29" },
];

// list of find full name of this user array
// like ["menil jotaniya","rimesh jotaniya"].

// const fullName = user.map(x => x.firstName + " " +  x.lastName);
// console.log(fullName);

// find inside user(if age is come second time than it's show 23:2,21:1,20:1....)
// const output = user.reduce(function (acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{})

// console.log(output);

// first name of this user array thair age is < 30.

// const output = user.filter((x)=> x.age < 30)
// .map((x) => x.firstName);

// console.log(output);

const output = user.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);
