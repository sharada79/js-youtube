//for Loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element);
}

for (let i = 2; i <= 10; i++) {
    console.log(`Table of: ${i}`);
    for (let j = 1; j < 10; j++) {
        //console.log(`inner loop value: ${j} and inner loop: ${i}`);
        console.log(i + '*' + j + '=>' + i*j);
    }
}
    //index =   0   ,     1   ,     2
let myArray =["flash", "batman", "superman"]
console.log(myArray. length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}
// break and continue
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is: ${index}`);
}
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is: ${index}`);
}
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`detected 5`);
    }
    console.log(`value of i is: ${index}`);
}