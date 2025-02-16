 //object are declared like Literal or constructor
 // when declared like constructor then form singleton
 //object.create

 //object literals
const mySym = Symbol("key1")   //const to declare

 const JsUser= {
    name: "sharada",
    [mySym]: "mykey1",   //now its typeof is symbol
    age: "20",
    location: "pune",
    email: "sharadaghorpade79@gmail.com",
    isLoggedIn: false,
 }
 JsUser.email = "sharadag79@gmail.com"
//  Object.freeze(JsUser)
 JsUser.email = "srg79@gmail.com"

//  console.log(JsUser.email);    //usually used
//  console.log(JsUser["email"]);  //worked all the time
//  console.log(JsUser[mySym]);
 
 JsUser.greeting = function() {
    // console.log("Hello JS User");
 }
 JsUser.greetingTwo = function() {
    // console.log(`Hello JS User,${this.name}`);  //(string interpolation)to reference to name
 }
//  console.log(JsUser.greeting());
//  console.log(JsUser.greetingTwo());

//obj like constructor
