var today = new Date();
console.log(today);
var day = new Date("2024-06-10");
console.log(day);

console.log(today.getDate());
console.log(day.getDay());
console.log(today.getHours(), ":", today.getMinutes(), ":", today.getSeconds());
console.log("Time in miliseconds", today.getTime());
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
