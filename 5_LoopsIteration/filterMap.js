const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNums.filter((num) => num > 4)
console.log(newNum);
//OR
const newNums = myNums.filter((num) => {
    return num>4  //if u write in {} u have to write return
})
console.log(newNums);
