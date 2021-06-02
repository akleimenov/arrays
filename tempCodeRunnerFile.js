const unfiltered = [31, 10, 'chicken', 9, 'fish', 10];

console.log(unfiltered.filter(el => typeof el === 'string'))
console.log(unfiltered.filter(el => el === 10))