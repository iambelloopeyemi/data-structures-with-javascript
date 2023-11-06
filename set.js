// Set

/**
 * Features of Set in JavaScript
 * A Set is a data structure that can hold a collection of values. The values however must be unique.
 * Set can contain a mix of different data types like: string, number, boolean and object.
 * Set are dynamically sized. You don't have to declare the size before creating it.
 * Set does not maintain an insertion order
 * Set are iterables. They can be used with a for of loop.
 */

/**
 * Set vs Array
 * Array can contain duplicate value but Set cannot
 * Insertion order is maintained in Array but not in Set
 * Searching and deleting an element in a Set is faster when compared with an array
 */

// Code example

// Set declaration
const set = new Set([1, 2, 3]);
set.add(4); // to add a value to a Set
// console.log(set.has(4)); // to check a value in a Set
// set.delete(3); // to delete a value from a Set
// console.log(set.size); // to check the size of a Set
// set.clear(); // to clear all the values in a Set

// to loop through a Set
for (let element of set) {
  //   console.log(element);
}
