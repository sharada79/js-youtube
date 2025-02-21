var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER: ", a);   
}

//console.log(a);
//console.log(b);    ...line by line execution
//console.log(c);


function one() {
    const username = "sharada"

    function Two() {
        const website = "youtube"
        console.log(username);   
    }
    //console.log(website);
    //two()
}
one()

if (true) {
    const username = "sharada"
    if (username ==="sharada") {
        const website = " youtube"
        //console.log(username + website);  
    }
    //console.log(website);
}
// console.log(username);

//******************interesting concept***************/
function addone(num) {
    return num + 1
}
console.log(addone(5));
 
const addTwo = function(num) {
    return num +2
}
console.log(addTwo(5));