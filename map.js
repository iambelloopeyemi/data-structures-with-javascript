// Map

/**
 * Features of a Map in JavaScript
 * A Map is an unordered collection of key-value pairs. Both keys and values can be of any data type
 * To retrieve a value, you can use the corresponding key
 * Maps are iterables. They can be used with a for of loop
 */

/**
 * Map vs Object
 * Objects are unordered but Map are ordered
 * Keys in objects can only be string or symbol but in Map, any data type can be used as keys
 * An object has a prototype and may contain a few default keys which may collide with your own keys. A Map does not contain any default keys
 * Object are not iterables but Map are iterables
 * The number of items in an object must be determined maually but it is readily available with the size property in a Map
 * Map is restricted to only storing data unlike object that can accept functionalities
 */

// Code example

// Map declaration
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3); // to add a value to a Map
// console.log(map.has("a")); // to check a value in a Map
// map.delete("c"); // to delete a value from a Map
// console.log(map.size); // to check the size of a Map
// map.clear(); // to clear all the values in a Map

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}
