/*Методы массивов */
const arr = [1, 2, 3, 4, 5, 6];
//1 slice
console.log(arr.slice(2)); //[3,4,5,6]

//2 splice
const newArr = arr.splice(1, 1, 7);
console.log(arr); //[1, 7, 3, 4, 5, 6]

//3 map
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2.map((el) => el * 2)); //2, 4, 6, 8, 10, 12]

//4 for
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

//5 forEach
arr2.forEach((el) => console.log(el));

//6 filter
console.log(arr2.filter((el) => el >= 3)); //[3, 4, 5, 6]

//7 sort

const unsorted = [3, 1, 2, 5, 4, 6];

console.log(unsorted.sort((a, b) => a - b)); // [1, 2, 3, 4, 5, 6]

//8  some

console.log(unsorted.some((el) => el > 5)); //true

//9  every
console.log(unsorted.every((el) => el > 5)); //false

//10 reduce

console.log(unsorted.reduce((acc, el) => acc + el, 0)); //21

/* Tasks */

/*Task 1  

Дан массив элементов

[cat, dog, parrot, horse]
Как узнать индекс элемента parrot?

Приветствуется решение несколькими способами
*/

const arr = ["cat", "dog", "parrot", "horse"];

console.log(arr.indexOf("parrot"));
console.log(arr.findIndex((el) => el === "parrot"));

/*Task 2 
Дан массив элементов

[cat, dog, parrot, horse, fish, chicken, lion]
Как удалить элемент fish?
Как удалить элемент cat?
Как удалить последние 2 элемента?

Приветствуется решение несколькими способами

*/

const animals = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];

console.log(animals.filter((el) => el !== "fish"))[
  ("dog", "parrot", "horse", "fish", "chicken", "lion")
];

animals.splice(animals.indexOf("cat"), 1);
console.log(animals); // [ 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion' ]

const animals2 = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];
//1
console.log(
  animals2.filter((el) => animals2.indexOf(el) < animals2.length - 2)
); //[ 'cat', 'dog', 'parrot', 'horse', 'fish' ]
//2
animals2.length = animals2.length - 2;
console.log(animals2); //[ 'cat', 'dog', 'parrot', 'horse', 'fish' ]

/*Task 3  
Дан массив:

[31, 10, 'chicken', 9, 'fish', 10]
Как отфильтровать исходный массив так, чтобы получить массив, где будут только строки?

Как отфильтровать исходный массив так, чтобы получить массив, где будут только элементы со значением 10?

*/

const unfiltered = [31, 10, "chicken", 9, "fish", 10];

console.log(unfiltered.filter((el) => typeof el === "string"));
//[ 'chicken', 'fish' ]
console.log(unfiltered.filter((el) => el === 10)); //[ 10, 10 ]
