"use strict"; //...treat all js code as newer version

//****************JS is a dynamic,interpreted,scripting lang*****************
console.log(3+3);

console.log("sharada");

let name = "sharada"
let age = 20
let isLoggedIn = false
// ***************PRIMITIVE DATATYPES**********************
// number, bigint(scientific/big values)
const bignumber = 34468989856565753462n
// string =""
// boolean
// null - standalone value 
// undefined  ...variable declared but value is not given
// symbol - (for uniqueness)
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId);


// Reference type (NON PRIMITIVE DATATYPES) ...it's reference direct allocate in memory  
// [Array], {object}, Functions(){}

console.log(typeof"sharada");
console.log(typeof null);

//***************MEMORY******************
//(Primitive uses)Stack,(non-Primitive uses)Heap
             //STACK
 let myYtname= "sharadaghorpade"

 let anothername = myYtname
 anothername = "chaiaurcode"

 console.log(myYtname);
 console.log(anothername);
            //HEAP
 let user1 = {
    email: "user79@gmail.com",
    phoneno: "7499477379"
 }

 let user2 = user1
 user2.email = "sharada79@gmail.com"

console.log(user1.email);
console.log(user2.email);
