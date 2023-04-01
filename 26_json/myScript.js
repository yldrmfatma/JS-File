// JSON(Javascript object notation)


let text ='{"firstName":"John"}';
let text1 ='{"firstName":"Ali", "lastName":"Bay"}';
console.log(text);
console.log(text1);

let text2='{"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"John", "lastName":"Smith"},{"firstName":"John", "lastName":"Pan"}]}'
console.log(text2);
//json dan objeye çevirme
console.log(JSON.parse(text2));

console.log(JSON.stringify(JSON.parse(text2)))