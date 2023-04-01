/*function myFunction(parameter1, parameter2){
    //buradaki alanda myFunction çalışır
}
myFunction(argument1,argument2);
myFunction(argument3,argument4);
*/
/* 
function topla(deger1,deger2){
    let toplam=deger1+deger2;
    console.log(toplam);
    return toplam;
}

topla(5,3);
topla(4,7);
let a;
a=topla(7,8);
console.log("Toplam değer: ",a);

//gösterimler
//function a(){}
//let b = function(){}


function carpmaIslemi(param1, param2)
{ 
    return param1*param2
}
console.log(carpmaIslemi("Çarpım sonucu: ",3,4))


function toCelsius(fahrenheit){
    return(5/9) * (fahrenheit-32)

}
console.log(toCelsius(134))
let x=toCelsius(134)
let text="hava sıcaklığı : " + x + " celsius"
console.log(text)

function myFunc(){
    let carName="Volvo";
} */

// 45 ve 43 (45 + 43)  (45-43)  

/*function myFunc(param1, param2)
{
    let fark= param1*param1 - param2*param2;
    return fark
}

console.log("Kare farkı:",myFunc(5,4))

const person ={
    firsName: "Ahmet",
    lastName: "Yılmaz",
    age:33,
    eyeColor:"Blue"
    //properties
}

console.log(person.firsName, "in yaşı: ", person.age);
console.log(person["eyeColor"])*/

/* const person ={
    firstName: "Mustafa",
    lastName: "Yılmaz",
    fullName: function myFunction (){
        return this.firstName +" "+ this.lastName
    }
}
let name = person.fullName();
console.log(name)

// gösterimler
//fullName: myFunc(){} or function(){}

let text1= "bu bir \"extra\"stringdir"
console.log(text1)

let text2="Adsadsjfjsdv"
let lenght=text2.length
console.log(lenght) */

// shift alt A comment block
/* 
let text = "Apple,Banana,Blueberry"
let part=text.slice(7,13)
console.log(part)
let part2=text.slice(7)
console.log(part2)
let part3=text.slice(0)//kopyası oluşturuldu
console.log(part3)
let part4=text.slice(-7)//son yedi karakteri yazar
console.log(part4)
let part5=text.slice(-3,10)
console.log(part5) */
/* 
let text = "Apple,Banana,Blueberry"
let part=text.substring(-2,13)
console.log(part)
//substring negatif ifadeyi sıfır olarak kabul eder */




let text="hello world";
let newText=text.replaceAll(" ","");
console.log(newText.length);

let letterCount= text.replace(/\s+/g, "").length
console.log(letterCount)

let text2= "567";
let withPadStart=text2.padStart(4,"x");
console.log(withPadStart); //boşluk doldurma