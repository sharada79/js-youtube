const myNums =[1, 2, 3]
const mtTotal = myNums.reduce(function(acc, currval) {  //with funct
   console.log(`acc:${acc} and currval:${currval}`);
   return acc + currval
}, 0)
console.log(mtTotal);
//OR
//with arrow funct
const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);

//Example
const shoppingcart = [
    {
        itemname: 'js course',
        price: 2000
    },
    {
        itemname: 'py course',
        price: 1000
    },
    {
        itemname: 'java course',
        price: 4000
    },
    {
        itemname: 'cpp course',
        price: 5000
    }
]
const Totalprice = shoppingcart.reduce((acc,item) => acc + item.price, 0)
console.log(Totalprice);
