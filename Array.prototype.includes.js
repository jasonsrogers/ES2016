// Array.prototype.includes()
console.log("Array.prototype.includes()");

// in ES6 and below, the main way to find if an item was searching for it's index

// it uses strict equality == so not great ^^
console.log(1 == 1);
// expected output: true

console.log("1" == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log("1" === 1);
// expected output: false

console.log(`Is in array: ${[1, 2, 3].indexOf(2) !== -1}`); // true
console.log(`Is in array: ${[1, 2, 3].indexOf(4) !== -1}`); // false

console.log(`Is in array: ${[1, 2, 3].indexOf("1") !== -1}`); // false :(

console.log(`Is in array: ${["a", "b", "c"].indexOf("a") !== -1}`); // true
console.log(`Is in array: ${["a", "b", "c"].indexOf("d") !== -1}`); // false
{
  let a = { a: 1 },
    b = { b: 2 },
    c = { c: 3 },
    d = { d: 4 };
  let array = [a, b, c];
  console.log(`Is in array: ${array.indexOf(a) !== -1}`); // true
  console.log(`Is in array: ${array.indexOf(d) !== -1}`); // false

  console.log(`Is in array: ${array.indexOf({ a: 1 }) !== -1}`); // false <== only will search for exact matches

  // and you can play about with the second param to search further
  console.log(
    `Is 6 in array after index 8: ${[
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      1,
      2,
      3,
      4,
      5,
      6,
      1
    ].indexOf(6, 8)}`
  );

  var indices = [];
  array = ["a", "b", "a", "c", "a", "d"];
  var element = "a";
  var idx = array.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
  // [0, 2, 4]
}
{
  // Now the same thing using includes
  console.log(`Is in array: ${[1, 2, 3].includes(2)}`); // true
  console.log(`Is in array: ${[1, 2, 3].includes(4)}`); // false

  console.log(`Is in array: ${[1, 2, 3].includes("1")}`); // false :(

  console.log(`Is in array: ${["a", "b", "c"].includes("a")}`); // true
  console.log(`Is in array: ${["a", "b", "c"].includes("d")}`); // false

  let a = { a: 1 },
    b = { b: 2 },
    c = { c: 3 },
    d = { d: 4 };
  let array = [a, b, c];
  console.log(`Is in array: ${array.includes(a)}`); // true
  console.log(`Is in array: ${array.includes(d)}`); // false

  console.log(`Is in array: ${array.includes({ a: 1 })}`); // false <== only will search for exact matches

  // and you can play about with the second param to search further
  console.log(
    `Is 6 in array after index 8: ${[
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      1,
      2,
      3,
      4,
      5,
      6,
      1
    ].includes(6, 8)}`
  );
}

// added bonus, you can search form the end ^^

console.log([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 1].indexOf(6, -5)); // true

console.log([(1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 1)].includes(6, -5)); // true

// NOTE: search still remains forwards
arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
console.log(arr.indexOf(3, -10)); // 2
console.log(arr.indexOf(3, -6)); // 6
