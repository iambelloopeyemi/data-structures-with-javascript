// Arrays

/**
 * Features of an Array in JavaScript
 * An array is a data structure that can hold an ordered collection of values
 * Arrays can contain any data types
 * Arrays are resizable. You don't have to declare the size of an array before creating it
 * Arrays in JavaScript are zero-indexed and the insertion order is maintained
 * Arrays are iterables. They can be used with a "for of loop"
 * Array is an object data type
 */

// Code examples

// Array declaration
// const arr = new Array(2);
// console.log(arr[0]) // returns undefined, no elements
// console.log(arr.length) // returns length of 2
// const arr = [
//   1,
//   2,
//   3,
//   true,
//   { name: "Opeyemi" },
//   function () {
//     console.log("hello world");
//   },
//   "Web",
// ];

// Trailing comma
/**
 * An array, just like an object, may end with a comma
 * The “trailing comma” style makes it easier to insert/remove items, because all lines become alike
 */

// console.log(arr[0]); // acesses the first element in an array
// console.log(arr.at(0)) // new way of acessing the first element in an array
// console.log(arr[arr.length - 1]); // accesses the last element in an array
// console.log(arr.at(-1)) // new way of acessing the last element in an array
// arr[0] = 2; // replaces an element in an array
// arr[4] = true; // adds an element to an array
// console.log(arr.length); // finds the total elements in an array
// arr.length = 2; // truncates an array to 2 elements
// arr.length = 0; // clears the elements in an array
// console.log(arr[4].name); // gets the value of an object in an array
// console.log(arr[5]()); // calls a function in an array

// Array methods
// arr.push(true); // appends an element and even several elements to the end of an array
// arr.unshift(0); // appends an element and even several elements to the beginning of an array
// arr.pop(); // extracts the last element of an array and returns it
// arr.shift(); // extracts the first element of an array and returns it

// Other commonly used array methods
// map, filter, reduce, concat, slice and splice


// Looping through an Array with for...of loop
// for (let element of arr) {
//   console.log(element);
// }

// Array Big-O time complexity
/**
 * Insert/remove from end - 0(1)
 * Insert/remove from beginning - 0(n)
 * Access - 0(1)
 * Search - 0(n)
 */
