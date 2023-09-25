// Data structures

/**
 * It is important to note that different programming language have different data structures
 
 * What is a data structure?
 * It is a structured way to store and organize data so that it can be used efficiently
 
 * Why learn data structures?
 * It helps you to solve problems more efficiently both in terms of time and memory
 * It helps you to gain more profound understanding of things you're already aware of, like:
 * DOM - Tree data structure
 * Browser back and forward - Stack data structure
 * OS job scheduling - Queue data structure
 
 * Data structures in JavaScript
 * Built in data structures: Arrays, Objects, Sets, Maps
 * Custom data structures: Stacks, Queues, Circular queues, Linked lists, Trees, Graphs
 */

// Arrays

/**
 * Features of an Array in JavaScript
 * An array is a data structure that can hold a collection of values
 * Arrays can contain any data types
 * Arrays are resizable. You don't have to declare the size of an array before creating it
 * Arrays in JavaScript are zero-indexed and the insertion order is maintained
 * Arrays are iterables. They can be used with a "for of loop"
 */

// Code examples

// Array declaration
// const arr = new Array();
const arr = [
  1,
  2,
  3,
  true,
  { name: "Opeyemi" },
  function () {
    console.log("hello world");
  },
];

// console.log(arr[0]); // acessing an element in an array
// console.log(arr[arr.length - 1]); // acessing an element in an array
// arr[0] = 2; // replacing an element in an array
// arr[4] = true; // adding an element to an array
// console.log(arr.length); // finding the total elements in an array
// console.log(arr[4].name); // getting the value of an object in an array
// console.log(arr[5]()); // calling a function in an array

// Array methods
// arr.push(true);
// arr.unshift(0);
// arr.pop();
// arr.shift();


// for (let element of arr) {
//   console.log(element);
// }

// Other commonly used array methods
// map, filter, reduce, concat, slice and splice

// Array Big-O time complexity
/**
 * Insert/remove from end - 0(1)
 * Insert/remove from beginning - 0(n)
 * Access - 0(1)
 * Search - 0(n)
 */
