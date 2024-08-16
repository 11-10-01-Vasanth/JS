// MAP 


var arr1 = [0,1,2,3,4];
var arr2 = arr1.map(add);
function add(value)
{
    return value*10
}
console.log(arr2);

console.log(Array.isArray(arr1));

console.log(arr1.reverse());




//FILTER

var ar = [7,23,12,34,5,17,30];
var ar1 = ar.filter(mul);
function mul(value)
{
    return value >= 18;
}
console.log("After filter", ar1);
console.log("Before filter", ar);




var a = [{name: "Vas",age:17},{name: "ram",age:24},{name: "hari",age:10}];
var b = a.filter(age);
function age(value)
{
    return value.age<18;
}
console.log(b);

//////////////////////////////////////////////////////////////////////////////////////////////////////


// const numbers = [1, 2, 3, 4, 5];

// // Using map to create a new array with each element squared
// const squaredNumbers = numbers.map((n) => n * n);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


const numbers = [1, 2, 3, 4, 5];

// Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]