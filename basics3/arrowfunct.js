// browser ke ander jo global obj h vo h 'Window obj'
const user = {
    username :"sharada",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //referce current context
        // console.log(this); ...current values jo h paas me
        
    }
}
//user.welcomeMessage()
user.username = "sam"
//user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "sharada"    ...doesn't work in funct
//     console.log(this.username);  
// }
// chai()

// const chai = () => {
//     let username = "sharada"  //funct declaration through arrowfunct
    //console.log(this.username);
// }

// chai()

//const addTwo = (num1, num2) => {     //() => {} ..basic arrowfunct
    // return num1 + num2
// }
//const addTwo = (num1, num2) => (num1 + num2)  //Implicit return  ..doesn't need to write return

const addTwo = (num1, num2) => ({ username: "sharada" })

console.log(addTwo(3, 4));