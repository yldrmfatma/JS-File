//arrayler büyük veriler olduğu için veri kaybını önlemek adına const ile yazılır
//const kullanaılması kontrollü ekleme çıkarmaya yardımcı olur

/* const cars=["volvo","BMW","Fiat"];
console.log(cars);
console.log(cars[0]);
console.log(cars.length);
console.log(cars[cars.length-1]);//sonuncuyu yazar çünkü ilk elemanın index değeri sıfırdır

//myList["name"];//Bu object olur name ve value değerlereinden oluşur
const cars2={
    name:"volvo",
    age:20
}// obje tanımlaması örneği

//myList[0]// Bu array gösterir
console.log(typeof cars)
console.log(Array.isArray(cars))
console.log(Array.isArray(cars2)) */

/* const fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(typeof(fruits));
console.log(fruits.toString());// fruits type değişmez yalnızca ifadeyi görürürüz
console.log(fruits[0]);
console.log(typeof(fruits));

console.log(fruits.join(" - ")); // bu method dizi yazımında texti düzenler

const valuePoped=fruits.pop();// pop methodu sondan bir eleman çıkarır
console.log(fruits,valuePoped); 
console.log(typeof(valuePoped)); //ekleenn değeri döndürür, stringtir

fruits[fruits.length-1]="kiwi"; // pop işlemi **
console.log(fruits);

const valuePushed=fruits.push("Kiwi");// push işlemi sona eleman ekler
console.log(fruits,valuePushed); // valuePushed değeri lenght değeridir,numberdır
console.log(typeof(valuePushed));

fruits[fruits.length]="orange"; // push işlemi **
console.log(fruits);

const valueShifted=fruits.shift(); // baştan çıkarma yapar
console.log(fruits,valueShifted);

const valueUnShifted=fruits.unshift(); // baştan ekleme yapar
console.log(fruits,valueUnShifted); */

/* const girls=["ayşe","fatma"];
const boys=["adem","ayhan"];
const extra=["ali","veli"];
const people=girls.concat(boys,extra);
console.log(people)
 */

/* //splice methodu araya ekleme yapma
const fruits=["banana","orange","apple","mango"];
//fruits.splice(2,0,"lemon","kiwi");
console.log(fruits)
fruits.splice(2,1,"lemon","kiwi");//ikinci rakam sağdan silinecek eleman sayısını verir
console.log(fruits) */

/* //slice () 
const fruits=["banana","orange","apple","mango"];
const citrus=console.log(fruits.slice(3));
const citrus1=console.log(fruits.slice(2));
const citrus2=console.log(fruits.slice(1,3)); */

/* //array sort
const fruits=["banana","orange","apple","mango"];
console.log("Sort () methodu alfabetik sırlama yapar: ",fruits.sort());//alfabetik sıralama yapar
console.log("Reverse () methodu tersten alfabetik sırlama yapar: ",fruits.reverse());

const numbers=[1,3,30,20,2];
console.log("Sayılarda sort() yalnızca ilk basamağa bakarak sıralama yapar: ",numbers.sort());

//ikili karşılaştırma yapar
console.log("Bu method tüm değerlerin toplama çıkarma yaparak kıyaslar:'numbers.sort(function(a,b){return a-b})'",numbers.sort(function(a,b){return a-b}))
console.log(numbers.sort(function(a,b){return b-a})); */

/* console.log(Math.random());
const point=[40,100,1,5,25,10];
console.log(point.sort(function(){return 0.5 - Math.random()}))// dizi elemanlalrını randonn  şekilde karıştırır
 */

//object sıralama işlemleri

/* const cars=[
    {  type:"volvo", year:2016 },
    {  type:"mercedes", year:2001 },
    {  type:"BMW",year:2010 }
    ]
console.log(cars) */
/* console.log(cars.sort(function(a,b){
    return a.year-b.year
}))
console.log(cars.reverse(function(a,b){
    return a.year-b.year
})) */

/* // harflerin alfabetik sıralamasını yapar
console.log(cars.sort(function(a,b){
    let x=a.type.toLowerCase();
    let y=b.type.toLowerCase();
    if(x<y)  return -1
    else if(x>y) return 1
}))
console.log(cars.reverse(function(a,b){
    let x=a.type.toLowerCase();
    let y=b.type.toLowerCase();
    if(x<y)  return -1
    else if(x>y) return 1
})) */

/* const numbers=[45, 4, 9, 16, 25]
numbers.forEach(
    function myFunction(value, index, array){
        console.log(`${array} dizisi`);
        console.log(`${index} numaralı eleman ${value}`);
    }
) */
/* const numbers=[45, 4, 9, 16, 25]
numbers.forEach(
    function myFunction(a,b){
        console.log(`${b} index ${a} value`);
    }
) */
/* const numbers1= [45, 4, 9, 16, 25]
const numbers2= numbers1.map(myFunction);//dizinin tamamıyla yapılacak olan işlemlerde kullanılır

function myFunction(value, index, array)
 {
    return value *2 ;
 }
 console.log(numbers2); */
/* const numbers1= [45, 4, 9, 16, 25]
const numbers2= numbers1.map(myFunction);//dizinin tamamıyla yapılacak olan işlemlerde kullanılır

function myFunction(value, index, array)
 {
    return value * index ;
 }
 console.log(numbers2); */
/* const numbers1= [45, 4, 9, 16, 25]
const numbers2= numbers1.map(myFunction);//dizinin tamamıyla yapılacak olan işlemlerde kullanılır

function myFunction(value, index, array)
 {
    return value +1 ;
 }
 console.log(numbers2); */

/* const number=[45, 4, 9, 16, 25];

const over18=number.filter(myFunc);
function myFunc(value,index,array){
    return value>18;
}
console.log(over18); */

/* const fruits=["Apple", "Orange", "Kiwi", "Mango"];
let position=fruits.indexOf("Apple")+1;
console.log(position); */

/* const numbers=[4,9,16,25,29];
let first=numbers.find(function myFunc(value){
    return value >18;
});
console.log(first); */
/* const numbers=[4,9,16,25,29];
let first=numbers.findIndex(function myFunc(value){
    return value >18;
});
console.log(first); */

/* const array=Array.from("Tüm string diziye çevrilecek");//split methodu gibi
console.log(array); */

/* const fruits=["Apple", "Orange", "Kiwi", "Mango"];
console.log(fruits.includes("Mangos")) 

if(fruits.includes("Mangos"))
{
    console.log("Bu eleman dizide bulunmakatadır.");
} */

