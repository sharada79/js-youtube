const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNums.filter((num) => num > 4)
console.log(newNum);
//OR
const newNums = myNums.filter((num) => {
    return num>4  //if u write in {}(when use scope) u have to write return
})
console.log(newNums);
//using forEach loop
const newnum = []
myNums.forEach((num) => {
    if(num > 4){
        newnum.push(num)
    }
} )
console.log(newnum);

const myNumbers = myNums.map((num) => num *10 )
                        .map((num) => num + 1 )
                        .filter((num) => num >= 40)
console.log(myNumbers);
