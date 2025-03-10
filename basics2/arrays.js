const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"] 
console.log(myArr[1]);  //index starts from 0th

//array methods
myArr.push(6)
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(9);   //add ele to 1st positn but not optimised
console.log(myArr);
myArr.shift();        //remove 1st positn's ele
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));//only applied for who exist or gives -1 for others

const newArr = myArr.join()//binds and convert array into string
console.log(myArr);
console.log(newArr);

//*****Arrays2*******
const marvel_heros = ['thor', 'Ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
//OR
const allnewHeros = [...marvel_heros, ...dc_heros] //(spread operator)do use
console.log(allnewHeros);

const arraysinarray = [1, 2, [3, 4], 5, [6, 7, [8, 9]], 10]
const solvearrays = arraysinarray.flat(Infinity)
console.log(solvearrays);

console.log(Array.isArray("hitesh")); //is there?
console.log(Array.from("hitesh"));  //convert into string

console.log(Array.of(myArr, myHeros));
