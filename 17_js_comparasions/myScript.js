/* let yas=12;
let oyverme=(yas<18)?"çok küçük oy veremez":"oy vermek için yeterli yaşta";
console.log(oyverme);

 */

//nullish cooelescing operator(??)

//name ?? name1
//ilk değer undefined/null değilse ilk değer yoksa ikinci değeri yazar

/* let name="musatafa"
let name2;
let name3=null;
let name4=0;
let name5="";
let name6=NaN;
let text="isim yok";

console.log(name ?? text)
console.log(name2 ?? text)
console.log(name3 ?? text)
console.log(name4 ?? text)
console.log(name5 ?? text)
console.log(name6 ?? text) */

//optional chaining operator

/* const person ={
    name:"Alice",
}

/* const lastName=person.lastName?.value;// bu soru işareti sayesinde eğer değer yoksa undefined döner
console.log(lastName);  

const lastNameValue=person.lastName?.["value"];
console.log(lastNameValue);
const myFunc=person.myFunc?.();
console.log(myFunc); */ 