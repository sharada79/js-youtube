//for of
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
 
for (const [key, value] of map) {
    console.log(key, ':-', value);
}