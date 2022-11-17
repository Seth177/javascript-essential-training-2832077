/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";

import resources from "./book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);


const Book = new resources(
  "The Story of Cristiano Ronaldo",
  "red",
  200,
  "plastic",
  "Football",
  30,
  40,
  50,
  open,
  "December 7, 2018 15:00:00 PST"

)

const Book2 = new resources(
  "The Story of Lionel Messi",
  "Blue",
  200,
  "plastic",
  "Football",
  30,
  40,
  50,
  open,
  "December 10, 2018 15:00:00 PST"

)

const Book3 = new resources(
  "The Story of Neymar Jr",
  "Yellow",
  200,
  "plastic",
  "Football",
  30,
  40,
  50,
  open,
  "December 11, 2018 15:00:00 PST"

)

const Book4 = new resources(
  "The Story of Kevin De Bruyne",
  "Maroon",
  200,
  "plastic",
  "Football",
  30,
  40,
  50,
  close,
  "December 15, 2017 15:00:00 PST"

)

const Book5 = new resources(
  "The Story of Sir Alex Fergusson",
  "Black",
  200,
  "plastic",
  "Football",
  30,
  40,
  50,
  close,
  "December 20, 2017 15:00:00 PST"

)

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

console.log("The book of Ronaldo", Book)
console.log("The Story of Lionel Messi",Book2)
console.log("The Story of NeymarJr", Book3)
console.log("The Story of Kevin De Bruyne", Book4)
console.log("The legacy of Sir Alex Fergusson", Book5)
console.log(Book.bookage())
