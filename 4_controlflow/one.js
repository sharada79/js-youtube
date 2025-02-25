// if
const isUserLoggedIn = true
const temperature = 41

if(temperature < 50 ){
    console.log("less than 50");   
}else{
    console.log("greater that 50");   
}
console.log("executed");

const score = 200
if(score > 100){
     const power = "fly"     //const, let has limited scope
     var powerS = "global scope"  //Var's Scope is Global
     console.log(`user power ${power}`);
}
console.log(`user power ${powerS}`);
//console.log(`user power ${power}`);