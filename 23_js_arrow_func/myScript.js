/* function myFunc(){
    console.log("1.Func");
}
myFunc(); */

/* let hello="";
hello=function myFunc(){
    return "hello world";
}
console.log(hello()); */

/* let hello="";
hello = () =>{
    return "hello world";
}
console.log(hello());

let hello2="";
hello2= () =>"hello world2";
console.log(hello2()); */

/* let hello=(value)=>"hello world" + value;
console.log(hello(" and Turkey")); */

const person={
    fname:"John",
    lname:"Doe",
    id:55555,
    fullName: function(){
        return this
    },
    fullName2: () =>this // globaldekini alır
}
console.log(person.fullName());

console.log(person.fullName2());