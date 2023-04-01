/* const person={
    firstName:"Jhon",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"

}
const x=person;
x.age=10;
console.log(person.age); */

/* const person={
    firstName:"Jhon",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"

}
delete person.age;
console.log(person);
 */

/* const person={
    name:"John",
    age:30,
    city:"Newyork"
}
 */
/* const myArray=Object.values(person);
console.log(myArray);
const myArray1=Object.keys(person);
console.log(myArray1);
const myArray2=Object.entries(person);
console.log(myArray2);
console.log(myArray2[0][1]);
*/
function Person (first, last, age, eye)
{
    this.firstName =first;
    this.lastName= last;
    this.age=age;
    this.eyeColor=eye;
} 

const myFather=new Person("John", "Doe", 50,"green");
const myMother=new Person("Sally", "Doe", 48,"blue");
//myFather.nationality="English";
Person.prototype.nationality="English";
//bu şekilde de prototype eklenebilir

console.log(myFather);
console.log(myMother);
console.log(myFather.nationality);

