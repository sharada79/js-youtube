// functKEYWORD functNAME functSYNTAX
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("A");
}
// call funct
//sayMyName ...//its a referance
//sayMyName() //...execution
                       //parameters
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    return number1 + number2;
    //OR
    let result = number1 + number2
    return result
    console.log();  //after result doesn't print anything
}
//store in variable                     //arguments
const result = addTwoNumbers(3,5)
console.log("Result", result);   //only prints the value

function LoginUserMsg(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just loged in` //interpolation
}
console.log(LoginUserMsg("sharada"));
console.log(LoginUserMsg());