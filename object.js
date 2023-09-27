// Object

/**
 * Features of an Object in JavaScript
 * It is an unordered collection of key-values pairs. The key must be either string or symbol data type but the value can be of any data type
 * The key is used to access a corresponding value. This can be done through a dot notation or bracket notation
 * An Object is not an iterable. You cannot use it with a for of loop
 */

// Code examples

// Declaration
// let obj = new Object(); // "object constructor" syntax
const test = "gender";
let obj = {
  name: "Opeyemi",
  age: 25,
  [test]: "Male", // the name of the property is taken from the variable test
  "key-three": true, // multiword property name must be quoted
  sayMyName: function () {
    console.log(this[test]);
  },
}; // "object literal" syntax

obj.hobby = "football";
delete obj.hobby;

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj["key-three"]);
// console.log(obj);
// console.log(obj?.[test]);
// obj.sayMyName();

// The "in" operator
// console.log(test in obj);

// The "for..in" loop
for (let key in obj) {
  //   console.log(key);
  //   console.log(obj[key]);
}

function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}

let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false
// console.log(user.sayHi?.()); // false

// Object Big-O time complexity
/**
 * Insert - O(1)
 * Remove - O(1)
 * Access - O(1)
 * Search - O(n)
 * Object.keys() - O(n)
 * Object.values() - O(n)
 * Object.entries() - O(n)
 */
