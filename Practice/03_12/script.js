/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Pencilcase from "./pencil case.js";

const item = new Pencilcase (
    "Deluxe",
    30,
    "blue",
    40,
    30,
    20,
    10,
    false
)

const item2 = new Pencilcase(
    "Special",
    50,
    "red",
    20,
    40,
    10,
    30,
    true


)

const item3 = new Pencilcase(
    "Recent",
    30,
    "Maroon",
    10,
    20,
    10,
    30,
    true


)

console.log("Object",item)
console.log("Another Object",item2)
console.log("Last Object",item3)


console.log(item.color)

