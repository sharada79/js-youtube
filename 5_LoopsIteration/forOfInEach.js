//for of      ...it does not return
const greetings ="Hello world!"
for (const greet of greetings) {
    console.log(`Each char is: ${greet}` );
}
//Maps        ..known for unique values
const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
console.log(map);
 
//forof loop on map        ...not iteratable in forin loop
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//for in loop on obj     ....not iterable

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//forin loop on array
const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming){
    console.log(programming[key]); //as result value aayegi
}  //array ki keys 0 se start hoti h nd bydefault numbers hi hoti h

//forEach loop
const coding = ['js', 'ruby', 'java', 'python', 'cpp' ]

coding.forEach( function (item){     //its a callback so doesnt have a name like funct has
})
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
// object in array
const myCoding = [
    {
        LanguageName: 'javascript',
        LanguageFileName: 'js'
    },
    {
        LanguageName: 'java',
        LanguageFileName: 'java'
    },
    {
        LanguageName: 'pyton',
        LanguageFileName: 'py'
    }
]
myCoding.forEach((item) => {  //call with arrow function
    console.log(item.LanguageName);
})
