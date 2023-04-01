/* const person={
    fname:"Joe",
    lname:"Doe",
    id:5566,
    fullName: function(){
        return this.fname + " " + this.lname;
     }
}
console.log(person.fullName());
//window özelliklerini gösterir
console.log(this) */
const obj ={
    a:"custom"
}
function myFunc(){
    return this.a;
}
obj.myFunc=myFunc;
console.log(obj.myFunc())